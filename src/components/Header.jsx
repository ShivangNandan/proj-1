import  { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isNavbar2Fixed, setIsNavbar2Fixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const totalHeight = headerHeight + navbarHeight-120;

      if (window.scrollY >= totalHeight) {
        setIsNavbar2Fixed(true);
      } else {
        setIsNavbar2Fixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">🔥Odor</a>
        <form className='headForm'>
          <input type="text" placeholder="Search..." />
        </form>
        <div className="r-header">
          <span className='acc'>my account</span>
          <span className='acc'>my account</span>
          <span className='acc'>my account</span>
        </div>
      </nav>
      <nav className={`navbar2 ${isNavbar2Fixed ? 'fixed' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="r2-header">
          <span>my account</span>
          <span>my account</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
