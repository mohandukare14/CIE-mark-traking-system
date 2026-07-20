// Main JavaScript Client Logic for CIE Mark Tracking System

document.addEventListener('DOMContentLoaded', () => {
  initScrollHighlight();
  initFormHandlers();
});

// Navigation & Mobile Menu Functions
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (menu) {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (icon) icon.className = 'fas fa-times text-xl';
    } else {
      menu.classList.add('hidden');
      if (icon) icon.className = 'fas fa-bars text-xl';
    }
  }
}

// Active link highlighting on scroll
function initScrollHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-neon-lime');
      link.classList.add('text-white/80');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('text-neon-lime');
        link.classList.remove('text-white/80');
      }
    });
  });
}

// Modal Toggle Functions
function openLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Role Switcher in Login Modal
function setLoginRole(role) {
  const roleInput = document.getElementById('login-role-input');
  const studentBtn = document.getElementById('role-student-btn');
  const facultyBtn = document.getElementById('role-faculty-btn');

  if (roleInput) roleInput.value = role;

  if (role === 'student') {
    studentBtn?.classList.add('bg-neon-lime', 'text-dark-gray');
    studentBtn?.classList.remove('bg-white/10', 'text-white');
    facultyBtn?.classList.remove('bg-neon-lime', 'text-dark-gray');
    facultyBtn?.classList.add('bg-white/10', 'text-white');
  } else {
    facultyBtn?.classList.add('bg-neon-lime', 'text-dark-gray');
    facultyBtn?.classList.remove('bg-white/10', 'text-white');
    studentBtn?.classList.remove('bg-neon-lime', 'text-dark-gray');
    studentBtn?.classList.add('bg-white/10', 'text-white');
  }
}

// Form Handlers via AJAX
function initFormHandlers() {
  // Login Form Submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      formData.append('action', 'login');

      fetch('ajax/processForm.php', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          closeLoginModal();
          Swal.fire({
            title: 'Welcome Back!',
            text: data.message + ' Redirecting to ' + data.role + ' dashboard...',
            icon: 'success',
            confirmButtonColor: '#135d66',
            background: '#0c2d31',
            color: '#ffffff'
          }).then(() => {
            showDashboard(data.role, data.user);
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: data.message,
            icon: 'error',
            confirmButtonColor: '#135d66',
            background: '#0c2d31',
            color: '#ffffff'
          });
        }
      })
      .catch(err => console.error(err));
    });
  }

  // HelpDesk Form Submission
  const helpdeskForm = document.getElementById('helpdesk-form');
  if (helpdeskForm) {
    helpdeskForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      formData.append('action', 'helpdesk');

      fetch('ajax/processForm.php', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          Swal.fire({
            title: 'Query Submitted!',
            text: data.message,
            icon: 'success',
            confirmButtonColor: '#135d66',
            background: '#0c2d31',
            color: '#ffffff'
          });
          helpdeskForm.reset();
        } else {
          Swal.fire({
            title: 'Submission Failed',
            text: data.message,
            icon: 'error',
            confirmButtonColor: '#135d66',
            background: '#0c2d31',
            color: '#ffffff'
          });
        }
      })
      .catch(err => console.error(err));
    });
  }
}

// Dashboard View Toggle
function showDashboard(role, user) {
  const mainView = document.getElementById('main-landing-view');
  const dashboardView = document.getElementById('dashboard-view');
  const userNameElem = document.getElementById('dash-user-name');
  const userRoleElem = document.getElementById('dash-user-role');

  if (mainView && dashboardView) {
    mainView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    if (userNameElem) userNameElem.textContent = user ? user.name : (role === 'student' ? 'John Doe' : 'Faculty Member');
    if (userRoleElem) userRoleElem.textContent = role.toUpperCase() + ' DASHBOARD';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function logoutDashboard() {
  const mainView = document.getElementById('main-landing-view');
  const dashboardView = document.getElementById('dashboard-view');

  if (mainView && dashboardView) {
    dashboardView.classList.add('hidden');
    mainView.classList.remove('hidden');
    Swal.fire({
      title: 'Logged Out',
      text: 'You have been successfully logged out.',
      icon: 'info',
      timer: 1500,
      showConfirmButton: false,
      background: '#0c2d31',
      color: '#ffffff'
    });
  }
}
