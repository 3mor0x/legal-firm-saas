import Link from "next/link";
import { Home, Users, Briefcase, Calendar, CreditCard, Settings } from "lucide-react";
export function Sidebar() {
  return (
    <aside className="w-64 border-l bg-white h-screen hidden md:block fixed right-0 top-0">
      <div className="p-6 border-b flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800">مكتب النخبة ⚖️</h2>
      </div>
      <nav className="p-4 flex flex-col gap-2">
        <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 text-slate-700 transition">
          <Home className="w-5 h-5" /> <span className="font-medium">الرئيسية</span>
        </Link>
        <Link href="/dashboard/clients" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 text-slate-700 transition">
          <Users className="w-5 h-5" /> <span className="font-medium">الموكلين</span>
        </Link>
        <Link href="/dashboard/cases" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 text-slate-700 transition">
          <Briefcase className="w-5 h-5" /> <span className="font-medium">القضايا</span>
        </Link>
        <Link href="/dashboard/appointments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 text-slate-700 transition">
          <Calendar className="w-5 h-5" /> <span className="font-medium">المواعيد</span>
        </Link>
        <div className="h-px bg-slate-200 my-2"></div> {/* خط فاصل */}
        <Link href="/dashboard/invoices" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 text-slate-700 transition">
<CreditCard className="w-5 h-5" /> <span className="font-medium">الماليات والفواتير</span>        </Link>
        <Link href="/dashboard/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 text-slate-700 transition">
          <Settings className="w-5 h-5" /> <span className="font-medium">إعدادات المكتب</span>
        </Link>
      </nav>
    </aside>
  );
}