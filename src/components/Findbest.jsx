import background2 from "../assets/images 3.jpg";
 import './Findbest.css';
const Findbest = () => {
  return (
    <header className="Findbest">
        <img className="image" src={background2} alt="Logo" />
        <div className="doc">
          <h1>Find the best vape products</h1>
          <p>Discover the best vape products at the best prices</p>
          <div className="button">
          <button className="shop-button">Shop Now</button>
          <button className="off">Get 25% off Now</button>
          </div>
        </div>

    </header>
  );
};

export default Findbest;
