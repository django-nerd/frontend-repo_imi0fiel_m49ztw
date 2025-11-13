import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#2D2D44] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1E1E2F]/80" />
      </div>

      <div className="relative z-10 px-6 md:px-10 py-20 md:py-28 text-center text-white">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 backdrop-blur-md">
          Premium • Curated • Live
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Elevate Your Campus Events
        </h1>
        <p className="mt-4 text-lg text-[#B2B6C8] max-w-2xl mx-auto">
          Discover, host, and manage unforgettable experiences with a cinematic, premium platform.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9] text-white shadow-[0_12px_30px_rgba(0,206,201,0.35)] hover:shadow-[0_16px_40px_rgba(108,92,231,0.35)] transition"
          >
            Explore Events
          </Link>
          <a
            href="#upcoming"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white/90 bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/15 transition"
          >
            Upcoming
          </a>
        </div>
      </div>
    </section>
  );
}
