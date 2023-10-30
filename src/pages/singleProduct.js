import React from 'react'
import { Helmet } from 'react-helmet';
import Breadcrumb from '../components/Breadcrumb';

const singleProduct = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Product Name</title>
                
            </Helmet>
            <Breadcrumb title="Product Name"/>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>

            </div>

    </>
  )
}

export default singleProduct