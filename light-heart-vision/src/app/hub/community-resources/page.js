"use client";
import "./community-resources.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommunityResources() {
  return (
    <>
      <Header />

      <main className="resources-main">
        {/* Header */}
        <div className="hub-header">
          <h1>Community Resources</h1>
          <p className="hub-subtitle">
            Find helpful tools, guides, and shared wisdom from the Light Heart
            Vision community.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="hub-breadcrumb">
          You are here →{" "}
          <Link href="/" className="hub-link">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/hub" className="hub-link">
            Community Hub
          </Link>{" "}
          / Community Resources
        </div>

        {/* Search Bar */}
        <div className="hub-search-container">
          <input type="text" placeholder="Search all content" />
          <button>🔍</button>
        </div>

        {/* Featured Resource Section */}
        <div className="resource-card">
          <div className="resource-content">
            <h3>🌱 Mindfulness Starter Kit</h3>
            <p>
              A free resource bundle with guided meditations, journaling
              prompts, and breathwork practices to support your mindful journey.
            </p>
            <span className="posted-by">
              Shared by Team Decoders · 2025-06-01
            </span>
          </div>
          <div className="resource-stats">
            <div className="stat">
              <strong>12</strong>
              <span>downloads</span>
            </div>
            <div className="stat">
              <strong>45</strong>
              <span>likes</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
