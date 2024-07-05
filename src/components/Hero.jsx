import './hero.css';
const Hero = () => {
  return (
      <p className="hero">
          <span className="l1">🔥 Get <span className='l11'>25% OFF</span> Now </span>
          <div className="l2">
          <span className="l21">Find EveryThing </span>
          <span className="l22">For <span className='l221'>Vaping</span> </span>
          </div>
            <span className="l4">Sell globally in minutes with localized currencies languages, and <br/> experie every market. only a variety of vaping products </span>
            <span className="l5">Starting Price </span>
            <span className="l6">$99 </span>
            <p className="btton">
              <button className="shop-button">Shop now</button>
              <button className="view-button">View Details</button>
            </p>
          </p>
  );
};

export default Hero;