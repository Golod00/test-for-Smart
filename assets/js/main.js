  "use strict"

  /* --- ANIMATION LIBRARY - START --- */
  AOS.init();

  /* --- HEADER BURGER - START --- */
  const headerMenu = document.querySelector('.menu');
  const headerBtn = document.querySelector('.menu-burger');
  const body = document.body;

  if (headerMenu && headerBtn) {
    headerBtn.addEventListener('click', () => {
      headerMenu.classList.toggle('active')
      headerBtn.classList.toggle('active')
      body.classList.toggle('lock')
    })
  }

  /* --- ACTIVE LINK - START --- */
  document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.menu-list__link');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });
  

   /* --- SLIDER - START --- */
   const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      renderCustom: function(swiper, current, total) {
        const currentFormatted = ('0' + current).slice(-2);
        const totalFormatted = ('0' + total).slice(-2);
        return `<span class="swiper-pagination-custom">${currentFormatted} <span class="swiper-pagination-slash">/</span> ${totalFormatted}</span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
