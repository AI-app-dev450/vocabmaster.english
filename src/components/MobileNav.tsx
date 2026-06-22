import { NavLink } from 'react-router';
import { LayoutDashboard, BookOpen, GraduationCap, Settings, User } from 'lucide-react';

const mobileNavItems = [
  { path: '/', label: 'Home', icon: LayoutDashboard },
  { path: '/words', label: 'Words', icon: BookOpen },
  { path: '/study/flashcards', label: 'Study', icon: GraduationCap },
  { path: '/settings', label: 'Settings', icon: Settings },
  { path: '/profile', label: 'Profile', icon: User },
];

export function MobileNav() {
  return (
    <nav className="sidebar-mobile fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E5DD] bg-white">
      <div className="flex items-center justify-around px-2 py-1">
        {mobileNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 text-[11px] font-medium transition-colors ${
                isActive
                  ? 'text-[#F5A623]'
                  : 'text-[#9B9BAE] hover:text-[#6B6B80]'
              }`
            }
          >
            <item.icon className="h-5 w-5" strokeWidth={1.5} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
