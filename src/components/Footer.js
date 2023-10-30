import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsFacebook,BsTwitter, IconName } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer className='py-3'>
      <div className="container text-white">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-item-center">
              <img src="images/newsletter.png" alt="" />
              <h2>Sign Up For Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text text-white" id="basic-addon2">Subscribe</span>
</div>

          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container text-white">
        <div className="row">
          <div className="col-4">
            <h3>Contact Us</h3>
            <div>
              <address className='text-white f-6'>
                Street:Bisham Tole <br/> Bhadrapur-7, Jhapa <br/>
                Postal Code : 57220
              </address>
              <a className='mt-3 d-block mb-3 text-white' href="tel: +977 9844484295">+977 9844484295</a>
              <a className='mt-3 d-block mb-3 text-white' href="mailto:admin@admin.com">admin@admin.com</a>
            </div>
            <div className="social_icons align-item-center d-flex gap-15">
            <a href="#" className='text-white fs-5'>
              <BsLinkedin/>
            </a>
            <a href="#" className='text-white fs-5'>
              <BsGithub/>
            </a>
            <a href="#" className='text-white fs-5'>
              <BsFacebook/>
            </a>
            <a href="#" className='text-white fs-5'>
              <BsTwitter/>
            </a>
            </div>
          </div>
          <div className="col-3">
            <h3>Information</h3>
            <div className='footer-links d-flex flex-column'> 
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms And Condition</Link>
              <Link className='text-white py-2 mb-1'>Blog</Link>
             
            </div>
          </div>
          <div className="col-3">
            <h3>Account</h3>
            <div className='footer-links d-flex flex-column'> 
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>FAQ</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
             
            </div>
          </div>
          <div className="col-2">
            <h3>Quick Links</h3>
            <div className='footer-links d-flex flex-column'> 
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-2'>
      <div className="container text-white">
        <div className="row">
          <div className="col-12">
          <p className='text-center'>&copy: {new Date().getFullYear()} Powered By Developer</p>
          </div>
        
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer