"use client";
import "../blog.css"; // ✅ Assumes CSS is located at src/app/hub/blog/blog.css
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StartBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString();

    const newPost = {
      title,
      description,
      postedBy: "Guest User",
      timestamp: now,
      replies: 0,
      likes: 0,
    };

    const existing = JSON.parse(localStorage.getItem("blogPosts")) || [];
    localStorage.setItem("blogPosts", JSON.stringify([newPost, ...existing]));
    router.push("/hub/blog/blog-posts");
  };

  const handleCancel = () => router.back();

  return (
    <>
      <Header />
      <main className="blog-main">
        <div className="blog-header">
          <h1>Start a Blog</h1>
        </div>

        {/* ✅ Matching breadcrumb with proper styling */}
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
          / Start a Blog Topic
        </div>

        <form className="blog-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter a blog topic title"
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            required
            placeholder="Write your blog idea or reflection..."
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
      </main>
      <Footer />
    </>
  );
}
