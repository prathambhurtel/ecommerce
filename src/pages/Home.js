import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCards from '../components/BlogCards'
import ProductCard from '../components/ProductCard'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Ecommerce</title>
                
            </Helmet>
    <section className="home-wrapper-1 py-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SuperCharged For Pro</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
            
          </div>
          <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-item-center py-3">
          <div className="small-banner position-relative">
              <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>Best Sale</h4>
                <h5>iPad S13+</h5>
                <p>From $999.00 <br/>or $41.62/mo.</p>
                
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>But Ipad Air</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>But Ipad Air</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>But Ipad Air</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-item-center justify-content-between">
              <div className='d-flex align-item-center gap-10'>
                <img src="images/service.png" className='' alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all order over $100</p>
                </div>
              </div>
              <div className='d-flex align-item-center gap-15'>
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>
              </div>
              <div className='d-flex align-item-center gap-15'>
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className='d-flex align-item-center gap-15'>
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Direct Price</p>
                </div>
              </div>
              <div className='d-flex align-item-center gap-15'>
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between">
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>HeadPhones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>Speaker</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>HeadPhones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex gap-40 align-items-center'>
                <div>
                  <h6>Speaker</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="marque-wrapper py-5">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="marque-inner-wrapper card-wrapper">
          <Marquee className='d-flex'>
         <div>
          <img className="mx-4 w-25" src="images/brand-01.png" alt="brand" />
          </div>
         <div>
          <img className="mx-4 w-25" src="images/brand-02.png" alt="brand" />
          </div>
         <div>
          <img className="mx-4 w-25" src="images/brand-03.png" alt="brand" />
          </div>
          <div>
          <img className="mx-4 w-25" src="images/brand-04.png" alt="brand" />
          </div>
          <div>
          <img className="mx-4 w-25" src="images/brand-05.png" alt="brand" />
          </div>
          <div>
          <img className="mx-4 w-25" src="images/brand-06.png" alt="brand" />
          </div>
          <div>
          <img className="mx-4 w-25" src="images/brand-07.png" alt="brand" />
          </div>
          <div>
          <img className="mx-4 w-25" src="images/brand-08.png" alt="brand" />
          </div>
          
          </Marquee>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container">
        
        <div className="row">
          <div className="col-12">
          <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
         
        </div>
        <div className="row">
          <div className="col-3">
          <BlogCards/>
          </div>
          <div className="col-3">
          <BlogCards/>
          </div>
          <div className="col-3">
          <BlogCards/>
          </div>
          <div className="col-3">
          <BlogCards/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home



