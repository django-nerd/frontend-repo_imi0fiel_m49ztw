import { useMemo } from "react";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar({ year, month, events = [] }) {
  const firstDay = useMemo(() => new Date(year, month, 1), [year, month]);
  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);
  const startIndex = firstDay.getDay();

  const cells = [];
  for (let i = 0; i < startIndex; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const map = new Map();
  events.forEach((e) => {
    const k = `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`;
    map.set(k, (map.get(k) || []).concat(e));
  });

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#2D2D44] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-7 bg-white/5">
        {dayNames.map((d) => (
          <div key={d} className="px-3 py-2 text-center text-[11px] font-medium text-[#B2B6C8]">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px p-2 bg-white/5">
        {cells.map((d, i) => {
          const key = d ? `${year}-${month}-${d}` : `empty-${i}`;
          const dateObj = d ? new Date(year, month, d) : null;
          const k = dateObj ? `${year}-${month}-${d}` : null;
          const dayEvents = k ? map.get(k) || [] : [];

          return (
            <div key={key} className="min-h-[90px] bg-[#1E1E2F] rounded-lg p-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#B2B6C8]">{d || ""}</span>
                {dayEvents.length > 0 && (
                  <span className="inline-flex h-5 items-center rounded-md bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9] px-1.5 text-[10px] text-white">
                    {dayEvents.length}
                  </span>
                )}
              </div>
              <div className="mt-1 space-y-1">
                {dayEvents.slice(0, 2).map((e, idx) => (
                  <div
                    key={idx}
                    className="truncate rounded-md bg-white/10 px-2 py-1 text-[10px] text-white/90"
                    title={e.title}
                  >
                    {e.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
