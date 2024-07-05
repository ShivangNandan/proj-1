import "bootstrap/dist/css/bootstrap.min.css";
import './LastProd.css';
import LastProdCard from "./LastProdCard";
import background2 from "../assets/vape.avif";


const LastProd = () => {
  const item = [
    {
      id: 1,
      image: background2,
      title: "Vape Bottle",
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, tempora., tempor'
    },
    {
      id: 1,
      image: background2,
      title: "Vape Bottle",
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, tempora., tempor'
    },
    {
      id: 1,
      image: background2,
      title: "Vape Bottle",
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, tempora., tempor'
    },
    {
      id: 1,
      image: background2,
      title: "Vape Bottle",
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, tempora., tempor'
    },
    {
      id: 1,
      image: background2,
      title: "Vape Bottle",
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, tempora., tempor'
    }
  ];

  return (
    <header className="LastProd">
      {item.map(el => (  // Map each element and pass as prop
        <LastProdCard key={el.id} el={el} />
      ))}
    </header>
  );
};

export default LastProd;
