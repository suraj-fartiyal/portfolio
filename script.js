document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // Theme Toggle (Light / Dark Mode)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Trigger brief button animation
    themeToggleBtn.style.transform = 'scale(0.8) rotate(30deg)';
    setTimeout(() => {
      themeToggleBtn.style.transform = '';
    }, 150);
  });

  // ==========================================================================
  // Mobile Nav Menu Toggle
  // ==========================================================================
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  mobileToggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change toggle icon depending on active state
    if (navMenu.classList.contains('active')) {
      mobileToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`;
    } else {
      mobileToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    }
  });

  // Close menu when clicking link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      }
    });
  });

  // ==========================================================================
  // Skills Dashboard Filter
  // ==========================================================================
  const filterPills = document.querySelectorAll('.filter-pill');
  const skillCards = document.querySelectorAll('.skill-category-card');
  
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Toggle active state for pills
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      const filterValue = pill.getAttribute('data-filter');
      
      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('fade-out');
          card.style.display = 'block';
          // Trigger a micro-animation fade in
          card.animate([
            { opacity: 0.3, transform: 'scale(0.97)' },
            { opacity: 1, transform: 'scale(1)' }
          ], { duration: 300, easing: 'ease-out', fill: 'forwards' });
        } else {
          card.classList.add('fade-out');
          // Optional: hide after transition or just fade out
          // To keep grid balanced, we'll keep display but add transparency/scale
        }
      });
    });
  });

  // ==========================================================================
  // Copy to Clipboard (Email & Phone)
  // ==========================================================================
  const copyEmailCard = document.getElementById('copy-email-btn');
  const copyPhoneCard = document.getElementById('copy-phone-btn');
  
  function setupCopyToClipboard(card) {
    if (!card) return;
    
    card.addEventListener('click', () => {
      const textToCopy = card.getAttribute('data-clipboard');
      const tooltip = card.querySelector('.copy-success-tooltip');
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Show tooltip
        tooltip.classList.add('show');
        
        // Hide tooltip after 2 seconds
        setTimeout(() => {
          tooltip.classList.remove('show');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
  
  setupCopyToClipboard(copyEmailCard);
  setupCopyToClipboard(copyPhoneCard);

  // ==========================================================================
  // Scroll Active Section Spy & Navbar Scroll Effect
  // ==========================================================================
  const sections = document.querySelectorAll('section');
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    // Navbar Scroll class
    if (scrollPos > 50) {
      navbar.classList.add('scrolled');
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.boxShadow = '';
    }
    
    // Scroll Spy active link highlighting
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
    
    // Fallback for top of page
    if (scrollPos < 200) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('a[href="#about"]')?.classList.add('active');
    }
  });

});
