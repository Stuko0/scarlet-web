document.addEventListener('DOMContentLoaded', () => {
    // Hamburguesa (mobile)
    const hamburgerButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
    const mobileMenu = document.getElementById('navbar-dropdown');
  
    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
        });
    }
  
    // Dropdown (desktop)
    const dropdownButton = document.getElementById('hamburger');
    const dropdownMenu = document.getElementById('dropdownNavbar');
  
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });
        
        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }

    // Scroll Spy Logic
    const scrollLinks = document.querySelectorAll('.scroll-link');
    const sections = [];
    
    // Recolectar secciones validas basadas en los data-targets
    scrollLinks.forEach(link => {
        const targetAttr = link.getAttribute('data-scroll-target');
        if (targetAttr) {
            const ids = targetAttr.split(',');
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    sections.push({ id, el, link });
                }
            });
        }
    });

    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            let currentId = "";
            let scrollY = window.scrollY;

            sections.forEach(sec => {
                const sectionTop = sec.el.offsetTop - 200; // offset para activar antes
                const sectionHeight = sec.el.clientHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentId = sec.id;
                }
            });

            // Resaltar los links activos
            scrollLinks.forEach(link => {
                const targets = (link.getAttribute('data-scroll-target') || "").split(',');
                if (targets.includes(currentId) && currentId !== "") {
                    link.classList.add('!text-[#ea580c]');
                } else {
                    link.classList.remove('!text-[#ea580c]');
                }
            });
        });
        
        // Trigger manual inisial
        window.dispatchEvent(new Event('scroll'));
    }
});