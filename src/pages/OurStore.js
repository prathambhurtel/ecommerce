import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Helmet } from 'react-helmet';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../components/ProductCard'


const OurStore = () => {
    const [grid, setGrid] = useState(4);
    
  return (
    <>
    
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Store</title>
                
            </Helmet>
           
        
  <Breadcrumb title="OurStore"/>
  <div className="store-wrapper home-wrapper-2 py-5">
    <div className="container">
        <div className="row">
            <div className="col-3">
                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Shop By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Filter By</h3>
                    <div>
                      <h5 className="sub-title">Availability</h5>
                     <div>
                     <div className="form-check">
                        <input className='form-check-input' type="checkbox" value='' id="" />
                        <label className='form-check-label' htmlFor="">InStock (1) </label>
                      </div>
                      <div className="form-check">
                        <input className='form-check-input' type="checkbox" value='' id="" />
                        <label className='form-check-label' htmlFor="">OutStock (0)</label>
                      </div>
                     </div>

                    </div>
                    <h5 className="sub-title">Price</h5>
                    <div className='d-flex item-align-center gap-10'>
                    <div className="form-floating ">
  <input type="" className="form-control" id="floatingInput" placeholder="High"/>
  <label htmlFor="floatingInput">High</label>
                    </div>
                    <div className="form-floating ">
  <input type="" className="form-control" id="floatingInput1" placeholder="Low"/>
  <label htmlFor="floatingInput1">Low</label>
                    </div>
                    </div>
                    <h5 className="sub-title">Color</h5>
                    <div>
                        <div>
                            <ul className='colors ps-0'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div>
                    <div className="form-check">
                        <input className='form-check-input' type="checkbox" value='' id="size-1" />
                        <label className='form-check-label' htmlFor="size-1">S (1) </label>
                      </div>
                      <div className="form-check">
                        <input className='form-check-input' type="checkbox" value='' id="size-2" />
                        <label className='form-check-label' htmlFor="size-2">M (4) </label>
                      </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Product Tags</h3>
                    <div>
                        <div className="product-tags d-flex flex-wrap align-item-center gap-10">
                           <span className="badge bg-light text-secondary rounded-3 py-2 px-3">HeadPhone</span>
                           <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                           <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                           <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className="filter-title">Random Product</h3>
                    <div>
                        <div className="random-products d-flex mb-3">
                            <div className="w-50">
                                <img src="images/watch.jpg" className='img-fluid' alt="" />
                            </div>
                            <div className="w-50">
                                <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
                                <b>$100.00</b>
                            </div>
                        </div>
                        <div className="random-products d-flex">
                            <div className="w-50">
                                <img src="images/watch.jpg" className='img-fluid' alt="" />
                            </div>
                            <div className="w-50">
                                <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />,
                                <b>$100.00</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className='filter-sort-grid mb-4'>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                        <select name="" className='form-control form-select' id="">
                            <option value="manual">Features</option>
                            <option value="best-selling" selected="selected">Best Selling</option>
                            <option value="title-assending">Alphabetically A-Z</option>
                            <option value="title-descending">Alphabetically Z-A</option>
                            <option value="price-assending">Price Low To High</option>
                            <option value="price-descending">Price High To Low</option>
                            <option value="created-assending">Date Old To New</option>
                            <option value="created-descending">Price New To Old</option>
                        </select>
                    </div>
                        <div className="d-flex align-item-center gap-10">
                            <p className="totalproducts mb-0">21 Products</p>
                            <div className='d-flex flex-wrap align-items-center gap-10 grid'>
                           <img onClick={() => {
                            setGrid(3);
                           }}
                           src="images/gr4.jpg" className='d-block img-fluid' alt="grid" />
                           <img onClick={() => {
                            setGrid(4);
                           }}
                           src="images/gr3.jpg" className='d-block img-fluid' alt="grid" />
                           <img onClick={() => {
                            setGrid(6);
                           }}
                           src="images/gr2.jpg" className='d-block img-fluid' alt="grid" />
                           <img onClick={() => {
                            setGrid(12);
                           }}
                           src="images/gr.jpg" className='d-block img-fluid' alt="grid" />
                            </div>
                           
                                
                           

                        </div>
                    </div>
                </div>
                <div className="product-list pb-5">
                    <div className="d-flex flex-wrap gap-10">
                    <ProductCard grid={grid}/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    </>
  )
}

export default OurStore