// pages/index.js

import Head from 'next/head';
import '../globals.css'; // Now using global styles

export default function Home() {
  return (
    <>
      <Head>
        <title>Light Heart Vision</title>
        <meta name="description" content="Awaken Wonder. Inspire Change. Connect - Community - Co-Creation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <img src="/hero-banner.jpg" alt="Light Heart Vision Banner" className="banner" />
          <div className="overlay">
            <h1 className="title">LIGHT HEART VISION</h1>
            <p className="subtitle">AWAKEN WONDER. INSPIRE CHANGE...</p>
            <p className="subtext">Connect – Community – Co-Creation</p>
            <button className="button">JOIN THE MOVEMENT</button>
          </div>
        </section>

        {/* Navbar */}
        <nav className="navbar">
          {['Community Hub', 'Web VR Space', 'Courses', 'Products', 'About Us', 'Membership', 'Contact'].map((item) => (
            <a key={item} href="#" className="navlink">{item}</a>
          ))}
        </nav>

        {/* Video Section */}
        <section className="videoSection">
          <h2>Discover the Vision Behind Light Heart Vision</h2>
          <div className="videoBox">
            <span className="playButton">▶</span>
          </div>
          <p className="caption">
            Co-created with MDB students, this video explains our mission and how we’re fostering community engagement.
          </p>
        </section>
      </main>
    </>
  );
}
