"use client";

import { 
  Users, 
  Briefcase, 
  CalendarClock, 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  MoreHorizontal,
  Scale,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";

export default function DashboardHomePage() {
  const stats = [
    { title: "إجمالي الموكلين", value: "145", trend: "+12%", isPositive: true, icon: Users, gradient: "from-blue-600 to-blue-400", shadow: "shadow-blue-500/20" },
    { title: "القضايا النشطة", value: "38", trend: "+5%", isPositive: true, icon: Briefcase, gradient: "from-amber-500 to-amber-600", shadow: "shadow-amber-500/20" },
    { title: "جلسات الأسبوع", value: "12", trend: "-2%", isPositive: false, icon: CalendarClock, gradient: "from-emerald-500 to-emerald-600", shadow: "shadow-emerald-500/20" },
    { title: "إيرادات الشهر", value: "45,000", currency: "ج.م", trend: "+18%", isPositive: true, icon: Wallet, gradient: "from-[#040814] to-slate-800", shadow: "shadow-slate-900/20" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. الترحيب */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            مرحباً بك، أ. محمود شعبان <Scale className="w-6 h-6 text-amber-500" />
          </h1>
          <p className="text-slate-500 mt-1 font-medium text-sm md:text-base">إليك نظرة شاملة وفورية على سير المسار القانوني للمكتب اليوم.</p>
        </div>
        <div className="text-left">
          <p className="text-xs md:text-sm font-bold text-slate-600 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm inline-flex items-center gap-2">
            📅 {new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* 2. كروت الإحصائيات الفخمة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="group bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden cursor-pointer">
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-[0.03] group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-slate-400 text-xs font-bold mb-1">{stat.title}</p>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-baseline gap-1">
                  {stat.value}
                  {stat.currency && <span className="text-xs font-bold text-slate-400">{stat.currency}</span>}
                </h3>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${stat.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {stat.trend}
              </span>
              <span className="text-slate-400 text-[10px] font-medium">مقارنة بالشهر الماضي</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. التقسيم المتوازن للجدول (اليمين) والمهام (الشمال) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* الجانب الأيمن الكبيير: جدول الجلسات القادمة */}
        <div className="lg:col-span-2 bg-white border border-slate-200/60 rounded-2xl shadow-xl shadow-slate-200/20 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">أجندة الجلسات القريبة</h3>
              <p className="text-slate-400 text-xs mt-0.5">الدعاوى المدرجة بجدول محاكم هذا الأسبوع</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { type: "مدني كلي", court: "محكمة أسيوط", client: "أحمد محمد السيد", date: "12" },
              { type: "جنايات ديروط", court: "مجمع المحاكم", client: "شركة المقاولات العربية", date: "14" },
              { type: "الأحوال الشخصية", court: "محكمة الأسرة", client: "حسن فهد الجبالي", date: "15" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center shadow-sm group-hover:border-amber-400 transition-all shrink-0">
                    <span className="text-[10px] text-slate-400 font-bold leading-none">أكتوبر</span>
                    <span className="text-base font-black text-slate-800 mt-1 leading-none">{item.date}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-amber-600 transition-colors">قضية {item.type} - {item.court}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">الموكل: {item.client}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold rounded-lg">قيد التحضير</span>
              </div>
            ))}
          </div>
        </div>

        {/* الجانب الأيسر (الجزء الشمال المطور بالكامل) - مركز التنبيهات والقرارات العاجلة */}
        <div className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" /> الإجراءات العاجلة
              </h3>
              <span className="px-2 py-0.5 bg-red-50 text-red-600 font-bold text-[10px] rounded-md animate-pulse">تحديث حي</span>
            </div>
            
            <div className="space-y-4">
              {/* مهمة 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-300 transition-all">
                <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800 text-sm">مراجعة مذكرة الدفاع</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">قضية رقم 112 جنح - موعد التسليم غداً</p>
                </div>
              </div>
              {/* مهمة 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-300 transition-all">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800 text-sm">طلب موعد استشارة جديد</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">بواسطة الموكل: حسن الجبالي عبر البوابة</p>
                </div>
              </div>
              {/* مهمة 3 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-300 transition-all">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800 text-sm">مستندات مفقودة</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">يجب رفع توكيل شركة المقاولات في أقرب وقت</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400 font-medium">جميع التحديثات آمنة ومشفرة بالكامل.</p>
          </div>
        </div>

      </div>

    </div>
  );
}