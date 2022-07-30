import React from 'react'
import Image from 'next/image'
import Testimonial from '../src/components/Testimonial'

export default function Clients() {
  return (
    <>
      <div>
        <section className="explore">
          <div className="container-fluid">
            <div className="building text-center">
              <h1>Good Design Makes <br />Business Growth Better</h1>
              <p>Some from scratch and others reborn, these are some brands we have worked with, to create meaningful and magical experiences!</p>
              <ul>
                <li>
                  <h2>25+</h2>
                  <h3>Funded Startups</h3>
                </li>
                <li>
                  <h2>200</h2>
                  <h3>Clients</h3>
                </li>
                <li>
                  <h2>150+</h2>
                  <h3>Projects</h3>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*Start Trusted by 150+ brands*/}
        <section className='my-120'>
          <div className="container">
            <div className="trusted">
              <div className="brands">
                <h2>Worked with Some <br/> Great People</h2>
              </div>
              <div className="work-box">
                <div className='row'>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-spayee.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-finshots.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-qoohoo.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-dyba.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-magtapp.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-alagrand.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-chintamoney.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="brand-img">
                      <Image src="/images/index/brand-social-samosa.png" layout='responsive' width={259} height={123} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='my-120'>
          <div className="container">
            <div className="featured">
              <div className="great">
                <h2 className='featured--title'>Featured in!</h2>
                <p className='featured--subtitle'>Some of the industry biggest names have highlighted our work, including Social samosa CrickTracker, The Logical Indian, Tech-fest IIT Bombay, Hautera magazine, Design Boat, and a variety other design platforms. We have given over ten presentations to several colleges and design forums, including <b>IIT Delhi</b> and <b>IIT BHU</b>.</p>
              </div>
              <div className="">
                <ul className='featured-list--container'>
                  <li className='featured-list--li dark'>Social Samosa</li>
                  <li className="featured-list--li">Designerd</li>
                  <li className="featured-list--li dark">CricTracker</li>
                  <li className="featured-list--li">Behance</li>
                  <li className="featured-list--li">Designboat</li>
                  <li className="featured-list--li dark">Techfest IIT, Bombay</li>
                  <li className="featured-list--li">Ad Parody</li>
                  <li className="featured-list--li dark">Hauntera</li>
                  <li className="featured-list--li dark">Startup Talky</li>
                  <li className="featured-list--li">Posttoast</li>
                  <li className="featured-list--li dark">The Logical Indian</li>
                  <li className="featured-list--li"></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Testimonial content="DBU is full of out of the box thinkers. Whole team is gifted with ability to understand the soul and spirit of their client's ideas, re-creates those ideas and produce designs that exactly express what clients would have imagined in his mind. I recommend DBU whole heartedly."
        name={"Vikas Sethia"} designation={"Founder, Josh Community"} image="/images/index/user.png" />
      </div>

    </>
  )
}
