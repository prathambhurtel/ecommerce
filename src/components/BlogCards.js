import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img className='img-fluid w-100' src="images/blog-1.jpg" alt="" />
            </div>
            <div className="blog-content">
               <p className="date">11 Oct 2023</p>
               <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
               <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <Link to={"/"} className='button'>Read More</Link> 
            </div>
        </div>
   
  )
}

export default BlogCards