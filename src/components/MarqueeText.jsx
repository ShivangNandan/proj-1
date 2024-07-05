
import './MarqueeText.css';

const MarqueeText = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span className="marquee-text">Our Top Brands</span>
        <span className="marquee-text">Brand 1</span>
        <span className="marquee-text">Brand 2</span>
        <span className="marquee-text">Brand 3</span>
        <span className="marquee-text">Brand 4</span>
        <span className="marquee-text">Our Top Brands</span>
      </div>
    </div>
  );
};

export default MarqueeText;
