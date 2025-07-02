"use client";
import "../../hub.css"; // Global/shared styles
import "../heart-space.css"; // Reuse Heart Space styles

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StartTopic() {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const now = new Date().toLocaleString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCancel = () => {
    history.back(); // Go back to Heart Space
  };

  return (
    <>
      <Header />

      <main className="heartspace-main">
        <div className="heartspace-header">
          <h1>Start a Topic</h1>
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
          / Start a Topic
        </div>

        {!submitted ? (
          <form className="topic-form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="Enter a topic title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              placeholder="Write what you'd like to discuss..."
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              required
            />

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button type="submit" className="topic-button">
                Submit Topic
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="topic-button"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="guidelines-card">
            <div className="guidelines-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="posted-by">Posted by Guest User / {now}</span>
            </div>
            <div className="guidelines-stats">
              <div className="stat">
                <strong>0</strong>
                <span>replies</span>
              </div>
              <div className="stat">
                <strong>0</strong>
                <span>likes</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
