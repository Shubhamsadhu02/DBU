import Image from 'next/image'
import React from 'react'

export default function Shop() {
  return (
    <main>
      <section>
        <div className="container-fluid">
          <div className="crafting text-center">
            <h2>Designs you will <br /> love to buy</h2>
            <p>Some from scratch and others reborn, these are some brands we have worked with, to create meaningful and magical experiences!</p>
          </div>
        </div>
      </section>
      <section className='my-120'>
        <div className="container">
          <div className="">
            <div className='row'>
              <div className="col-md-6">
                <div className="shop-box" style={{ backgroundImage: "url('/images/shop/bg-1.jpeg')"}}>
                
                    <h2 className="shop-box--title">3D Icons</h2>
                    <h3 className='shop-box--price'>$50</h3>
                    <ul className="shop-features">
                      <li className='shop-features--li'><span> <Image src="/images/shop/check.svg" height={28} width={28} /></span>100 Icons</li>
                      <li className='shop-features--li'><span> <Image src="/images/shop/check.svg" height={28} width={28} /></span>High quality render</li>
                      <li className='shop-features--li'><span> <Image src="/images/shop/check.svg" height={28} width={28} /></span>Changeable colors</li>
                    </ul>
                    <div className="shop-bottom-box">
                      <p><Image src="/images/shop/fig.svg" height={60} width={60} /></p>
                      <p><Image src="/images/shop/png.svg" height={60} width={60} /></p>
                      <p><Image src="/images/shop/svg.svg" height={60} width={60} /></p>
                    </div>
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="shop-box" style={{ backgroundImage: "url('/images/shop/bg-2.jpeg')"}}>
                  
                    <h2 className="shop-box--title">199$ Logos</h2>
                    <h3 className='shop-box--price'>$199</h3>
                    <ul className="shop-features">
                      <li className='shop-features--li'><span> <Image src="/images/shop/check.svg" height={28} width={28} /></span>50+ Logos</li>
                      <li className='shop-features--li'><span> <Image src="/images/shop/check.svg" height={28} width={28} /></span>High quality</li>
                      <li className='shop-features--li'><span> <Image src="/images/shop/check.svg" height={28} width={28} /></span>Editable file</li>
                    </ul>
                    <div className="shop-bottom-box">
                      <p><Image src="/images/shop/ai.svg" height={60} width={60} /></p>
                      <p><Image src="/images/shop/png.svg" height={60} width={60} /></p>
                      <p><Image src="/images/shop/eps.svg" height={60} width={60} /></p>
                    </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="kit mt-5">
        <img src="/images/shop/star-struck.png" /><h3>Illustrations &amp; UI Kits are coming soon!</h3>
        </div>
      </section>
    </main>
  )
}
