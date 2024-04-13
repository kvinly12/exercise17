import React from 'react';
import Index from './home';
import About from './about';
import Products from './products';
import Contact from './contact';
import Gallery from './gallery';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Commerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="home">
        <Index />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
