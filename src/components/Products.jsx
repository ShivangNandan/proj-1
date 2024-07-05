/* eslint-disable react/prop-types */

import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";

const Product = ({ imgSrc, title, price }) => (
  <div className="card custom-card">
    <img src={imgSrc} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">${price}</p>
      <p className="card-text">⭐⭐⭐⭐⭐</p>
      <a href="#" className="btn btn-primary full-width-button">
        Add to cart
      </a>
    </div>
  </div>
);

export default Product;
