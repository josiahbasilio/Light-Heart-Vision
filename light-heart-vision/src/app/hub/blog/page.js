"use client";
import "./blog.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <>
      <Header />

      <main className="blog-main">
        <div className="blog-header">
          <h1>Blog</h1>
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
          / Blog
        </div>

        <div className="hub-search-container">
          <input type="text" placeholder="Search all content" />
          <button>🔍</button>
        </div>

        <div className="start-topic-btn">
          <button>Start a Topic</button>
        </div>

        <div className="blog-section">
          <h2>Latest Posts 📝</h2>
          <p>
            Explore reflections, community stories, and recent updates from
            Light Heart Vision members.
          </p>
          <Link href="/hub/blog/posts" className="meditation-link">
            Browse all posts →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
