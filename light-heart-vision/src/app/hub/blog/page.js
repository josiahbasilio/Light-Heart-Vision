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

        {/* Start a Topic Button */}
        <div className="start-topic-btn">
          <Link href="/hub/blog/start-blog">
            <button>START A TOPIC</button>
          </Link>
        </div>

        <div className="blog-welcome-banner">
          <h2>Welcome to the Blog 📝</h2>
          <p>
            Discover community stories, reflections, and updates shared by
            members of Light Heart Vision.
          </p>
          <Link
            href="/hub/blog/blog-posts"
            className="discussion-link blog-link"
          >
            Explore posts →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
