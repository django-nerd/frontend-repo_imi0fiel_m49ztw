import { Users, Wallet2, CalendarClock } from "lucide-react";

const Stat = ({ icon: Icon, label, value, hint }) => (
  <div className="relative overflow-hidden rounded-2xl bg-[#2D2D44] border border-white/10 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
    <div className="absolute -top-8 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#6C5CE7]/30 to-[#00CEC9]/30 blur-2xl" />
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] text-white grid place-items-center">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[#B2B6C8] text-xs">{label}</p>
        <p className="text-white text-2xl font-extrabold leading-none mt-1">{value}</p>
      </div>
    </div>
    {hint && <p className="mt-3 text-[11px] text-[#B2B6C8]">{hint}</p>}
  </div>
);

export default function Analytics() {
  return (
    <section>
      <h2 className="text-white text-xl font-bold mb-4">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Stat icon={Users} label="Participants" value="5,420" hint="+12% this month" />
        <Stat icon={Wallet2} label="Revenue" value="$83,950" hint="+8% this month" />
        <Stat icon={CalendarClock} label="Upcoming Events" value="12" hint="Next: Tech Fest" />
      </div>
    </section>
  );
}
