"use client";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="nav-inner">
            <div className="nav-left">
              <Link href="/" passHref legacyBehavior>
                <a className="logo">Light Heart Vision</a>
              </Link>
            </div>

            {/* Center Navigation Links */}
            <ul className="nav-center">
              <li>
                <a href="/hub">Community</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/aboutUs">About</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>

            {/* Right Section: Sign In Button */}
           <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "12px" }}>



              <Link href="/signUp" passHref legacyBehavior>
                <a className="signInLink">
                  <div className="signIn">
                    <span className="icon">👤</span>
                    <span className="label">Sign Up</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </nav>

        {/* Embedded Styles */}
        <style jsx>{`
          /* ---------------   Header Container --------------------- */

          header {
            background: #ffffffcc;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 999;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
          }

          /* ------------ Navigation Bar Layout ------------ */
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

          /* ------------ Light Heart Vision Logo ---------------*/
          .logo {
            font-family: "Segoe UI", sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            color: #993333;
            text-decoration: none;
            letter-spacing: 0.5px;
            position: relative;
          }

          .logo::after {
            content: "";
            display: block;
            height: 2px;
            background: #efc95a;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s;
          }

          .logo:hover::after {
            transform: scaleX(1);
          }

          /* ------------ Center Navigation Links ---------------*/
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

          .nav-center li a {
            text-decoration: none;
            color: #993333;
            font-weight: 600;
            position: relative;
          }

          .nav-center li a::after {
            content: "";
            display: block;
            height: 2px;
            background: #efc95a;
            transform: scaleX(0);
            transition: transform 0.3s;
            transform-origin: left;
          }

          .nav-center li a:hover::after {
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
