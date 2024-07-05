// src/ProductDisplay.js
import { useEffect, useState } from "react";
import "./ProductDisplay.css";
import background2 from "../assets/images 3.jpg";

const ProductDisplay = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59Z"); // Set your target date here
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference < 0) {
        clearInterval(interval);
        return;
      }
      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      setTime(timeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-display">

      <div className="product-info">
      <div className="discount-banner">
        <p className="discount-text">🔥 GET 25% OFF NOW</p>
      </div>
        <h1>Latest Arrival Products</h1>
        <div className="price">
          <span className="original-price">$99.00</span>
          <span className="discounted-price">$49.00</span>
        </div>
        <p>
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised Words Which
        </p>
        <ul className="features">
          <li>100% Natural</li>
          <li>Coupon $61.99, Code: W2</li>
          <li>30 Day Refund</li>
        </ul>
        <div className="countdown">
          <h3>HURRY UP!</h3>
          <p>Offer Ends In:</p>
          <div className="timer">
            <div className="timer-section">
              <span className="timer-value">{time.days}</span>
              <span className="timer-label">Day</span>
            </div>
            <div className="timer-section">
              <span className="timer-value">{time.hours}</span>
              <span className="timer-label">Hr</span>
            </div>
            <div className="timer-section">
              <span className="timer-value">{time.minutes}</span>
              <span className="timer-label">Min</span>
            </div>
            <div className="timer-section">
              <span className="timer-value">{time.seconds}</span>
              <span className="timer-label">Sec</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-image">
        <img src={background2} alt="Product" />
      </div>
    </div>
  );
};

export default ProductDisplay;
