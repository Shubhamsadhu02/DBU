import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default () => {
    const brands=[
        {
            "image": "/images/index/brands/slice.svg",
        },
        {
            "image": "/images/index/brands/finshots.svg",
        },
        {
            "image": "/images/index/brands/lead.svg",
        },
        {
            "image": "/images/index/brands/dybo.svg",
        },
        {
            "image": "/images/index/brands/windo.svg",
        },
        {
            "image": "/images/index/brands/superpay.svg",
        },
        {
            "image": "/images/index/brands/spayee.svg",
        },
        {
            "image": "/images/index/brands/socialsomosa.svg",
        },
        {
            "image": "/images/index/brands/magtapp.svg",
        },
        {
            "image": "/images/index/brands/fredo.svg",
        },
        {
            "image": "/images/index/brands/alagrand.svg",
        },
        {
            "image": "/images/index/brands/qoohoo.svg",
        },

    ]

    return(

        <section className='my-120'>
            <div className="container">
                <div className="trusted">
                    <div className="brands text-center">
                        <h2>Trusted by 150+ brands</h2>
                    </div>
                    <div className="work-box">
                        <div className='row'>
                            
                                {
                                    brands.map((ele, index) => { 
                                    return  <div className='col-sm-12 col-md-3 col-lg-3'>
                                                <div className="brand-img">
                                                    <img src={ele.image} alt="" />
                                                </div>
                                            </div>
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    )
   }


    {/* <section className='my-120'>
        <div className="container">
          <div className="trusted">
            <div className="brands text-center">
              <h2>Trusted by 150+ brands</h2>
            </div>
            <div className="work-box">
              <div className='row'>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-spayee.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-finshots.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-qoohoo.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-dyba.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-magtapp.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-alagrand.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-chintamoney.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className="brand-img">
                    <Image src="/images/index/brand-social-samosa.png" layout='responsive' width={259} height={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}