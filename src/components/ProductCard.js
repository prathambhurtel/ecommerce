import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    

  return (
    <>
    <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` :"col-3"} `}>
    <div className="product-card position-relative">
        <div className="product-image">
            <img src="images/laptop.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Lenovo</h6>
            <h5 className="product-title">
                Lenevo Laptop With i7 Processor
            </h5>
            <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
            <p>$100</p>
        </div>
        
    </div>
    </div>

    <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` :"col-3"} `}>
    <div className="product-card position-relative">
        <div className="product-image">
            <img src="images/laptop.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Lenovo</h6>
            <h5 className="product-title">
                Lenevo Laptop With i7 Processor
            </h5>
            <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
            <p>$100</p>
        </div>
        
    </div>
    </div>
    <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` :"col-3"} `}>
    <div className="product-card position-relative">
        <div className="product-image">
            <img src="images/laptop.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Lenovo</h6>
            <h5 className="product-title">
                Lenevo Laptop With i7 Processor
            </h5>
            <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
            <p>$100</p>
        </div>
        
    </div>
    </div>
    <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` :"col-3"} `}>
    <div className="product-card position-relative">
        <div className="product-image">
            <img src="images/laptop.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Lenovo</h6>
            <h5 className="product-title">
                Lenevo Laptop With i7 Processor
            </h5>
            <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
            <p>$100</p>
        </div>
        
    </div>
    </div>
    <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` :"col-3"} `}>
    <div className="product-card position-relative">
        <div className="product-image">
            <img src="images/laptop.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Lenovo</h6>
            <h5 className="product-title">
                Lenevo Laptop With i7 Processor
            </h5>
            <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
            <p>$100</p>
        </div>
        
    </div>
    </div>
    <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` :"col-3"} `}>
    <div className="product-card position-relative">
        <div className="product-image">
            <img src="images/laptop.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Lenovo</h6>
            <h5 className="product-title">
                Lenevo Laptop With i7 Processor
            </h5>
            <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
            <p>$100</p>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default ProductCard