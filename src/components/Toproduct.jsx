import './Toproduct.css';
import background from "../assets/vape2.avif";
import background2 from "../assets/vape.avif";
import ProductCard from './ProductCard';

// Sample product data
const products = [ //array of objects containing product
  {
    id: 1,
    image: background,
    hoveredImage:background2,

  },
  {
    id: 2,
    image:background, // Replace with actual image path
    hoveredImage:background2,

  },
  {
    id: 3,
    image: background, // Replace with actual image path
    hoveredImage:background2,

  },
  {
    id: 1,
    image: background,
    hoveredImage:background2,

  },
  {
    id: 1,
    image: background,
    hoveredImage:background2,

  },
  {
    id: 1,
    image: background,
    hoveredImage:background2,

  },
  {
    id: 1,
    image: background,
    hoveredImage:background2,

  },

 
  // Add more products as needed
];

const TopProduct = () => {
  return (
    <div className="scroll-wrapper">
    <section className="top-product-section">
      <h2 className="section-title">Top Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} 
      </div>
    </section>
    </div>
  );
};

export default TopProduct;