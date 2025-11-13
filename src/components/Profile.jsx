export default function Profile() {
  return (
    <section className="rounded-2xl bg-[#2D2D44] border border-white/10 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
          alt="avatar"
          className="h-16 w-16 rounded-2xl object-cover"
        />
        <div>
          <h3 className="text-white font-bold text-xl">Alex Carter</h3>
          <p className="text-[#B2B6C8] text-sm">Organizer • Design Club</p>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        {["Top Host", "Early Bird", "Community Builder"].map((b) => (
          <div key={b} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-sm text-white/90">
            {b}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-white/90 font-semibold mb-2">Achievements</h4>
        <ul className="space-y-2 text-sm text-[#B2B6C8]">
          <li>• Hosted 15+ events in 2024</li>
          <li>• Raised $12k in sponsorships</li>
          <li>• Avg rating 4.8/5 from attendees</li>
        </ul>
      </div>
    </section>
  );
}
