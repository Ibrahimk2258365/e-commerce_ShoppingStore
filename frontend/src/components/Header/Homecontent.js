import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from "./Testimonial";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const Homecontent = () => {
    const categories = [
        {name: "Impressions", image: "images/impressions.png", link: "/abayapage",
        },
        { name: "Shirts", image: "images/shirts.jpeg", link: "/abayapage" },
        { name: "Kimonos", image: "images/kimonos1.png", link: "/abayapage" },
        { name: "Jeans", image: "images/h13.jpg", link: "/hijabs" },
      ];

  
    
      const Newarrivals = [
        {
          name: "OPULENT CHARM",
          price: "from Rs.6,990.00",
          image: "images/s3.jpeg",
        },
        {
          name: "VINTAGE GLAM",
          price: "Rs.12,450.00",
          image: "images/s8.jpeg",
        },
        { name: "LUXE", price: "Rs.22,750.00", image: "images/s9.jpeg" },
        { name: "SERENE", price: "Rs.14,250.00", image: "images/serene.jpeg" },
      ];
  return (
    <div>
      
      <div className="banner-container">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="images/ss2.png" alt="Banner 1" />
          </div>
          <div>
            <img src="images/ss1.png" alt="Banner 2" />
          </div>
        </Carousel>

        <div className="banner-content">
          <h1>Welcome to our BOnze  store!</h1>
          <p>Discover the latest fashion trends and shop with us.</p>
          <Link to="/shop" className="banner-button">
            Shop Now
          </Link>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br /> <br />
        <br />
      </div>


      <div style={{ fontSize: "20px" , textAlign:"center"}}>
      <p>
          Experience Unmatched Style and Sophistication at Bonanza Shop — Your One-Stop Fashion Destination.
        </p>
      </div>
      <div className="category-section">
        <h2>SHOP BY CATEGORY</h2>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <div className="category-item">
                <img src={category.image} alt={category.name} />
                <Link to={category.link} className="category-button">
                  {category.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="new-arrivals">
        <h2>NEW ARRIVALS</h2>
        <div className="view-all-section">
          <Link to="/abayapage" className="view-all-button">
            View All
          </Link>
        </div>
        <div className="product-list">
          {Newarrivals.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Testimonial />

      
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Homecontent