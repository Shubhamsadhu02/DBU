import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'

export default function Vedose() {
  return (
    <main>
      <Header/>
      <Banner background={'#102D20'} title ={"Ayurwadya"} subtitle ={"Branding • UI/UX"} image={"/images/vedose/ayurwadya.png" }/>
      <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>Ayurwayda is an ayurvedic telemedicine platform where patients can register and consult.  Ayurveda doctors can consult with patients through the phone, chat, or video call. They&apos;re establishing a platform for many people seeking traditional Ayurvedic solutions. 
                                </p>
                        </div>
                        <div>
                          <Image src="/images/vedose/about.png" height={650} width={1096} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The brand Identity</h2>
                            <p>We explored the wellness and healing essence of the business in our early explorations, but in the final identity, we simplified the design to a medical symbol formed with four leaves. so that it can say more about healthcare services, while the leaves show Ayurveda&apos;s relationship to nature
                                </p>
                        </div>
                        <div>
                          <Image src="/images/vedose/brand1.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/brand2.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/brand3.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/brand4.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/brand5.png" className='mb-5' height={400} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/brand6.png" height={650} width={1096} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Website design</h2>
                            <p>UX Research was conducted to understand the pain points, expectations and motivation in order to arrive at the website UI which is extremely easy to use and gives a seamless experience to users to consult with doctors at one click with minimum efforts. 
                              <br/>
                              <br/>
                              We started creating user journeys &amp; wireframe that illustrated a personalized journey. We defined intuitive workflows such home page with clear and concise message “got a health issue? Consult Top Ayurvedic Doctors” with value propositions offered by Ayurwayda followed by  what are you looking for, treatments, take Consultation from our Experts. 
                              </p>
                        </div>
                        <div>
                          <Image src="/images/vedose/website1.png" className='mb-5' height={800} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/website2.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/website3.png" className='mb-5' height={550} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/website4.png" className='mb-5' height={550} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/vedose/website5.png" height={3500} width={1096} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-margin'>
                <div className="container">
                    <div className="clients" style={{ background: 'none' }}>
                        <Image src="/images/quote.svg" height={38} width={38} />
                        <p>It was a pleasure working with DBU. I&apos;m always impressed by their tireless commitment to the costumers. The whole team is  friendly, reliable and polite always endeavoring young designer. I am glad to work with them, thank you DBU!
                            </p>
                        <div className='row'>
                            <Image src="/images/vedose/Bhanu.png" height={80} width={80} />
                            <div className="col-8">
                                <h3>Bhanu Prakash</h3>
                                <h4>Founder, Ayurwayda</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

          <section>
                <div className="next-project text-center">
                    <h3>NEXT PROJECT</h3>
                    <h1>Intelia</h1>
                    <a><i className="far fa-arrow-right" /></a>
                </div>
            </section>
    </main>
  )
}
