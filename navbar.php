<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark-teal/90 backdrop-blur-md border-b border-white/10 py-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="#home" class="flex items-center gap-3 group shrink-0">
        <div class="h-10 w-10 bg-white rounded-full flex items-center justify-center font-extrabold text-primary-teal text-xl shadow-md group-hover:scale-105 transition-transform">
          Z
        </div>
        <div class="flex flex-col">
          <span class="text-white font-bold text-lg leading-tight group-hover:text-neon-lime transition-colors">
            ZCOER
          </span>
          <span class="text-white/70 text-xs font-medium">CIE Portal</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center space-x-5 xl:space-x-6 ml-auto">
        <a href="#home" class="nav-link text-sm font-semibold text-neon-lime hover:text-white transition-colors" data-section="home">Home</a>
        <a href="#about" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="about">About</a>
        <a href="#calendar" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="calendar">Academic Calendar</a>
        <a href="#activities" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="activities">CIE Guidelines</a>
        <a href="#facilities" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="facilities">Facilities</a>
        <a href="#notices" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="notices">Notices</a>
        <a href="#helpdesk" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="helpdesk">Help Desk</a>
        <a href="#contact" class="nav-link text-sm font-semibold text-white/80 hover:text-neon-lime transition-colors" data-section="contact">Contact</a>
      </nav>

      <!-- Desktop Login Action -->
      <div class="hidden lg:block ml-6">
        <button id="open-login-btn" onclick="openLoginModal()" class="bg-neon-lime text-dark-gray hover:bg-white hover:text-dark-teal px-5 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(187,246,97,0.6)] transition-all duration-300 flex items-center gap-2 transform active:scale-95 whitespace-nowrap">
          <i class="fas fa-sign-in-alt"></i>
          <span>Login</span>
        </button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <div class="lg:hidden flex items-center ml-auto">
        <button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none" aria-label="Toggle Navigation">
          <i id="mobile-menu-icon" class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation Drawer -->
  <div id="mobile-menu" class="hidden lg:hidden bg-dark-teal/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden mt-3">
    <div class="px-4 py-5 flex flex-col space-y-3">
      <a href="#home" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">Home</a>
      <a href="#about" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">About</a>
      <a href="#calendar" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">Academic Calendar</a>
      <a href="#activities" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">CIE Guidelines</a>
      <a href="#facilities" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">Facilities</a>
      <a href="#notices" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">Notices</a>
      <a href="#helpdesk" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">Help Desk</a>
      <a href="#contact" onclick="toggleMobileMenu()" class="px-3 py-2 rounded-lg text-base font-semibold text-white hover:text-neon-lime hover:bg-white/5 transition-all">Contact</a>
      
      <div class="pt-3 border-t border-white/10">
        <button onclick="toggleMobileMenu(); openLoginModal()" class="w-full bg-neon-lime text-dark-gray hover:bg-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors">
          <i class="fas fa-sign-in-alt"></i>
          <span>Login Portal</span>
        </button>
      </div>
    </div>
  </div>
</header>
