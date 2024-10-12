/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, s as spreadAttributes, g as renderComponent } from '../chunks/astro/server_BCSvXsAw.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_BwXarig1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/fireicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/styles/style.css"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/clases/Integrador/web/scarlet-web/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  console.log("header");
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#f5ead6] w-full"> <header class="pt-8 p-4 mx-auto max-w-screen-xl lg:pt-16 flex flex-col lg:flex-row items-center justify-between "> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="w-16 max-w-20 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fb5335"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" fill="#fbae00"></path></g></svg> <span class="mb-4 text-3xl tracking-tight font-extrabold text-orange-600 self-end whitespace-nowrap">
!Scarlet
</span> </a> <div class="md:hidden"> <button class="text-orange-600 focus:outline-none" id="hamburger"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> <div class="toggle hidden md:flex md:items-center md:w-auto w-full text-center flex-col md:flex-row" id="menu"> <nav> <ul class="md:flex items-center justify-between text-xl text-white md:text-gray-800 pt-4 md:pt-0 font-bold"> <li class="bg-transparent md:hover:transition ease-in-out delay-75 md:hover:bg-[url('/primary.png')] md:hover:bg-contain md:hover:bg-no-repeat md:hover:bg-center md:hover:-translate-y-1 md:hover:scale-110 duration-300"><a class="md:p-4 py-3 px-0 block hover:text-orange-400 md:hover:text-white" href="#">Noticias</a></li> <li class="bg-transparent md:hover:transition ease-in-out delay-75 md:hover:bg-[url('/primary.png')] md:hover:bg-contain md:hover:bg-no-repeat md:hover:bg-center md:hover:-translate-y-1 md:hover:scale-110 duration-300"><a class="md:p-4 py-3 px-0 block hover:text-orange-400 md:hover:text-white" href="#">Contactos</a></li> <li class="bg-transparent md:hover:transition ease-in-out delay-75 md:hover:bg-[url('/primary.png')] md:hover:bg-contain md:hover:bg-no-repeat md:hover:bg-center md:hover:-translate-y-1 md:hover:scale-110 duration-300"><a class="md:p-4 py-3 px-0 block hover:text-orange-400 md:hover:text-white md:mb-0 mb-2" href="#">Acerca de</a></li> <li class="bg-transparent md:hover:transition ease-in-out delay-75 md:hover:bg-[url('/primary.png')] md:hover:bg-contain md:hover:bg-no-repeat md:hover:bg-center md:hover:-translate-y-1 md:hover:scale-110 duration-300"><a class="md:p-4 py-3 px-0 block hover:text-orange-400 md:hover:text-white md:mb-0 mb-2" href="#">Aplicacion</a></li> <li class="bg-transparent md:hover:transition ease-in-out delay-75 md:hover:bg-[url('/primary.png')] md:hover:bg-contain md:hover:bg-no-repeat md:hover:bg-center md:hover:-translate-y-1 md:hover:scale-110 duration-300"><a class="md:p-4 py-3 px-0 block hover:text-orange-400 md:hover:text-white" href="#">Iniciar Sesion</a></li> </ul> </nav> </div> </header> </div> `;
}, "D:/clases/Integrador/web/scarlet-web/src/components/Header.astro", void 0);

const Incendio_Tunari_2017 = new Proxy({"src":"/_astro/incendio-tunari-2017.CTBWFmjK.jpg","width":770,"height":430,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/incendio-tunari-2017.jpg";
							}
							
							return target[name];
						}
					});

const Incendio_Tunari_2019 = new Proxy({"src":"/_astro/incendio-tunari-2019.BF-bi9TR.jpg","width":1280,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/incendio-tunari-2019.jpg";
							}
							
							return target[name];
						}
					});

const Incendio_Tunari_2019_2 = new Proxy({"src":"/_astro/incendio-tunari-2019-2.DqREqXoI.jpg","width":1280,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/incendio-tunari-2019-2.jpg";
							}
							
							return target[name];
						}
					});

const Incendio_Tunari_2023 = new Proxy({"src":"/_astro/incendio-tunari-2023.D89shdEQ.jpg","width":1540,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/incendio-tunari-2023.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Buttons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Buttons;
  const {
    variant,
    size,
    class: className = "",
    ...rest
  } = Astro2.props;
  const primaryClass = [
    "inset-0",
    "text-white",
    "bg-[url('primary.png')]",
    "bg-contain",
    "bg-center",
    "bg-no-repeat",
    "hover:bg-[url('secondary.png')]",
    "hover:bg-contain",
    "hover:bg-center",
    "hover:bg-no-repeat",
    "content-center"
  ];
  const secondaryClass = [
    "inset-0",
    "text-white",
    "bg-[url('secondary.png')]",
    "bg-contain",
    "bg-center",
    "bg-no-repeat",
    "hover:bg-[url('primary.png')]",
    "hover:bg-contain",
    "hover:bg-center",
    "hover:bg-no-repeat",
    "content-center"
  ];
  const base = ["rounded-xl", "md:mt-8", "mt-3", "font-bold", "md:w-40", "md:h-14", "w-28", "h-10"];
  const xs = ["h-8", "px-4", "py-2", "text-xs", "font-medium", "rounded-md"];
  const classList = [
    "flex",
    "items-center",
    "justify-center",
    "transition-all",
    "duration-150",
    ...base,
    ...variant === "primary" ? primaryClass : secondaryClass,
    ...size === "xs" ? xs : [],
    ...className ? className.split(" ") : []
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(classList, "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "D:/clases/Integrador/web/scarlet-web/src/components/buttons/Buttons.astro", void 0);

const $$HeroWithImage = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    Incendio_Tunari_2017,
    Incendio_Tunari_2019,
    Incendio_Tunari_2019_2,
    Incendio_Tunari_2023
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#f5ead6] w-full select-none"> <div class="slider-container relative overflow-hidden max-w-7xl mx-auto xl:h-[760px] lg:h-[640px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px]"> <div class="slides flex transition-transform duration-500 ease-in-out"> ${slides.map((img) => renderTemplate`<div class="slide flex-none w-full h-full flex items-center"> <div class="w-full lg:w-1/2 p-8 flex flex-col justify-center"> <p class="xl:text-2xl lg:text-xl text-lg">Lorem Ipsum Dolor sit Amet</p> <h2 class="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.</h2> ${renderComponent($$result, "Buttons", $$Buttons, { "variant": "primary", "size": "base" }, { "default": ($$result2) => renderTemplate`Button` })} </div> <div class="w-full lg:w-1/2 xl:h-[710px] lg:h-[610px] md:h-[510px] sm:h-[470px] h-[320px] max-[390px]:h-[290px] mr-2"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "", "class": "w-full h-full object-fill", "draggable": "false", "loading": "eager" })} </div> </div>`)} </div> <div class="indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"> ${slides.map((_, i) => renderTemplate`<div${addAttribute(`indicator transition-all w-3 h-3 bg-[#f8fafc] border-[1px] border-black rounded-full ${i === 0 ? "p-2" : "bg-opacity-50"}`, "class")}></div>`)} </div> </div> </div> `;
}, "D:/clases/Integrador/web/scarlet-web/src/components/HeroWithImage.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Map = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="h-64 w-64 sm:w-64 md:w-80 lg:w-96 xl:w-[32rem] 2xl:w-[40rem] sm:h-64 md:h-80 lg:h-96 xl:h-[32rem] 2xl:h-[40rem]" id="container"></div> <script type="module" src="/index.js"><\/script>'])), maybeRenderHead());
}, "D:/clases/Integrador/web/scarlet-web/src/components/maps/Map.astro", void 0);

