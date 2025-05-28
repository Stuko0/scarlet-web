document.addEventListener('DOMContentLoaded', () => {
  // Hamburguesa (mobile)
  const hamburgerButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
  const mobileMenu = document.getElementById('navbar-dropdown');

  hamburgerButton.addEventListener('click', () => {
    const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
  });

  // Dropdown (desktop)
  const dropdownButton = document.getElementById('hamburger');
  const dropdownMenu = document.getElementById('dropdownNavbar');

  dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});