"use client";
import "../../hub.css";
import "../heart-space.css";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StartTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString();

    const newTopic = {
      title,
      description,
      postedBy: "Guest User",
      timestamp: now,
      replies: 0,
      likes: 0,
    };

    const existing = JSON.parse(localStorage.getItem("heartspaceTopics")) || [];
    localStorage.setItem(
      "heartspaceTopics",
      JSON.stringify([newTopic, ...existing])
    );

    router.push("/hub/heart-space/topics");
  };

  const handleCancel = () => {
    router.back();
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

        <form className="topic-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter a topic title"
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            required
            placeholder="Write what you'd like to discuss..."
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
      </main>
      <Footer />
    </>
  );
}
