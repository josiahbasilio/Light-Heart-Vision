"use client";
import "./events-calendar.css";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const mockEvents = [
  {
    id: 1,
    title: "Mindful Monday Meditation",
    date: "2025-06-24",
    time: "6:00 PM",
    location: "Algonquin College",
    category: "Community Events",
    color: "#8b5cf6",
  },
  {
    id: 2,
    title: "Vision Board Workshop",
    date: "2025-06-16",
    time: "5:00 PM",
    location: "Community Zoom Room",
    category: "Workshop",
    color: "#34d399",
  },
  {
    id: 3,
    title: "Creative Expression Night",
    date: "2025-06-28",
    time: "7:00 PM",
    location: "LightHeart Lounge",
    category: "Meetups",
    color: "#fbbf24",
  },
];

const categories = ["All", "Community Events", "Workshop", "Meetups"];

export default function EventsCalendar() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? mockEvents
      : mockEvents.filter((event) => event.category === filter);

  return (
    <>
      <Header />
      <main className="events-main">
        <div className="hub-header">
          <h1>Events Calendar</h1>
          <p className="hub-subtitle">
            Explore upcoming community events, gatherings, and workshops.
          </p>
        </div>

        <div className="hub-breadcrumb">
          You are here →{" "}
          <Link href="/" className="hub-link">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/hub" className="hub-link">
            Community Hub
          </Link>{" "}
          / Events Calendar
        </div>

        {/* Filter Dropdown */}
        <div className="event-filter">
          <label htmlFor="category">Event Type:</label>
          <select id="category" onChange={(e) => setFilter(e.target.value)}>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Event Cards */}
        <section className="events-grid">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="event-card-box"
              style={{ backgroundColor: event.color }}
            >
              <div className="event-card-date">
                <span className="event-day">
                  {new Date(event.date).getDate()}
                </span>
                <span className="event-month">
                  {new Date(event.date)
                    .toLocaleString("default", { month: "short" })
                    .toUpperCase()}
                </span>
              </div>
              <div className="event-card-content">
                <span className="event-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p className="event-time">🕒{event.time}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
