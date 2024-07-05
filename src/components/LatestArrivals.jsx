import  { useState } from 'react';
import Products from './Products';
import './LatestArrivals.css';
import background2 from "../assets/vape.avif";

const LatestArrivals = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    { imgSrc: background2, title: 'Product 1', price: '45' },
    { imgSrc: background2, title: 'Product 2', price: '60' },
    { imgSrc: background2, title: 'Product 3', price: '30' },
    { imgSrc: background2, title: 'Product 5', price: '50' },
    { imgSrc: background2, title: 'Product 6', price: '45' },
    { imgSrc: background2, title: 'Product 7', price: '38' },
    { imgSrc: background2, title: 'Product 8', price: '57' },
    { imgSrc: background2, title: 'Product 9', price: '65' },
  ]);

  const [displayedProducts, setDisplayedProducts] = useState(products);

  const showLatest = () => {
    setDisplayedProducts(products.slice(0, 4));
  };

  const showFeatured = () => {
    setDisplayedProducts(products.slice(3, 8));
  };

  const showAll = () => {
    setDisplayedProducts(products);
  };

  return (
    <div className="latest-arrivals-section">
      <p className="section-title">
        Latest Arrivals
        <div className="linker">
          <span className="link" onClick={showAll}>Latest Items</span>
          <span className="link" onClick={showFeatured}>Featured Items</span>
          <span className="link" onClick={showLatest}>Top Products</span>
        </div>
      </p>
      
      <div className="container">
        <div className="row">
          {displayedProducts.map((product, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <Products imgSrc={product.imgSrc} title={product.title} price={product.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArrivals;
