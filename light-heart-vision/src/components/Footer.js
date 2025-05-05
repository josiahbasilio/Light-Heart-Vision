export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="subscribe-section">
        <div className="subscribe-box">
          <h2>Let’s Stay Connected 📬</h2>
          <p>Join our love-letter to the future. Get updates, stories, and joyful inspiration.</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for subscribing! 💌');
          }}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Light Heart Vision. Made with love and moonlight 🌙</p>
      </footer>

      <style jsx>{`
        .subscribe-section {
          padding: 60px 20px;
          text-align: center;
        }

        .subscribe-box {
          background: white;
          border-radius: 16px;
          padding: 30px 25px;
          max-width: 420px;
          margin: 0 auto;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          margin-bottom: 60px;
        }

        .subscribe-box:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        .subscribe-box h2 {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: #993333;
        }

        .subscribe-box p {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 18px;
        }

        .subscribe-box input {
          padding: 12px;
          font-size: 0.95rem;
          border-radius: 6px;
          width: 100%;
          border: 1px solid #ccc;
          margin-bottom: 10px;
        }

        .subscribe-box input:focus {
          border-color: #f4c542;
          box-shadow: 0 0 6px rgba(244, 197, 66, 0.3);
        }

        .subscribe-box button {
          background: #f4c542;
          color: black;
          font-weight: 600;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .subscribe-box button:hover {
          background-color: #e0b000;
          transform: scale(1.04);
        }

        .footer {
          background: #333;
          color: white;
          padding: 40px 20px;
          text-align: center;
          font-size: 0.95rem;
        }
      `}</style>
    </>
  );
}
