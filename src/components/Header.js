import React from 'react'
import { NavLink ,Link } from 'react-router-dom';
import {BsSearch} from "react-icons/bs"
const Header = () => {
  return (
    <>
   
   <header className="header-upper py-3">
    <div className="container">
      <div className="row align-item-center">
        <div className="col-2">
          <h1>
            <Link to={"/"} className='text-white'>Digitic</Link>
          </h1>
        </div>
        <div className="col-5">
        <div class="input-group">
  <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Search Product" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">
    <BsSearch/></span>
</div>
        </div>
        <div className="col-5">
          <div className="header-upper-links d-flex align-item-center justify-content-between">
            <div>
              <Link className='d-flex item-allign-center gap-10 text-white'>
              <img src="./images/compare.svg" alt="compare" />
              <p className="mb-0">
                Compare<br/>Product
              </p>
              </Link>
            </div>
            <div>
            <Link className='d-flex item-allign-center gap-10 text-white'>
              <img src="./images/wishlist.svg" alt="wishlist" />
              <p className="mb-0">
                Favourite<br/>Wishlist
              </p>
              </Link>
            </div>
            <div>
            <Link className='d-flex item-allign-center gap-10 text-white' to="/login">
              <img src="./images/user.svg" alt="user" />
              <p className="mb-0">
                Login <br/> In
              </p>
              </Link>
            </div>
            <div>
            <Link className='d-flex item-allign-center gap-10 text-white'>
              <img src="./images/cart.svg" alt="cart" />
              <div className="d-flex flex-column">
                <span className="badge bg-white text-dark">0</span>
                <p className='mb-0'>
                $500
              </p>
              </div>
             
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>
   <header className="header-bottom py-3">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="menu-bottom d-flex align-items-center gap-30">
          <div>
          <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 align-items-center d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   <img src="images/menu.svg" alt="" /><span className='me-5 d-inline-block'>Shop Category</span>
  </button>
  <ul class="dropdown-menu">
    <li>
      <Link className="dropdown-item text-white" to="#">Action</Link>
      </li>
    <li>
      <Link className="dropdown-item text-white" to="#">Another action</Link>
      </li>
    <li>
      <Link className="dropdown-item text-white" to="#">Something else here</Link>
      </li>
  </ul>
</div>
          </div>
            <div className="menu-links">
              <div className="d-flex align-items-center gap-15">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/ourstore' >Our Store</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
   </header>
   </>
  )
}

export default Header