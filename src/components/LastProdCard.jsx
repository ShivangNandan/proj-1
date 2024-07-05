/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import './LastProdCard.css';
import './hero.css';


const LastProdCard = ({ el }) => {  // Destructure el here

  return (

      <div className="card text Lastcard">
        <img src={el.image} className="card-img" alt="..." />
        <div className="card-img lastText">
          <h5 className="card-title title">{el.title}</h5>
          <p className="card-text">{el.discription}</p>
          <button className="shop-button">Shop now</button>
        </div>
      </div>
  );
};

export default LastProdCard;
