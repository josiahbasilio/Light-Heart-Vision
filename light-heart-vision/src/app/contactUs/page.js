// File: src/app/contactUs/page.js
"use client";

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// --- THIS IS THE FIX ---
// Import the CSS Module, which will create the 's' object.
import s from './contactUs.module.css';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Light Heart Vision</title>
        <meta name="description" content="Get in touch with the Light Heart Vision team. We'd love to hear from you." />
      </Head>

      <Header />

      <main className={s.main}>
        <section className={s.card}>
          <header className={s.header}>
            <span className={s.pill}>We’re here to help</span>
            <h1 className={s.h1}>Contact Us</h1>
            <p className={s.lead}>
              Questions, collab ideas, or feedback? Reach out and we’ll get back to you.
            </p>
          </header>

          <ul className={s.list}>
            <li className={s.item}>
              <span className={s.icon} aria-hidden>📧</span>
              <div>
                <div className={s.itemLabel}>Email</div>
                <a href="mailto:nathaniel.parant@gmail.com" className={s.link}>
                  nathaniel.parant@gmail.com
                </a>
              </div>
            </li>

            <li className={s.item}>
              <span className={s.icon} aria-hidden>📞</span>
              <div>
                <div className={s.itemLabel}>Phone</div>
                <a href="tel:+17053805010" className={s.link}>
                  +1 (705) 380-5010
                </a>
              </div>
            </li>
          </ul>

          <div className={s.ctaRow}>
            <a href="mailto:nathaniel.parant@gmail.com" className={s.primaryBtn}>
              Send us an email
            </a>
          </div>

          <footer className={s.footerNote}>
            Typical response time: <strong>within 24–48 hours</strong>
          </footer>
        </section>
      </main>

      <Footer />
    </>
  );
}