const $$Overview = createComponent(($$result, $$props, $$slots) => {
  console.log("overview");
  return renderTemplate`${maybeRenderHead()}<article class="bg-[#f1efec] pt-8 pb-12 md:pb-32 px-5 md:px-0"> <div class="md:max-w-6xl max-w-lg mx-auto md:mr-8 md:ml-8 ml-auto mr-auto lg:ml-auto lg:mr-auto"> <div class="grid md:grid-cols-[55%_45%] gap-6"> <div class="max-w-4xl"> <div class="border-b-2 border-r-2 border-b-[#aacb6a] border-r-[#aacb6a] mb-5 md:mb-8 inline-flex"> <h1 class="pr-5 pb-3 font-semibold text-sm md:text-lg text-[#1a2d1f]">
Project Overview
</h1> </div> <h2 class="text-[#517b5b] text-3xl font-semibold mb-5 leading-10">
!Scarlet's goal in the city of Cochabamba <br> is to help safeguard 2.81
          million hectareas of intact forest <br> -since around 6,200 hectares
          were burned in 2024 alone-
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"> <div> <div class="mt-4 pl-4 md:pl-5 border-l-2 border-l-[#aacb6a]"> <h3 class="text-base md:text-lg font-bold text-gray-600 mb-2">
Species at Risk
</h3> <p class="text-gray-500 text-sm md:text-lg font-medium">
At least 560 threatened species
</p> </div> </div> <div> <div class="mt-4 pl-4 md:pl-5 border-l-2 border-l-[#aacb6a]"> <h3 class="text-base md:text-lg font-bold text-gray-600 mb-2">
Natural Forest at Risk
</h3> <p class="text-gray-500 text-sm md:text-lg font-medium">
At least 280 Mha threatened natural forest
</p> </div> </div> <div> <div class="mt-4 pl-4 md:pl-5 border-l-2 border-l-[#aacb6a]"> <h3 class="text-base md:text-lg font-bold text-gray-600 mb-2">
Carbon stored
</h3> <p class="text-gray-500 text-sm md:text-lg font-medium">156 Million mT*
<button type="button" class="ml-4 bg-white text-xs border-2 border-[#ea580c] py-[1px] px-[6px] rounded-full relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-500 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100" data-tip="The estimated amount of carbon likely to be released if the ecosystem is converted - a function of the total amount of carbon stored in biomass and soil, and the vulnerability of the carbon pool to disturbance (data and approach from Goldstein et al. 2020, Nature Climate Change).">
?
</button> </p> </div> <p class="pl-6 text-gray-500 text-sm pt-3 font-medium">
*(metric tons of CO2 equivalents)
</p> </div> <div> <div class="mt-4 pl-4 md:pl-5 border-l-2 border-l-[#aacb6a]"> <h3 class="text-base md:text-lg font-bold text-gray-600 mb-2">
Increase in fire alerts
</h3> <p class="text-gray-500 text-sm md:text-lg font-medium">
671 VIIRS Alerts between October 8 2023 and October 6, 2024
</p> </div> </div> </div> <div> <h3 class="text-base md:text-lg font-bold text-gray-600 mb-2 uppercase">
Amount of Forest Lost
</h3> <div class="bg-white rounded-xl shadow-sm overflow-hidden p-1"> <div class="relative h-6 flex items-center justify-center"> <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[11%] bg-[#ea5a0c8f]"></div> <div class="relative text-red-900 font-medium text-sm">11%</div> </div> </div> </div> </div> ${renderComponent($$result, "Map", $$Map, {})} </div> </div> </article>`;
}, "D:/clases/Integrador/web/scarlet-web/src/components/Overview.astro", void 0);

