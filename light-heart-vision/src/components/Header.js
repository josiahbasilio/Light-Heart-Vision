"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="nav-inner">
            <div className="nav-left">
              <Link href="/" passHref legacyBehavior>
                <a className="logo-image-link">
                  <Image
                    src="/images/Light_Heart_Vision_Logo.png"
                    alt="Light Heart Vision Logo"
                    width={55}
                    height={55}
                    className="glow-logo"
                    priority
                  />
                </a>
              </Link>
            </div>

            {/* ***** THIS IS THE FIX ***** */}
            {/* Center Navigation Links now use <Link> for better performance and have correct paths */}
            <ul className="nav-center">
              <li>
                <Link href="/hub">Community</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/aboutUs">About</Link>
              </li>
              {/* Corrected path for Events to point to the actual page location */}
              <li>
                <Link href="/hub/events-calendar">Events</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            <div
              className="nav-right"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              {session?.user ? (
                <div className="signInLink">
                  <div
                    className="signIn"
                    onClick={() => signOut()}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon">👤</span>
                    <span className="label">{session.user.username}</span>
                  </div>
                </div>
              ) : (
                <Link href="/login" passHref legacyBehavior>
                  <a className="signInLink">
                    <div className="signIn">
                      <span className="icon">👤</span>
                      <span className="label">Sign Up</span>
                    </div>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </nav>

        <style jsx>{`
          /* ... (your existing CSS - no changes needed here) ... */
          header {
            background: #ffffffcc;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 999;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
          }

          .nav-bar {
            display: flex;
            justify-content: center;
            padding: 0 2rem;
          }

          .nav-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
            padding: 0 2rem;
          }

          .nav-left,
          .nav-right {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }

          .nav-left {
            justify-content: flex-start;
          }

          .glow-logo {
            transition: transform 0.3s ease, filter 0.3s ease;
          }

          .glow-logo:hover {
            transform: scale(1.08);
            filter: drop-shadow(0 0 6px gold) brightness(1.2);
          }

          .nav-center {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;
            list-style: none;
            padding: 1rem 0;
            margin: 0;
            flex: 2;
          }

          /* Styling for Link components in the nav */
          .nav-center li a,
          .nav-center li :global(a) {
            text-decoration: none;
            color: #993333;
            font-weight: 600;
            position: relative;
          }

          .nav-center li a::after,
          .nav-center li :global(a)::after {
            content: "";
            display: block;
            height: 2px;
            background: #efc95a;
            transform: scaleX(0);
            transition: transform 0.3s;
            transform-origin: left;
          }

          .nav-center li a:hover::after,
          .nav-center li :global(a):hover::after {
            transform: scaleX(1);
          }

          .signInLink {
            text-decoration: none;
          }

          .signIn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: linear-gradient(135deg, #ebcb99fe, #fedd9ff0);
            color: #993333;
            border: none;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            position: relative;
            text-decoration: none;
          }

          .signIn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0);
            transition: left 0.5s ease;
          }

          .signIn:hover::before {
            left: 100%;
          }

          .signIn:hover {
            background: linear-gradient(135deg, #bd8d8d, #f95656);
            transform: scale(1.05);
          }

          .signIn:active {
            transform: scale(0.98);
          }

          .signIn .icon {
            font-size: 16px;
            transition: transform 0.3s ease;
          }

          .signIn:hover .icon {
            transform: rotate(360deg);
          }

          .signIn .label {
            transition: color 0.3s ease;
          }

          .signIn:hover .label {
            color: #f4c542;
          }
        `}</style>
      </header>
    </>
  );
}
