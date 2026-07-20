<?php
// Main Entry Point for CIE Mark Tracking System
include_once __DIR__ . '/include/dbConfig.php';
include_once __DIR__ . '/include/sweetAlert.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <?php include_once __DIR__ . '/include/links.php'; ?>
</head>
<body class="bg-off-white text-dark-gray selection:bg-neon-lime/30">

  <?php include_once __DIR__ . '/include/header.php'; ?>
  <?php include_once __DIR__ . '/navbar.php'; ?>

  <!-- Main Landing Container -->
  <div id="main-landing-view">

    <!-- HERO SECTION -->
    <section id="home" class="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-dark-teal via-primary-teal to-deep-teal overflow-hidden">
      <!-- Background Glowing Blobs -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-neon-lime/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-accent-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style="animation-delay: 2s;"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style="animation-delay: 4s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Left Text Content -->
          <div class="text-center lg:text-left pt-6 lg:pt-0">
            <span class="inline-block py-1.5 px-4 rounded-full bg-white/10 text-neon-lime text-sm font-semibold mb-6 border border-white/20">
              ZEAL College of Engineering & Research
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-heading">
              Welcome to <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-white">
                CIE Activity Marks
              </span> <br />
              Tracking System
            </h1>
            <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Manage, monitor, and track student Continuous Internal Evaluation activities with complete transparency, efficiency, and security.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button onclick="openLoginModal()" class="w-full sm:w-auto bg-neon-lime text-dark-gray px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(187,246,97,0.6)] hover:bg-white transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <span>Login Portal</span>
                <i class="fas fa-arrow-right"></i>
              </button>
              <a href="#about" class="w-full sm:w-auto text-center bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Learn More
              </a>
            </div>
          </div>

          <!-- Right Mockup Card -->
          <div class="relative hidden md:block">
            <div class="glass-card w-full max-w-md mx-auto p-6 relative z-20">
              <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div>
                  <h3 class="text-white font-bold text-lg">Student Overview</h3>
                  <p class="text-white/60 text-xs">Semester 6 - CIE Performance</p>
                </div>
                <div class="h-10 w-10 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
              </div>

              <div class="space-y-4">
                <div class="bg-dark-teal/50 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <div class="p-3 bg-neon-lime/20 text-neon-lime rounded-lg text-xl">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <p class="text-white/70 text-sm">Total CIE Score</p>
                    <p class="text-white font-bold text-xl">85 / 100</p>
                  </div>
                </div>

                <div class="bg-dark-teal/50 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <div class="p-3 bg-accent-gold/20 text-accent-gold rounded-lg text-xl">
                    <i class="fas fa-award"></i>
                  </div>
                  <div>
                    <p class="text-white/70 text-sm">Activities Completed</p>
                    <p class="text-white font-bold text-xl">4 / 5 Modules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- STATISTICS SECTION -->
    <section class="py-12 bg-dark-teal border-y border-white/10 relative z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-4">
            <p class="text-3xl md:text-4xl font-extrabold text-neon-lime font-heading">3,500+</p>
            <p class="text-white/80 text-sm font-medium mt-1">Active Students</p>
          </div>
          <div class="p-4">
            <p class="text-3xl md:text-4xl font-extrabold text-neon-lime font-heading">150+</p>
            <p class="text-white/80 text-sm font-medium mt-1">Faculty Members</p>
          </div>
          <div class="p-4">
            <p class="text-3xl md:text-4xl font-extrabold text-neon-lime font-heading">45+</p>
            <p class="text-white/80 text-sm font-medium mt-1">Academic Courses</p>
          </div>
          <div class="p-4">
            <p class="text-3xl md:text-4xl font-extrabold text-neon-lime font-heading">100%</p>
            <p class="text-white/80 text-sm font-medium mt-1">Evaluation Transparency</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-20 bg-off-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-dark-teal font-bold text-sm tracking-wider uppercase bg-light-mint/30 px-3 py-1 rounded-full">About Portal</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary-teal mt-3 font-heading">Continuous Internal Evaluation</h2>
          <p class="text-gray-600 mt-4 leading-relaxed">
            Our portal provides a centralized system for tracking assignments, mid-term evaluations, lab practicals, and mini-project marks with real-time updates for students and faculty.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-dark-teal/10 text-dark-teal rounded-xl flex items-center justify-center text-2xl mb-6">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-xl font-bold text-primary-teal mb-3">Goal & Purpose</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              To automate mark calculation, minimize administrative workload, and deliver real-time progress insights.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-dark-teal/10 text-dark-teal rounded-xl flex items-center justify-center text-2xl mb-6">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="text-xl font-bold text-primary-teal mb-3">Secure & Fair</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Encrypted record storage and role-based access ensure complete privacy and data integrity.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-dark-teal/10 text-dark-teal rounded-xl flex items-center justify-center text-2xl mb-6">
              <i class="fas fa-chart-pie"></i>
            </div>
            <h3 class="text-xl font-bold text-primary-teal mb-3">Instant Analytics</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Detailed breakdown of scores, class averages, and activity completion metrics for faculty review.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ACADEMIC CALENDAR & ACTIVITIES SECTION -->
    <section id="calendar" class="py-20 bg-dark-teal text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-neon-lime font-bold text-sm tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">Schedule</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-3 font-heading">Academic Calendar & Activities</h2>
          <p class="text-white/70 mt-4">Key evaluation milestones for the current academic term</p>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
          <div class="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-neon-lime/20 text-neon-lime rounded-xl text-xl">
                <i class="fas fa-calendar-check"></i>
              </div>
              <div>
                <h4 class="font-bold text-lg text-white">CIE Activity 1: Unit Quiz & Assignment 1</h4>
                <p class="text-white/60 text-sm">Weightage: 15 Marks | Mandatory for all branches</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-white/80 text-sm font-semibold">Feb 15 - Feb 25</span>
              <span class="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs px-3 py-1 rounded-full font-bold">Completed</span>
            </div>
          </div>

          <div class="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-amber-400/20 text-amber-300 rounded-xl text-xl">
                <i class="fas fa-flask"></i>
              </div>
              <div>
                <h4 class="font-bold text-lg text-white">CIE Activity 2: Practical Lab Exam & Presentation</h4>
                <p class="text-white/60 text-sm">Weightage: 25 Marks | Departmental Evaluation</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-white/80 text-sm font-semibold">Mar 10 - Mar 20</span>
              <span class="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-3 py-1 rounded-full font-bold">In Progress</span>
            </div>
          </div>

          <div class="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-sky-400/20 text-sky-300 rounded-xl text-xl">
                <i class="fas fa-project-diagram"></i>
              </div>
              <div>
                <h4 class="font-bold text-lg text-white">CIE Activity 3: Mini Project Review Phase 2</h4>
                <p class="text-white/60 text-sm">Weightage: 30 Marks | External Guide Assessment</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-white/80 text-sm font-semibold">Apr 05 - Apr 15</span>
              <span class="bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs px-3 py-1 rounded-full font-bold">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FACILITIES SECTION -->
    <section id="facilities" class="py-20 bg-off-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-dark-teal font-bold text-sm tracking-wider uppercase bg-light-mint/30 px-3 py-1 rounded-full">Infrastructure</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary-teal mt-3 font-heading">Campus Facilities</h2>
          <p class="text-gray-600 mt-4">State-of-the-art resources provided at ZCOER</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-3xl text-dark-teal mb-4"><i class="fas fa-laptop-code"></i></div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">High-Tech Labs</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Equipped with high-speed internet, modern computing hardware, and specialized software tools.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-3xl text-dark-teal mb-4"><i class="fas fa-book-reader"></i></div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">Digital Library</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Access thousands of IEEE journals, e-books, and research publications 24/7.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-3xl text-dark-teal mb-4"><i class="fas fa-chalkboard-teacher"></i></div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">Smart Classrooms</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Interactive projectors, audio systems, and digital recording for modern learning.</p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-3xl text-dark-teal mb-4"><i class="fas fa-microchip"></i></div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">R&D Center</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Dedicated innovation hubs encouraging student patents and industry projects.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NOTICES SECTION -->
    <section id="notices" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-dark-teal font-bold text-sm tracking-wider uppercase bg-light-mint/30 px-3 py-1 rounded-full">Announcements</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary-teal mt-3 font-heading">Latest Notices</h2>
          <p class="text-gray-600 mt-4">Stay updated with official CIE guidelines and schedules</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl border border-gray-200 bg-off-white/50 hover:border-dark-teal transition-colors">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">Urgent</span>
              <span class="text-xs text-gray-500">March 25, 2026</span>
            </div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">CIE Test 2 Schedule Released</h4>
            <p class="text-sm text-gray-600 mb-4">The second internal test timetable for all BE departments has been published. Check your student portal.</p>
            <a href="#" class="text-dark-teal font-bold text-sm hover:underline flex items-center gap-1">Read notice <i class="fas fa-chevron-right text-xs"></i></a>
          </div>

          <div class="p-6 rounded-2xl border border-gray-200 bg-off-white/50 hover:border-dark-teal transition-colors">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">Submission</span>
              <span class="text-xs text-gray-500">March 30, 2026</span>
            </div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">Mini Project Phase 1 Report</h4>
            <p class="text-sm text-gray-600 mb-4">All final year project teams must submit hard copies and upload soft copies of their phase 1 reports.</p>
            <a href="#" class="text-dark-teal font-bold text-sm hover:underline flex items-center gap-1">Read notice <i class="fas fa-chevron-right text-xs"></i></a>
          </div>

          <div class="p-6 rounded-2xl border border-gray-200 bg-off-white/50 hover:border-dark-teal transition-colors">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">General</span>
              <span class="text-xs text-gray-500">April 05, 2026</span>
            </div>
            <h4 class="font-bold text-lg text-primary-teal mb-2">Attendance Threshold Criteria</h4>
            <p class="text-sm text-gray-600 mb-4">Minimum 75% attendance is required to be eligible for CIE activity mark allocation and grading.</p>
            <a href="#" class="text-dark-teal font-bold text-sm hover:underline flex items-center gap-1">Read notice <i class="fas fa-chevron-right text-xs"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- HELPDESK SECTION -->
    <section id="helpdesk" class="py-20 bg-dark-teal text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-neon-lime font-bold text-sm tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full">Support</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-3 font-heading">Help Desk & Grievance Form</h2>
          <p class="text-white/70 mt-3">Facing issues with CIE mark entry or attendance records? Submit a ticket.</p>
        </div>

        <form id="helpdesk-form" class="glass-card p-8 space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-white/90 mb-2">Full Name</label>
              <input type="text" name="name" required placeholder="John Doe" class="w-full bg-dark-teal/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-lime">
            </div>
            <div>
              <label class="block text-sm font-semibold text-white/90 mb-2">Email Address</label>
              <input type="email" name="email" required placeholder="student@zealwellbeing.com" class="w-full bg-dark-teal/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-lime">
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-white/90 mb-2">Subject / Query Category</label>
            <select name="category" class="w-full bg-dark-teal/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-lime">
              <option value="CIE Mark Discrepancy" class="bg-dark-teal text-white">CIE Mark Discrepancy</option>
              <option value="Attendance Correction" class="bg-dark-teal text-white">Attendance Correction</option>
              <option value="Portal Login Issue" class="bg-dark-teal text-white">Portal Login Issue</option>
              <option value="Other Query" class="bg-dark-teal text-white">Other Query</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-white/90 mb-2">Query Details</label>
            <textarea name="query" required rows="4" placeholder="Describe your grievance or question in detail..." class="w-full bg-dark-teal/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-lime"></textarea>
          </div>

          <button type="submit" class="w-full bg-neon-lime text-dark-gray hover:bg-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-[0_0_20px_rgba(187,246,97,0.5)] transition-all">
            Submit Support Ticket
          </button>
        </form>
      </div>
    </section>

  </div> <!-- End Main Landing View -->


  <!-- DASHBOARD VIEW (Shown upon login) -->
  <div id="dashboard-view" class="hidden min-h-screen pt-28 pb-16 bg-off-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Dashboard Top Header Bar -->
      <div class="flex flex-col md:flex-row items-center justify-between bg-dark-teal p-6 rounded-2xl text-white mb-8 shadow-xl">
        <div class="flex items-center gap-4 mb-4 md:mb-0">
          <div class="w-14 h-14 bg-neon-lime text-dark-gray font-extrabold text-2xl rounded-full flex items-center justify-center">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div>
            <span id="dash-user-role" class="text-neon-lime text-xs font-bold tracking-widest uppercase">STUDENT DASHBOARD</span>
            <h2 id="dash-user-name" class="text-2xl font-bold font-heading">John Doe</h2>
            <p class="text-xs text-white/60">PRN: 72159042K | Branch: Computer Engineering (Sem 6)</p>
          </div>
        </div>
        <button onclick="logoutDashboard()" class="bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2">
          <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </div>

      <!-- Dashboard Performance Overview -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs font-bold text-gray-500 uppercase">CIE Average Score</span>
            <i class="fas fa-chart-bar text-dark-teal"></i>
          </div>
          <p class="text-3xl font-extrabold text-primary-teal font-heading">85.4%</p>
          <div class="w-full bg-gray-100 h-2.5 rounded-full mt-3 overflow-hidden">
            <div class="bg-neon-lime h-2.5 rounded-full" style="width: 85.4%"></div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs font-bold text-gray-500 uppercase">Attendance Status</span>
            <i class="fas fa-user-check text-dark-teal"></i>
          </div>
          <p class="text-3xl font-extrabold text-primary-teal font-heading">89.2%</p>
          <p class="text-xs text-emerald-600 font-semibold mt-2"><i class="fas fa-check-circle"></i> Eligible for End-Sem Exam</p>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs font-bold text-gray-500 uppercase">Pending Submissions</span>
            <i class="fas fa-clock text-amber-500"></i>
          </div>
          <p class="text-3xl font-extrabold text-amber-600 font-heading">1 Module</p>
          <p class="text-xs text-gray-500 mt-2">Mini-Project Review due in 5 days</p>
        </div>
      </div>

      <!-- Marks Breakdown Table -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 class="text-lg font-bold text-primary-teal font-heading">Continuous Internal Evaluation Breakdown</h3>
          <span class="text-xs bg-dark-teal/10 text-dark-teal font-bold px-3 py-1 rounded-full">Academic Year 2025-26</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-off-white text-dark-gray text-xs uppercase font-semibold">
                <th class="p-4">Subject Code & Name</th>
                <th class="p-4">CIE Test 1 (20)</th>
                <th class="p-4">CIE Test 2 (20)</th>
                <th class="p-4">Lab / Practical (30)</th>
                <th class="p-4">Assignment (30)</th>
                <th class="p-4">Total Score (100)</th>
                <th class="p-4">Grade</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-sm">
              <tr class="hover:bg-gray-50/80">
                <td class="p-4 font-bold text-primary-teal">CS601 - Data Science & Analytics</td>
                <td class="p-4">18</td>
                <td class="p-4">17</td>
                <td class="p-4">27</td>
                <td class="p-4">26</td>
                <td class="p-4 font-bold text-dark-teal">88</td>
                <td class="p-4"><span class="bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-xs">O (Outstanding)</span></td>
              </tr>
              <tr class="hover:bg-gray-50/80">
                <td class="p-4 font-bold text-primary-teal">CS602 - Cloud Computing Architecture</td>
                <td class="p-4">16</td>
                <td class="p-4">15</td>
                <td class="p-4">25</td>
                <td class="p-4">24</td>
                <td class="p-4 font-bold text-dark-teal">80</td>
                <td class="p-4"><span class="bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-xs">A+ (Excellent)</span></td>
              </tr>
              <tr class="hover:bg-gray-50/80">
                <td class="p-4 font-bold text-primary-teal">CS603 - Artificial Intelligence</td>
                <td class="p-4">19</td>
                <td class="p-4">18</td>
                <td class="p-4">28</td>
                <td class="p-4">27</td>
                <td class="p-4 font-bold text-dark-teal">92</td>
                <td class="p-4"><span class="bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-xs">O (Outstanding)</span></td>
              </tr>
              <tr class="hover:bg-gray-50/80">
                <td class="p-4 font-bold text-primary-teal">CS604 - Cyber Security & Forensics</td>
                <td class="p-4">15</td>
                <td class="p-4">16</td>
                <td class="p-4">24</td>
                <td class="p-4">25</td>
                <td class="p-4 font-bold text-dark-teal">80</td>
                <td class="p-4"><span class="bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-xs">A+ (Excellent)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>


  <!-- LOGIN MODAL -->
  <div id="login-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 backdrop-blur-sm p-4">
    <div class="glass-modal w-full max-w-md p-8 rounded-3xl relative text-white">
      <!-- Close Button -->
      <button onclick="closeLoginModal()" class="absolute top-6 right-6 text-white/60 hover:text-white text-xl">
        <i class="fas fa-times"></i>
      </button>

      <div class="text-center mb-6">
        <div class="h-12 w-12 bg-neon-lime text-dark-gray rounded-full flex items-center justify-center font-extrabold text-2xl mx-auto mb-3">
          Z
        </div>
        <h3 class="text-2xl font-bold font-heading">Portal Login</h3>
        <p class="text-xs text-white/60 mt-1">Select role and enter your credentials to access CIE marks</p>
      </div>

      <!-- Role Switcher -->
      <div class="grid grid-cols-2 gap-2 p-1 bg-dark-teal/60 rounded-xl mb-6 border border-white/10">
        <button id="role-student-btn" onclick="setLoginRole('student')" type="button" class="py-2 rounded-lg font-bold text-sm bg-neon-lime text-dark-gray transition-all">
          Student
        </button>
        <button id="role-faculty-btn" onclick="setLoginRole('faculty')" type="button" class="py-2 rounded-lg font-bold text-sm bg-white/10 text-white transition-all">
          Faculty
        </button>
      </div>

      <form id="login-form" class="space-y-4">
        <input type="hidden" id="login-role-input" name="role" value="student">
        
        <div>
          <label class="block text-xs font-semibold text-white/80 mb-1">Username / PRN / ID</label>
          <input type="text" name="username" required placeholder="Enter PRN or Faculty ID" class="w-full bg-dark-teal/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-lime">
        </div>

        <div>
          <label class="block text-xs font-semibold text-white/80 mb-1">Password</label>
          <input type="password" name="password" required placeholder="••••••••" class="w-full bg-dark-teal/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-neon-lime">
        </div>

        <div class="flex items-center justify-between text-xs text-white/70 pt-1">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded accent-neon-lime"> Remember me
          </label>
          <a href="#" class="hover:text-neon-lime">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full bg-neon-lime text-dark-gray hover:bg-white font-bold py-3.5 rounded-xl text-base shadow-lg hover:shadow-[0_0_20px_rgba(187,246,97,0.5)] transition-all mt-4">
          Sign In
        </button>
      </form>
    </div>
  </div>

  <?php include_once __DIR__ . '/include/footer.php'; ?>
  <?php include_once __DIR__ . '/include/script.php'; ?>

</body>
</html>
