// ===== Wait for DOM to Load =====
document.addEventListener('DOMContentLoaded', function() {
  
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ===== Smooth Scroll for Navigation =====
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== Active Navigation on Scroll =====
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(function(item) {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
      }
    });
  });

  // ===== Add Animation on Scroll =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  const allSections = document.querySelectorAll('.section');
  allSections.forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // ===== Hover Effects for Cards =====
  const workItems = document.querySelectorAll('.work-item');
  workItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(10px)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // ===== Stat Boxes Animation =====
  const statBoxes = document.querySelectorAll('.stat-box');
  statBoxes.forEach(function(box, index) {
    setTimeout(function() {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    }, index * 150);
  });

  // Set initial state for stat boxes
  statBoxes.forEach(function(box) {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'all 0.5s ease';
  });

  // ===== Tech Items Hover =====
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  // ===== Contact Boxes Hover =====
  const contactBoxes = document.querySelectorAll('.contact-box');
  contactBoxes.forEach(function(box) {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // ===== Console Welcome Message =====
  console.log('%c👋 Welcome to my portfolio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
  console.log('%c🚀 Built by Chibueze Nwadike', 'color: #ec4899; font-size: 14px;');

});