const Monkey = new Proxy({"src":"/_astro/monkey-tunari.CyWO8npy.jpg","width":600,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/monkey-tunari.jpg";
							}
							
							return target[name];
						}
					});

const Llamitas = new Proxy({"src":"/_astro/llamitas-tunari.B_hDDtzx.jpg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/llamitas-tunari.jpg";
							}
							
							return target[name];
						}
					});

const Cemento = new Proxy({"src":"/_astro/cemento-con-bigote.D5j1rNgn.png","width":316,"height":337,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/cemento-con-bigote.png";
							}
							
							return target[name];
						}
					});

const $$Objectives = createComponent(($$result, $$props, $$slots) => {
  console.log("Objectives");
  return renderTemplate`${maybeRenderHead()}<article class="md:mt-[-50px] px-5 md:px-0 mb-20 md:mb-32 md:mr-8 md:ml-8 ml-auto mr-auto lg:ml-auto lg:mr-auto"> <div class="md:max-w-6xl max-w-lg mx-auto"> <div class="grid md:grid-cols-[60%_40%] gap-0"> <div class="w-full relative"> <div class="bg-[#1e2738] bg-cover bg-center w-full h-96 absolute overflow-hidden"> <picture class="flex bg-transparent" draggable="false"> <source srcset="https://www.estilodeviajes.com/wp-content/uploads/2021/03/parque-nacional-tunari-1024x1024.jpg" media="(max-width: 700px)" type="image/jpg"> ${renderComponent($$result, "Image", $$Image, { "src": Llamitas, "class": "grayscale mix-blend-luminosity object-cover opacity-[0.2] w-full h-full md:h-[400px]", "alt": "llamitas", "loading": "lazy" })} </picture> </div> <div class="pl-20 py-16 pr-20 text-left relative z-10"> <h1 class="inset-0 uppercase text-[#aacb6a] text-lg md:text-4xl leading-6">the impact</h1> <p class="text-white my-5 text-sm md:text-base leading-6">Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet.</p> ${renderComponent($$result, "Buttons", $$Buttons, { "variant": "primary", "size": "base" }, { "default": ($$result2) => renderTemplate`Button` })} </div> </div> <div class="w-full relative "> <div class="bg-[#627d2c] bg-cover bg-center w-full h-96 absolute overflow-hidden"> <picture class="flex bg-transparent" draggable="false"> <source srcset="https://bolivianexpress3.s3-us-west-1.amazonaws.com/article_image/ulohzFPc2s.jpg" type="image/jpg"> ${renderComponent($$result, "Image", $$Image, { "src": Monkey, "class": "grayscale mix-blend-luminosity object-cover opacity-[0.2] w-full h-full", "alt": "llamitas", "loading": "lazy" })} </picture> </div> <div class="pl-5 py-14 pr-5 text-center items-center relative z-10 flex-col justify-between content-center"> <h1 class="inset-0 uppercase mb-[0.83em] text-white text-sm md:text-base leading-4 font-normal">Progress of the project</h1> <div class="box-border text-center items-center content-center"> ${renderComponent($$result, "Image", $$Image, { "src": Cemento, "class": "h-32 w-32 inline-block mb-[0.83em]", "alt": "cemento" })} <div class="py-1 text-left"> <b class="text-white font-semibold leading-5 text-xl md:text-2xl">
60%
</b> <span class="text-white font-normal leading-5 text-lg md:text-xl opacity-70">
of 100% goal
</span> </div> <div class="bg-white rounded-xl shadow-sm overflow-hidden p-1"> <div class="relative h-6 flex items-center justify-center"> <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[60%] bg-[#ea5a0c8f]"></div> <div class="relative text-red-900 font-medium text-sm">40%  left</div> </div> </div> </div> </div> </div> </div> </div> </article> <article class="pb-12 md:pb-32 px-5 md:px-0 md:mr-8 md:ml-8 ml-auto mr-auto lg:ml-auto lg:mr-auto"> <div class="md:max-w-4xl max-w-lg mx-auto"> <h2 class="text-[#517b5b] text-2xl md:text-[2rem] font-semibold mb-5 leading-10 capitalize">the challenge: stop wildfires</h2> <p class="text-gray-500 text-sm md:text-lg font-medium mb-5">From 2002 to 2023, Cochabamba lost 127 kha of humid primary forest, representing 46% of its total tree cover loss in the same period of time. The total area of ​​primary humid forest in Cochabamba decreased by 6.4% in this time period.</p> <h2 class="text-[#517b5b] text-2xl md:text-[2rem] font-semibold mb-5 mt-12 leading-10 capitalize">the challenge: stop wildfires</h2> <p class="text-gray-500 text-sm md:text-lg font-medium mb-5">From 2002 to 2023, Cochabamba lost 127 kha of humid primary forest, representing 46% of its total tree cover loss in the same period of time. The total area of ​​primary humid forest in Cochabamba decreased by 6.4% in this time period.</p> <h2 class="text-[#517b5b] text-2xl md:text-[2rem] font-semibold mb-5 mt-12 leading-10 capitalize">the challenge: stop wildfires</h2> <p class="text-gray-500 text-sm md:text-lg font-medium mb-5">From 2002 to 2023, Cochabamba lost 127 kha of humid primary forest, representing 46% of its total tree cover loss in the same period of time. The total area of ​​primary humid forest in Cochabamba decreased by 6.4% in this time period.</p> ${renderComponent($$result, "Buttons", $$Buttons, { "variant": "primary", "size": "base" }, { "default": ($$result2) => renderTemplate`Button` })} </div> </article>`;
}, "D:/clases/Integrador/web/scarlet-web/src/components/Objectives.astro", void 0);

