import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  HelpCircle,
  Puzzle,
  Keyboard,
  Settings,
  Flame,
} from 'lucide-react';
import type { UserProfile } from '@/types/vocabulary';

interface SidebarProps {
  profile: UserProfile;
  currentStreak: number;
}

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/words', label: 'My Words', icon: BookOpen },
];

const studyItems = [
  { path: '/study/flashcards', label: 'Flashcards', icon: Layers },
  { path: '/study/quiz', label: 'Quiz', icon: HelpCircle },
  { path: '/study/matching', label: 'Matching', icon: Puzzle },
  { path: '/study/spelling', label: 'Spelling', icon: Keyboard },
];

export function Sidebar({ profile, currentStreak }: SidebarProps) {
  return (
    <aside className="flex h-full w-[200px] flex-col bg-[#1A1A2E] text-white">
      {/* Logo */}
      <div className="flex items-center px-5 py-6">
        <span className="text-xl font-bold tracking-tight">Lexicon</span>
        <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-[#F5A623]"></span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3">
        <div className="mb-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 h-4 w-[3px] rounded-r-full bg-[#F5A623]" />
                  )}
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Study Section */}
        <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/30">
          Study
        </div>
        <div className="mb-6 space-y-1">
          {studyItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 h-4 w-[3px] rounded-r-full bg-[#F5A623]" />
                  )}
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="space-y-1">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Settings className="h-5 w-5" strokeWidth={1.5} />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>

      {/* User Profile */}
      <div className="mt-auto border-t border-white/10 px-4 py-4">
        <NavLink to="/profile" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-xs font-bold text-white">
            {profile.username.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{profile.username}</div>
            <div className="flex items-center gap-1 text-[11px] text-white/50">
              <Flame className="h-3 w-3 text-[#F5A623]" />
              <span>{currentStreak} day streak</span>
            </div>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}
