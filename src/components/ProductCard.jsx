/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={hovered ? product.hoveredImage : product.image}
        alt={`Product ${product.id}`}
      />
    </div>
  );
};

export default ProductCard;
