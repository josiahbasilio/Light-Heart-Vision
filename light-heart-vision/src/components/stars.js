"use client";

import { useEffect, useState } from "react";
/*import styles from "@/app/global.css"; // Optional: or use global.css8*/

const STAR_KEYS = ["star-1", "star-2", "star-3"];
const STAR_EXPIRY_MS = 1 * 60 * 1000; // 25 minutes

const STAR_POSITIONS = {
  "star-1": { top: "15%", left: "10%" },
  "star-2": { top: "60%", left: "70%" },
  "star-3": { top: "85%", left: "25%" },
};

export default function Stars() {
  const [clickedStars, setClickedStars] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("clickedStars")) || {};
    const now = Date.now();

    const valid = STAR_KEYS.filter(
      (key) => saved[key] && now - saved[key] < STAR_EXPIRY_MS
    );

    setClickedStars(valid);

    if (valid.length === STAR_KEYS.length) {
      setShowCongrats(true);
    }
  }, []);

  // Handle star click
  const handleStarClick = (key) => {
    if (clickedStars.includes(key)) return;

    const updatedStars = [...clickedStars, key];
    const newState = Object.fromEntries(
      updatedStars.map((k) => [k, Date.now()])
    );

    setClickedStars(updatedStars);
    localStorage.setItem("clickedStars", JSON.stringify(newState));

    if (updatedStars.length === STAR_KEYS.length) {
      setShowCongrats(true);
    }
  };

  return (
    <>
      {STAR_KEYS.map((key) => {
        const style = {
          position: "absolute",
          width: "50px",
          height: "50px",
          top: STAR_POSITIONS[key].top,
          left: STAR_POSITIONS[key].left,
          animation: `float 6s ease-in-out infinite, twinkle 3s ease-in-out infinite`,
          cursor: "pointer",
          zIndex: 10,
          display: clickedStars.includes(key) ? "none" : "block",
        };

        return (
          <div
            key={key}
            style={style}
            onClick={() => handleStarClick(key)}
            className="floating-shape move-with-mouse"
          >
            <img
              src="/images/star.png"
              alt="star"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        );
      })}

      {showCongrats && (
        <div className="modal-overlay" onClick={() => setShowCongrats(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ textAlign: "center" }}
          >
            <h2>🌟 Congratulations!</h2>
            <p>You’ve collected all the stars!</p>
            <button
              className="close-modal"
              onClick={() => setShowCongrats(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
