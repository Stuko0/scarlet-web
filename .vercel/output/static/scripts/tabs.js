document.addEventListener('DOMContentLoaded', () => {
  // Tabs functionality
  const initTabs = () => {
    const mobileSelect = document.getElementById('tabs');
    const tabButtons = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    // Mobile select change
    if (mobileSelect) {
      mobileSelect.addEventListener('change', (e) => {
        const selectedTab = e.target.value;
        showTab(selectedTab);
      });
    }

    // Desktop tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tabs-target');
        showTab(target.substring(1)); // Remove # from id
      });
    });

    function showTab(tabId) {
      // Hide all panels
      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });

      // Show selected panel
      const activePanel = document.getElementById(tabId);
      if (activePanel) {
        activePanel.classList.remove('hidden');
      }

      // Update mobile select value
      if (mobileSelect) {
        mobileSelect.value = tabId;
      }

      // Update desktop tab states
      tabButtons.forEach(button => {
        const isActive = button.getAttribute('data-tabs-target') === `#${tabId}`;
        button.setAttribute('aria-selected', isActive);
        button.classList.toggle('bg-gray-100', isActive);
        button.classList.toggle('text-[#ea580c]', isActive);
      });
    }

    // Show first tab by default
    if (tabPanels.length > 0) {
      showTab(tabPanels[0].id);
    }
  };

  // Accordion functionality
  const initAccordion = () => {
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-accordion-target');
        const target = document.querySelector(targetId);
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle current item
        button.setAttribute('aria-expanded', !isExpanded);
        target.classList.toggle('hidden');

        // Rotate icon
        const icon = button.querySelector('[data-accordion-icon]');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      });
    });
  };

  // Initialize everything
  initTabs();
  initAccordion();
});