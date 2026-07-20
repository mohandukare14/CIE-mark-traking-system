/* ==========================================================================
   ZEAL College of Engineering & Research - CIE Portal
   Interactive JavaScript ES6 Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFacilitiesSlider();
  initNoticesFilter();
});

/* --- Header & Mobile Menu --- */
function initHeader() {
  const header = document.getElementById('mainHeader');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileIcon = document.getElementById('mobileMenuIcon');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.style.display === 'flex';
      if (isOpen) {
        mobileDrawer.style.display = 'none';
        if (mobileIcon) mobileIcon.className = 'fas fa-bars';
      } else {
        mobileDrawer.style.display = 'flex';
        if (mobileIcon) mobileIcon.className = 'fas fa-xmark';
      }
    });

    const links = mobileDrawer.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.style.display = 'none';
        if (mobileIcon) mobileIcon.className = 'fas fa-bars';
      });
    });
  }
}

/* --- Facilities Slider Carousel --- */
function initFacilitiesSlider() {
  const track = document.getElementById('facTrack');
  const prevBtn = document.getElementById('prevFacBtn');
  const nextBtn = document.getElementById('nextFacBtn');

  if (!track || !prevBtn || !nextBtn) return;

  let currentSlide = 0;
  let maxSlide = 0;
  let slideStep = 0;

  function updateSliderDimensions() {
    const card = track.querySelector('.slide-card');
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 32; // 2rem = 32px
    slideStep = cardWidth + gap;

    const containerWidth = track.parentElement.getBoundingClientRect().width;
    const visibleCards = Math.round(containerWidth / slideStep) || 1;
    const totalCards = track.querySelectorAll('.slide-card').length;

    maxSlide = Math.max(0, totalCards - visibleCards);
    updateSliderUI();
  }

  function updateSliderUI() {
    track.style.transform = `translateX(-${currentSlide * slideStep}px)`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= maxSlide;
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSliderUI();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateSliderUI();
    } else {
      currentSlide = 0; // loop back
      updateSliderUI();
    }
  });

  // Autoplay loop
  let isHovered = false;
  track.parentElement.addEventListener('mouseenter', () => isHovered = true);
  track.parentElement.addEventListener('mouseleave', () => isHovered = false);

  setInterval(() => {
    if (isHovered) return;
    if (currentSlide >= maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    updateSliderUI();
  }, 2500);

  window.addEventListener('resize', updateSliderDimensions);
  setTimeout(updateSliderDimensions, 150);
}

/* --- Notices Filtering --- */
function initNoticesFilter() {
  const btnAll = document.getElementById('btnNoticeAll');
  const btnDeadlines = document.getElementById('btnNoticeDeadlines');
  const btnUpdates = document.getElementById('btnNoticeUpdates');
  const items = document.querySelectorAll('.notice-box-item');

  if (!btnAll || !items.length) return;

  const buttons = [btnAll, btnDeadlines, btnUpdates];

  function setFilter(category, activeBtn) {
    buttons.forEach(btn => btn && btn.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');

    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (category === 'all' || itemCat === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (btnAll) btnAll.addEventListener('click', () => setFilter('all', btnAll));
  if (btnDeadlines) btnDeadlines.addEventListener('click', () => setFilter('deadline', btnDeadlines));
  if (btnUpdates) btnUpdates.addEventListener('click', () => setFilter('update', btnUpdates));
}
