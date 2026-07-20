import { ArrowRight, BellRing, BookOpen, CalendarDays, ClipboardList, GraduationCap, LogOut, TrendingUp } from 'lucide-react';

interface StudentDashboardProps {
  role: 'student' | 'faculty';
  onLogout: () => void;
}

const StudentDashboard = ({ role, onLogout }: StudentDashboardProps) => {
  const isStudent = role === 'student';

  const quickActions = [
    { title: 'View Marks', icon: ClipboardList, description: 'Check your latest CIE results' },
    { title: 'Attendance', icon: TrendingUp, description: 'Track your attendance summary' },
    { title: 'Schedule', icon: CalendarDays, description: 'See upcoming exams and activities' },
    { title: 'Announcements', icon: BellRing, description: 'Latest notices and updates' },
  ];

  return (
    <div className="min-h-screen bg-off-white text-dark-gray">
      <header className="bg-gradient-to-r from-dark-teal via-primary-teal to-deep-teal text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neon-lime">Demo Portal</p>
            <h1 className="mt-2 text-3xl font-black font-poppins">Welcome back, {isStudent ? 'Student' : 'Faculty'}!</h1>
            <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
              This sample dashboard shows what your post-login experience could look like.
            </p>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-light-gray/30 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-neon-lime/20 p-3 text-primary-teal">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-teal">Student Dashboard</p>
                <h2 className="text-xl font-bold">Your academic overview</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-off-white p-4">
                <p className="text-sm text-dark-gray/60">Current CIE</p>
                <p className="mt-2 text-2xl font-black text-dark-gray">82%</p>
              </div>
              <div className="rounded-2xl bg-off-white p-4">
                <p className="text-sm text-dark-gray/60">Attendance</p>
                <p className="mt-2 text-2xl font-black text-dark-gray">94%</p>
              </div>
              <div className="rounded-2xl bg-off-white p-4">
                <p className="text-sm text-dark-gray/60">Pending Tasks</p>
                <p className="mt-2 text-2xl font-black text-dark-gray">3</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-light-gray/30 bg-gradient-to-br from-primary-teal to-dark-teal p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/15 p-3">
                <BookOpen size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-lime">Today</p>
                <h3 className="text-xl font-bold">Next activity</h3>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/80">Seminar on Academic Integrity</p>
              <p className="mt-2 text-2xl font-black">2:30 PM</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-neon-lime px-4 py-2 font-semibold text-dark-gray transition hover:bg-white">
                View Details
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-light-gray/30 bg-white p-5 shadow-sm">
                <div className="rounded-2xl bg-off-white p-3 text-primary-teal">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-bold text-dark-gray">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-gray/70">{item.description}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
