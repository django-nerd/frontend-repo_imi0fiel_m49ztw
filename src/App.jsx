import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import Analytics from "./components/Analytics";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";

const demoEvents = [
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    title: "AI Innovation Hackathon 2025",
    date: "Mar 15 • 10:00 AM",
    location: "Main Auditorium",
    tags: ["AI", "Hackathon", "48h"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop",
    title: "Annual Cultural Fest — Kaleidoscope",
    date: "Apr 5 • 6:00 PM",
    location: "Central Lawn",
    tags: ["Music", "Dance", "Art"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    title: "Design Conference: Futures & Forms",
    date: "Mar 28 • 2:00 PM",
    location: "Conference Hall",
    tags: ["Design", "UX", "Talks"],
  },
];

function Home() {
  const now = new Date();
  const calEvents = [
    { title: "Hackathon Day 1", date: new Date(now.getFullYear(), now.getMonth(), 15) },
    { title: "Music Night", date: new Date(now.getFullYear(), now.getMonth(), 5) },
    { title: "Design Conf.", date: new Date(now.getFullYear(), now.getMonth(), 28) },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="py-6">
        <Hero />
      </div>

      {/* Upcoming Events */}
      <section className="py-6" id="upcoming">
        <div className="flex items-end justify-between">
          <h2 className="text-white text-2xl font-bold">Upcoming Events</h2>
          <button className="text-sm text-[#B2B6C8] hover:text-white">View all</button>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {demoEvents.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Analytics />
          <div className="mt-6">
            <h3 className="text-white text-xl font-bold mb-3">Schedule</h3>
            <Calendar year={now.getFullYear()} month={now.getMonth()} events={calEvents} />
          </div>
        </div>
        <div>
          <Profile />
        </div>
      </section>
    </main>
  );
}

function Shell() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Shell />} />
      </Routes>
    </BrowserRouter>
  );
}
