import  { useState, useEffect } from 'react';

import Header from "./components/Header";
import Hero from "./components/Hero";
//import Features from "./components/Features";
import LatestArrivals from './components/LatestArrivals';
import ToProduct from "./components/Toproduct";
import Footer from "./components/Footer";
import background from "./assets/inter9.avif";
import Findbest from "./components/Findbest";
import ProductDisplay from "./components/ProductDisplay";
import MarqueeText from "./components/MarqueeText";
import LastProd from "./components/LastProd";
import LoadingPage from "./components/LoadingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay as needed
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        height : "100vw",
        backgroundSize: "cover" /* Ensure image covers the container */,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "repeat" /* Prevent image repeat */,
      }}
    >
      <Header />
      <Hero />
      <ToProduct />
      <LatestArrivals />
      <Findbest />  
      <ProductDisplay/>
      <MarqueeText/>
      <LastProd/>{/* Added new component */} 
      <Footer />
    </div>
  );
};

export default App;
