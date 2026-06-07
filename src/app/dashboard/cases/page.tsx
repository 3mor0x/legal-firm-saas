"use client";

import { Briefcase, Plus, Search, FolderOpen, Scale, ShieldCheck, MoreHorizontal, FileText, User } from "lucide-react";

export default function CasesPage() {
  const casesList = [
    { id: "2026/102", title: "دعوى تعويض عن أضرار مقاولات", client: "شركة التوحيد للتوريدات", type: "مدني كلي", court: "محكمة أسيوط الابتدائية", status: "نشطة", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { id: "2026/405", title: "قضية نزاع على ملكية عقار", client: "حسن فهد الجبالي", type: "عقاري / مدني", court: "محكمة ديروط الجزئية", status: "تحت الدراسة", statusColor: "bg-amber-50 text-amber-700 border-amber-200" },
    { id: "2026/89", title: "جناية تزوير واستعمال محررات", client: "أحمد محمد السيد", type: "جنايات", court: "محكمة جنايات أسيوط", status: "مؤجلة", statusColor: "bg-rose-50 text-rose-700 border-rose-200" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/60 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            إدارة القضايا والدعاوى <Briefcase className="w-7 h-7 text-amber-500" />
          </h1>
          <p className="text-slate-500 mt-1 font-medium text-sm">أرشفة الملفات القانونية ومتابعة مسارات الدعاوى ومذكرات الدفاع.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#040814] hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg text-sm">
          <Plus className="w-4 h-4" /> إضافة قضية جديدة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* اليمين: قائمة القضايا المفتوحة بتصميم الكبسولات */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-[1.5rem] p-6 md:p-8 border border-slate-200/60 shadow-xl shadow-slate-200/20">
            <h2 className="text-lg font-bold text-slate-900 mb-6">سجل الدعاوى القضائية</h2>
            <div className="space-y-4">
              {casesList.map((item) => (
                <div key={item.id} className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm transition-all flex flex-col md:flex-row gap-5 relative">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base md:text-lg font-black text-slate-900">{item.title}</h3>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${item.statusColor}`}>{item.status}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                        <User className="w-4 h-4 text-slate-400" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 leading-none">الموكل</p>
                          <p className="text-xs font-bold text-slate-700 mt-1">{item.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 leading-none">رقم ومصنف الدعوى</p>
                          <p className="text-xs font-black text-slate-800 mt-1" dir="ltr">{item.id} - {item.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 sm:col-span-2">
                        <Scale className="w-4 h-4 text-amber-500" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 leading-none">المقر القضائي / الهيئة</p>
                          <p className="text-xs font-bold text-slate-700 mt-1">{item.court}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* الشمال: كارت إحصائي وتنبيهي مميز جداً */}
        <div className="space-y-6">
          <div className="bg-[#040814] rounded-[1.5rem] p-6 shadow-xl text-white border border-slate-800">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2"><FolderOpen className="w-5 h-5 text-amber-500" /> ملخص الحالة العامة</h3>
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                <span className="text-slate-400">قضايا مدنية</span>
                <span className="font-bold text-amber-400">18 قضية</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                <span className="text-slate-400">قضايا جنائية</span>
                <span className="font-bold text-amber-400">12 قضية</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                <span className="text-slate-400">شؤون الأسرة</span>
                <span className="font-bold text-amber-400">8 قضايا</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}