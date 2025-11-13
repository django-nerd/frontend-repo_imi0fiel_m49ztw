import { Calendar, MapPin, Tag } from "lucide-react";

export default function EventCard({ image, title, date, location, tags = [] }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-[#2D2D44] border border-white/10 hover:border-white/20 transition shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="relative h-44">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white shadow">
          Featured
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-white/90">
          {title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#B2B6C8]">
          <span className="inline-flex items-center gap-1"><Calendar size={14} />{date}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={14} />{location}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] bg-white/5 border border-white/10 text-[#B2B6C8]"><Tag size={12} />{t}</span>
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9] shadow-[0_10px_24px_rgba(108,92,231,0.35)] hover:shadow-[0_12px_30px_rgba(0,206,201,0.35)] transition">
            Register
          </button>
          <button className="text-sm text-[#B2B6C8] hover:text-white transition">Details</button>
        </div>
      </div>
    </article>
  );
}
