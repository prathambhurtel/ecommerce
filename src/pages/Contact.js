import React from 'react'
import { Helmet } from 'react-helmet';
import Breadcrumb from '../components/Breadcrumb';
import {AiOutlineHome,AiOutlineMail,AiOutlineInfoCircle} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'



const Contact = () => {
  return (
   <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
                
            </Helmet>

            <Breadcrumb title="Contact Us"/>
            <div className="contact-wrapper py-4 home-wrapper-2">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.2828669007968!2d88.06399302929495!3d26.566215470021884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5afeadfed4f49%3A0xe5fa3a64c88d98b3!2sHamro%20Service!5e0!3m2!1sen!2snp!4v1696960276479!5m2!1sen!2snp" 
                  width="600" 
                  height="450" 
                  className='border-0 w-100'
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">

                  </iframe>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="contact-inner-wrapper d-flex justify-content-between ">
                      <div>
                        <h3 className="contact-title mb-3">Contact Us</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                          <div>
                            <input type="text" className="form-control" placeholder='Name' />
                          </div>
                          <div>
                            <input type="email" className="form-control" placeholder='Email' />
                          </div>
                          <div>
                            <input type="tel" className="form-control" placeholder='Phone Number' />
                          </div>
                          <div>
                            <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments'></textarea>
                          </div>
                          <div>
                            <button className="button border-0">Submit</button>
                          </div>
                        </form>
                      </div>
                      <div>
                        <h3 className="contact-title mb-3">Get In Touch With Us</h3>
                        <div>
                          <ul className='ps-0'>
                            <li className='mb-2'><AiOutlineHome className='fs-5'/>
                            <address className='mb-0'>HNO:178 , Bisham Tole, Bhadrapur-7, Jhapa, Nepal</address>
                            </li>
                            <li className='mb-2'><BiPhoneCall className='fs-5'/>
                            <a  href="tel:+9779844484295">+9779844484295</a>
                            </li>
                            <li className='mb-2'><AiOutlineMail className='fs-5'/>
                            <a  href="mailto:admin@admin.com">admin@admin.com</a>
                            </li>

                            <li className='mb-2'><AiOutlineInfoCircle className='fs-5'/>
                            <p>Sunday-Saturday - Opens Everytime</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
   </>
  )
}

export default Contact