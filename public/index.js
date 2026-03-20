import {
  WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding,
  Color, CylinderGeometry,
  RepeatWrapping, DoubleSide, Mesh, PointLight, MeshPhysicalMaterial, PerspectiveCamera,
  Scene, PMREMGenerator, PCFSoftShadowMap,
  Vector2, TextureLoader, SphereGeometry, MeshStandardMaterial, Object3D, InstancedMesh
} from 'https://cdn.skypack.dev/three@0.137';
import { OrbitControls } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/controls/OrbitControls';
import { RGBELoader } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/loaders/RGBELoader';
import { mergeBufferGeometries } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/utils/BufferGeometryUtils';
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise@3.0.0';

export const prerender = true;
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const loader = document.getElementById('loader');
  const scene = new Scene();
  scene.background = new Color("#f1efec");

  const camera = new PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(-17, 31, 33);

  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputEncoding = sRGBEncoding;
  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const light = new PointLight(new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear(), 80, 200);
  light.position.set(10, 20, 10);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  light.shadow.camera.near = 0.5;
  light.shadow.camera.far = 500;
  scene.add(light);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.dampingFactor = 0.05;
  controls.enableDamping = true;
  controls.enableZoom = false;

  let pmrem = new PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  let envmap;

  const MAX_HEIGHT = 10;
  const STONE_HEIGHT = MAX_HEIGHT * 0.8;
  const DIRT_HEIGHT = MAX_HEIGHT * 0.7;
  const GRASS_HEIGHT = MAX_HEIGHT * 0.5;
  const SAND_HEIGHT = MAX_HEIGHT * 0.3;
  const DIRT2_HEIGHT = MAX_HEIGHT * 0;

  (async function () {
    let envmapTexture = await new RGBELoader().loadAsync("/textures/envmap.hdr");
    let rt = pmrem.fromEquirectangular(envmapTexture);
    envmap = rt.texture;

    let textures = {
      dirt: await new TextureLoader().loadAsync("/textures/dirt.png"),
      dirt2: await new TextureLoader().loadAsync("/textures/dirt2.jpg"),
      grass: await new TextureLoader().loadAsync("/textures/grass.jpg"),
      sand: await new TextureLoader().loadAsync("/textures/burned_floor.png"),
      water: await new TextureLoader().loadAsync("/textures/water.jpg"),
      stone: await new TextureLoader().loadAsync("/textures/stone.png"),
      fire: await new TextureLoader().loadAsync("/textures/fire.png"),
    };

    const simplex = new SimplexNoise();

    // Data structures for optimized instantiation
    const hexes = { stone: [], dirt: [], dirt2: [], sand: [], grass: [], fire: [] };
    const extras = { trees: [], fires: [], stones: [] };

    for (let i = -20; i <= 20; i++) {
      for (let j = -20; j <= 20; j++) {
        let position = new Vector2((i + (j % 2) * 0.5) * 1.77, j * 1.535);

        if (position.length() > 16) continue;

        let noise = (simplex.noise2D(i * 0.1, j * 0.1) + 1) * 0.5;
        noise = Math.pow(noise, 1.5);
        let height = noise * MAX_HEIGHT;

        if (height > STONE_HEIGHT) {
          hexes.stone.push({ height, position });
          if (Math.random() > 0.8) extras.stones.push({ height, position });
        } else if (height > DIRT_HEIGHT) {
          hexes.dirt.push({ height, position });
          if (Math.random() > 0.7) extras.trees.push({ height, position });
        } else if (height > GRASS_HEIGHT) {
          hexes.grass.push({ height, position });
        } else if (height > SAND_HEIGHT) {
          hexes.sand.push({ height, position });
          if (Math.random() > 0.6) extras.fires.push({ height, position });
          if (Math.random() > 0.8) extras.stones.push({ height, position });
        } else if (height > DIRT2_HEIGHT) {
          hexes.dirt2.push({ height, position });
        }
      }
    }

    // Base geometry for a Hex
    const baseHexGeo = new CylinderGeometry(1, 1, 1, 6, 1, false);
    baseHexGeo.translate(0, 0.5, 0); // Scale upwards from base

    const dummy = new Object3D();

    function createInstancedHexes(data, mapTexture) {
      if (data.length === 0) return null;
      let mat = new MeshPhysicalMaterial({ envMap: envmap, envMapIntensity: 0.135, flatShading: true, map: mapTexture });
      let mesh = new InstancedMesh(baseHexGeo, mat, data.length);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      data.forEach((item, i) => {
        dummy.position.set(item.position.x, 0, item.position.y);
        dummy.scale.set(1, item.height, 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      return mesh;
    }

    scene.add(
      createInstancedHexes(hexes.stone, textures.stone),
      createInstancedHexes(hexes.dirt, textures.dirt),
      createInstancedHexes(hexes.dirt2, textures.dirt2),
      createInstancedHexes(hexes.sand, textures.sand),
      createInstancedHexes(hexes.grass, textures.grass),
      createInstancedHexes(hexes.fire, textures.fire)
    );

    // Create extras (Trees, Fires, Stones)
    if (extras.trees.length > 0) {
      const geo1 = new CylinderGeometry(0, 1.5, 1, 3); geo1.translate(0, 0.5, 0);
      const geo2 = new CylinderGeometry(0, 1.15, 1, 3); geo2.translate(0, 1.1, 0);
      const geo3 = new CylinderGeometry(0, 0.8, 1, 3); geo3.translate(0, 1.75, 0);
      const treeGeo = mergeBufferGeometries([geo1, geo2, geo3]);
      
      let mat = new MeshPhysicalMaterial({ envMap: envmap, envMapIntensity: 0.135, flatShading: true, map: textures.grass });
      let mesh = new InstancedMesh(treeGeo, mat, extras.trees.length);
      mesh.castShadow = true; mesh.receiveShadow = true;

      extras.trees.forEach((item, i) => {
        dummy.position.set(item.position.x, item.height + 1, item.position.y);
        const scale = Math.random() * 1 + 1.25;
        dummy.scale.set(1, scale, 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      scene.add(mesh);
    }

    if (extras.fires.length > 0) {
      const geo1 = new CylinderGeometry(0, 0.85, 1, 4); geo1.translate(0, 0.5, 0);
      const geo2 = new CylinderGeometry(0, 0.9, 1, 4); geo2.translate(0, 1.1, 0);
      const geo3 = new CylinderGeometry(0, 0.8, 1, 4); geo3.translate(0, 1.75, 0);
      const fireBaseGeo = mergeBufferGeometries([geo1, geo2, geo3]);
      
      let mat = new MeshPhysicalMaterial({ envMap: envmap, envMapIntensity: 0.135, flatShading: true, map: textures.fire });
      let mesh = new InstancedMesh(fireBaseGeo, mat, extras.fires.length);
      mesh.castShadow = true; mesh.receiveShadow = true;

      extras.fires.forEach((item, i) => {
        dummy.position.set(item.position.x, item.height + 1, item.position.y);
        const scale = Math.random() * 1 + 0.4;
        dummy.scale.set(1, scale, 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      scene.add(mesh);
    }

    if (extras.stones.length > 0) {
      const stoneGeo = new SphereGeometry(1, 7, 7);
      let mat = new MeshPhysicalMaterial({ envMap: envmap, envMapIntensity: 0.135, flatShading: true, map: textures.stone });
      let mesh = new InstancedMesh(stoneGeo, mat, extras.stones.length);
      mesh.castShadow = true; mesh.receiveShadow = true;

      extras.stones.forEach((item, i) => {
        const px = Math.random() * 0.4;
        const pz = Math.random() * 0.4;
        dummy.position.set(item.position.x + px, item.height, item.position.y + pz);
        const scale = Math.random() * 0.3 + 0.1;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      scene.add(mesh);
    }

    // Seas & Containers
    let seaTexture = textures.water;
    seaTexture.repeat = new Vector2(1, 1);
    seaTexture.wrapS = RepeatWrapping;
    seaTexture.wrapT = RepeatWrapping;

    let seaMesh = new Mesh(
      new CylinderGeometry(17, 17, MAX_HEIGHT * 0.2, 50),
      new MeshPhysicalMaterial({
        envMap: envmap, color: new Color("#55aaff").convertSRGBToLinear().multiplyScalar(3),
        ior: 1.4, transmission: 1, transparent: true, thickness: 1.5,
        envMapIntensity: 0.2, roughness: 1, metalness: 0.025,
        roughnessMap: seaTexture, metalnessMap: seaTexture,
      })
    );
    seaMesh.receiveShadow = true;
    seaMesh.rotation.y = -Math.PI * 0.333 * 0.5;
    seaMesh.position.set(0, MAX_HEIGHT * 0.1, 0);
    scene.add(seaMesh);

    let mapContainer = new Mesh(
      new CylinderGeometry(17.1, 17.1, MAX_HEIGHT * 0.25, 50, 1, true),
      new MeshPhysicalMaterial({ envMap: envmap, map: textures.dirt, envMapIntensity: 0.2, side: DoubleSide })
    );
    mapContainer.receiveShadow = true; mapContainer.rotation.y = -Math.PI * 0.333 * 0.5;
    mapContainer.position.set(0, MAX_HEIGHT * 0.125, 0);
    scene.add(mapContainer);

    let mapFloor = new Mesh(
      new CylinderGeometry(18.5, 18.5, MAX_HEIGHT * 0.1, 50),
      new MeshPhysicalMaterial({ envMap: envmap, map: textures.dirt2, envMapIntensity: 0.1, side: DoubleSide })
    );
    mapFloor.receiveShadow = true; mapFloor.position.set(0, -MAX_HEIGHT * 0.05, 0);
    scene.add(mapFloor);

    clouds();

    startRendering();
  })();

  function clouds() {
    let geo = new SphereGeometry(0, 0, 0);
    let count = Math.floor(Math.pow(Math.random(), 0.45) * 4);

    for (let i = 0; i < count; i++) {
      const puff1 = new SphereGeometry(1.2, 7, 7);
      const puff2 = new SphereGeometry(1.5, 7, 7);
      const puff3 = new SphereGeometry(0.9, 7, 7);

      puff1.translate(-1.85, Math.random() * 0.3, 0);
      puff2.translate(0, Math.random() * 0.3, 0);
      puff3.translate(1.85, Math.random() * 0.3, 0);

      const cloudGeo = mergeBufferGeometries([puff1, puff2, puff3]);
      cloudGeo.translate(Math.random() * 20 - 10, Math.random() * 7 + 7, Math.random() * 20 - 10);
      cloudGeo.rotateY(Math.random() * Math.PI * 2);

      geo = mergeBufferGeometries([geo, cloudGeo]);
    }

    const mesh = new Mesh(
      geo,
      new MeshStandardMaterial({ envMap: envmap, envMapIntensity: 0.75, flatShading: true })
    );
    scene.add(mesh);
  }

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startRendering();
      } else {
        stopRendering();
      }
    });
  });

  observer.observe(container);

  function startRendering() {
    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });
    removeLoader();
  }

  function stopRendering() {
    renderer.setAnimationLoop(null);
  }
  
  const event = new Event('modelLoaded');
  window.dispatchEvent(event);

  function removeLoader() {
    setTimeout(() => {
      if (loader) {
        loader.style.display = 'none';
        loader.remove();
      }
    }, 2000);
  }
});