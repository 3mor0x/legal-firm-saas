"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Scale, 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  CalendarClock, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  ChevronDown
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const sidebarLinks = [
    { name: "اللوحة الرئيسية", href: "/dashboard", icon: LayoutDashboard },
    { name: "إدارة القضايا", href: "/dashboard/cases", icon: Briefcase },
    { name: "سجل الموكلين", href: "/dashboard/clients", icon: Users },
    { name: "الجلسات والمواعيد", href: "/dashboard/sessions", icon: CalendarClock },
    { name: "الماليات والفواتير", href: "/dashboard/invoices", icon: FileText },
    { name: "إعدادات النظام", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-amber-500/30">
      
      {/* 1. القائمة الجانبية (Sidebar) - تم تغيير المسمى لاسم الأستاذ محمود مباشرة */}
      <aside className="w-72 bg-[#040814] border-l border-slate-800/80 hidden md:flex flex-col fixed top-0 right-0 h-full z-20 shadow-2xl">
        
        {/* تم حذف كلمة نظام النخبة وحطيت اسم الصرح القانوني للأستاذ محمود */}
        <div className="h-24 flex items-center gap-3.5 px-6 border-b border-slate-800/60">
          <div className="p-2.5 bg-gradient-to-br from-amber-500/20 to-transparent rounded-xl border border-amber-500/20">
            <Scale className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h2 className="text-white font-black text-base tracking-tight leading-tight">المنصة الرقمية</h2>
            <p className="text-amber-500 text-xs font-bold mt-1">مكتب أ. محمود شعبان</p>
          </div>
        </div>

        {/* الروابط */}
        <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto custom-scrollbar">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative ${
                  isActive 
                    ? "bg-gradient-to-l from-amber-500/10 to-transparent text-amber-500 font-bold" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5 font-medium"
                }`}
              >
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-amber-500 rounded-l-full shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
                )}
                <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* معلومات المستخدم بالأسفل */}
        <div className="p-4 border-t border-slate-800/80 bg-[#02050e]">
          <div className="flex items-center gap-3 px-3 py-2.5 bg-white/5 rounded-xl border border-white/5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-[#040814] flex items-center justify-center font-black text-base shrink-0">
              م
            </div>
            <div className="overflow-hidden">
              <p className="text-slate-200 font-bold text-sm truncate">أ. محمود شعبان</p>
              <p className="text-slate-500 text-[11px] font-medium mt-0.5">المدير العام</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors font-bold text-xs uppercase tracking-wider">
            <LogOut className="w-4 h-4" /> تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* الـ Spacer السحري لمنع تداخل المحتوى */}
      <div className="hidden md:block w-72 shrink-0"></div>

      {/* 2. منطقة المحتوى والـ الجزء الشمال من الهيدر */}
      <main className="flex-1 flex flex-col min-h-screen w-full overflow-hidden">
        
        {/* هيدر متوازن جداً من اليمين والشمال */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10 px-6 md:px-8 flex items-center justify-between">
          
          {/* اليمين: زرار الموبايل وشريط البحث */}
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-2.5 bg-slate-100/80 border border-slate-200 rounded-xl px-4 py-2.5 w-96 focus-within:ring-2 ring-amber-500/20 focus-within:border-amber-500/50 transition-all">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="ابحث عن قضية، موكل، أو قرار..." 
                className="bg-transparent border-none outline-none text-xs md:text-sm w-full text-slate-700 placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          {/* الشمال: تم تعديله وتفخيمه بالكامل (قائمة تفاعلية للبروفايل والكبسولات) */}
          <div className="flex items-center gap-4">
            {/* زرار الإشعارات المطور */}
            <button className="relative p-2.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-xl transition-all shadow-sm group">
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <Bell className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
            
            <div className="w-px h-6 bg-slate-200"></div>

            {/* كبسولة البروفايل الشيك جداً في أقصى الشمال */}
            <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-xl p-1.5 pl-3 pr-2 shadow-sm hover:border-slate-300 transition-all cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-[#040814] text-amber-400 flex items-center justify-center font-bold text-xs shadow-md">
                م
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-slate-800 font-bold text-xs leading-none">أ. محمود شعبان</p>
                <p className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> متصل الآن
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors hidden sm:block" />
            </div>
          </div>

        </header>

        {/* محتوى الصفحات */}
        <div className="p-6 md:p-8 flex-1">
          {children}
        </div>

      </main>

    </div>
  );
}