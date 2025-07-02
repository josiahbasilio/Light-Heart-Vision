"use client";
import "../blog.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function BlogStartTopic() {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const now = new Date().toLocaleString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCancel = () => {
    history.back(); // Return to blog main page
  };

  return (
    <>
      <Header />

      <main className="blog-main">
        <div className="blog-header">
          <h1>Start a Blog</h1>
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
          <Link href="/hub/blog" className="hub-link">
            Blog
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
              placeholder="Enter a blog title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="description">Content</label>
            <textarea
              id="description"
              value={description}
              placeholder="Write your blog post here..."
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              required
            />

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button type="submit" className="topic-button">
                Submit
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
                <span>comments</span>
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