const Bomberos = new Proxy({"src":"/_astro/Bomberos-Cochabamba.nPIjuFLk.jpg","width":1079,"height":1079,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/Bomberos-Cochabamba.jpg";
							}
							
							return target[name];
						}
					});

const Bomberos_Voluntarios = new Proxy({"src":"/_astro/Bomberos-Voluntarios-Cochabamba.D5VOcht-.jpg","width":1629,"height":1507,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/Bomberos-Voluntarios-Cochabamba.jpg";
							}
							
							return target[name];
						}
					});

const Bomberos_GEOS = new Proxy({"src":"/_astro/Bomberos-Voluntarios-GEOS-Cochabamba.YVU-hFnO.jpg","width":577,"height":539,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/Bomberos-Voluntarios-GEOS-Cochabamba.jpg";
							}
							
							return target[name];
						}
					});

const SAR = new Proxy({"src":"/_astro/SAR-Cochabamba.DL33dq-W.jpg","width":200,"height":200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/clases/Integrador/web/scarlet-web/public/SAR-Cochabamba.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$EntitiesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntitiesCard;
  const {
    title,
    location,
    imageSrcSet,
    imageSrc,
    buttonText = "Know More",
    buttonVariant = "primary",
    buttonSize = "base",
    altText = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="text-center"> <div class="relative transition transform hover:-translate-y-3 duration-500 hover:text-[#ea6118]"> <div class="mb-3 md:mb-9 relative overflow-hidden h-[400px] w-[300px]"> <picture class="h-full w-full"> <source${addAttribute(imageSrcSet, "srcset")} type="image/jpg"> ${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": altText, "loading": "lazy", "class": "object-cover w-full h-full block transform transition duration-500 hover:scale-105" })} </picture> </div> <div class="box-border"> <div class="justify-center mb-3 items-start text-sm md:text-lg font-medium inline-flex text-black"> <svg class="w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" stroke="#fb5335" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> ${location} </div> <h1 class="text-[#1e2738] text-base md:text-2xl text-inherit"> <a href="/" class="cursor-pointer">${title}</a> </h1> </div> </div> <div class="flex justify-center"> ${renderComponent($$result, "Buttons", $$Buttons, { "variant": buttonVariant, "size": buttonSize }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </article>`;
}, "D:/clases/Integrador/web/scarlet-web/src/components/cards/EntitiesCard.astro", void 0);

const $$Entities = createComponent(($$result, $$props, $$slots) => {
  console.log("Entities");
  return renderTemplate`${maybeRenderHead()}<div class="md:grid-cols-3 mb-20 md:mb-32 md:mr-8 md:ml-8 max-w-6xl ml-auto mr-auto lg:ml-auto lg:mr-auto"> <div class="flex flex-wrap gap-8 justify-center"> ${renderComponent($$result, "EntitiesCard", $$EntitiesCard, { "title": "Cuerpo de Bomberos", "location": "Cochabamba", "imageSrc": Bomberos, "imageSrcSet": "https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/326486643_508594541413956_4221878711794961733_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bCjX8RXLzxwQ7kNvgHsddZ6&_nc_ht=scontent.flpb3-2.fna&_nc_gid=A76kyAJQjEP534Alkp4c0Ak&oh=00_AYDJTbre55YlUcug03TgMkgajpI-auKIUKYdhfecJiCtXw&oe=670E1FCD", "altText": "Bomberos" })} ${renderComponent($$result, "EntitiesCard", $$EntitiesCard, { "title": "Cuerpo de Bomberos Voluntarios", "location": "Cochabamba", "imageSrc": Bomberos_Voluntarios, "imageSrcSet": "https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/294980547_379991767581968_7696740118234137637_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DaRIa0XbWt8Q7kNvgEQhw0V&_nc_ht=scontent.flpb3-2.fna&_nc_gid=APC3G04BBQCTUlzFplsuHEL&oh=00_AYD4LoeQ2xJ0hAVka8tmgLOiswYQ3A_W22eKbNZnOy-9sg&oe=670E8D97", "altText": "Bomberos Voluntarios" })} ${renderComponent($$result, "EntitiesCard", $$EntitiesCard, { "title": "Cuerpo de Bomberos GEOS", "location": "Cochabamba", "imageSrc": Bomberos_GEOS, "imageSrcSet": "https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/318508694_102318329403658_2983966379613204096_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xAJL-u9B3BsQ7kNvgFSr0WW&_nc_ht=scontent.flpb3-2.fna&_nc_gid=AejZrbUkxRgaOeNR1yeIEmt&oh=00_AYCxS8hYS6UIKVpu_eA3TFywZ-nRkxbSajLO32UPZ3T2tg&oe=670E88A7", "altText": "Bomberos GEOS" })} ${renderComponent($$result, "EntitiesCard", $$EntitiesCard, { "title": "SAR", "location": "Cochabamba", "imageSrc": SAR, "imageSrcSet": "https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/313263053_3266678126880189_4533532402929154146_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NyQyVpD0POsQ7kNvgHXOx39&_nc_ht=scontent.flpb3-2.fna&_nc_gid=AlT4h5lv5LOhCzJfhjzKAqj&oh=00_AYBbGP7azK3IyzouV3kmHI9ra5kT8S3mKdzDY_oOAJ9K3A&oe=670EAB2C", "altText": "SAR" })} </div> </div>`;
}, "D:/clases/Integrador/web/scarlet-web/src/components/Entities.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "!Scarlet Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "HeroWithImage", $$HeroWithImage, {})} ${renderComponent($$result2, "Overview", $$Overview, {})} ${renderComponent($$result2, "Objectives", $$Objectives, {})} ${renderComponent($$result2, "Entities", $$Entities, {})} </main> ` })}`;
}, "D:/clases/Integrador/web/scarlet-web/src/pages/index.astro", void 0);

const $$file = "D:/clases/Integrador/web/scarlet-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
