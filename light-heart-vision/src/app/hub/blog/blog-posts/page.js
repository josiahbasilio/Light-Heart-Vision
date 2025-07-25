"use client";
import "../blog.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("blogPosts");
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (index) => {
    const updated = [...posts];
    updated.splice(index, 1);
    setPosts(updated);
    localStorage.setItem("blogPosts", JSON.stringify(updated));
  };

  return (
    <>
      <Header />
      <main className="blog-main">
        <div className="blog-header">
          <h1>Explore Blog Posts</h1>
        </div>

        {/* ✅ Correct breadcrumb formatting */}
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
          / Explore Blog Posts
        </div>

        {/* ✅ Purple start button in correct position */}
        <div className="start-topic-btn">
          <Link href="/hub/blog/start-blog">
            <button>START A TOPIC</button>
          </Link>
        </div>

        {posts.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            No posts yet.{" "}
            <Link
              href="/hub/blog/start-blog"
              className="discussion-link blog-link"
            >
              Start one →
            </Link>
          </p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="posted-by">
                  Posted by {post.postedBy} / {post.timestamp}
                </span>
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

              <div className="blog-stats">
                <div className="stat">
                  <strong>{post.replies}</strong>
                  <span>replies</span>
                </div>
                <div className="stat">
                  <strong>{post.likes}</strong>
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
