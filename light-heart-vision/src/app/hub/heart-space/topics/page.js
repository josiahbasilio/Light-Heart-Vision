"use client";
import "../../hub.css";
import "../heart-space.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HeartSpaceTopics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("heartspaceTopics");
    if (saved) {
      setTopics(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (index) => {
    const updated = [...topics];
    updated.splice(index, 1);
    setTopics(updated);
    localStorage.setItem("heartspaceTopics", JSON.stringify(updated));
  };

  return (
    <>
      <Header />

      <main className="heartspace-main">
        <div className="heartspace-header">
          <h1>Explore Topics</h1>
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
          /{" "}
          <Link href="/hub/heart-space" className="hub-link">
            Heart Space
          </Link>{" "}
          / Explore Topics
        </div>

        {/* ✅ Start a Topic Button */}
        <div className="start-topic-btn">
          <Link href="/hub/heart-space/start-topic">
            <button>START A TOPIC</button>
          </Link>
        </div>

        {/* Guidelines card (pinned) */}
        <div className="guidelines-card">
          <div className="guidelines-content">
            <h3>[Guidelines] Heart Space</h3>
            <p>
              Welcome to Heart Space! This is the place for mindful discussion,
              respectful dialogue, and collaborative co-creation. Be kind, stay
              curious, and uplift one another :)
            </p>
            <span className="posted-by">
              Posted by Team Decoders / 2025-5-31 9:51:40 AM
            </span>
          </div>
          <div className="guidelines-stats">
            <div className="stat">
              <strong>0</strong>
              <span>replies</span>
            </div>
            <div className="stat">
              <strong>17</strong>
              <span>likes</span>
            </div>
          </div>
        </div>

        {/* Topics from localStorage */}
        {topics.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            No discussions yet. Be the first to{" "}
            <Link
              href="/hub/heart-space/start-topic"
              className="discussion-link"
            >
              start a topic →
            </Link>
          </p>
        ) : (
          topics.map((topic, index) => (
            <div key={index} className="guidelines-card">
              <div className="guidelines-content">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="posted-by">
                  Posted by {topic.postedBy} / {topic.timestamp}
                </span>
                {/* ✅ Delete Button (not shown for Guidelines) */}
                <div style={{ marginTop: "1rem" }}>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      background: "#ef4444",
                      color: "white",
                      padding: "6px 14px",
                      border: "none",
                      borderRadius: "999px",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="guidelines-stats">
                <div className="stat">
                  <strong>{topic.replies}</strong>
                  <span>replies</span>
                </div>
                <div className="stat">
                  <strong>{topic.likes}</strong>
                  <span>likes</span>
                </div>
              </div>
            </div>
          ))
        )}
      </main>

      <Footer />
    </>
  );
}
