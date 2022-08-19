import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'

export default function Vedose() {
  return (
    <main>
      <Header/>
      <Banner background={'#102D20'} title ={"Vedose"} subtitle ={"Branding • UI/UX"}/>
      <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>Vedose is an ayurvedic telemedicine platform where patients can register and consult. Vedose doctors can consult with patients through the phone, chat, or video call. They're establishing a platform for many people seeking traditional Ayurvedic solutions.  
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

            <ProjectTestimonial content="It was a pleasure working with DBU. I'm always impressed by their tireless commitment to the costumers. The whole team is  friendly, reliable and polite always endeavoring young designer. I am glad to work with them, thank you DBU!"
       image="/images/index/testimonial/bhanuprakash.png" name="Bhanu Prakash" designation="Founder, Vedose" />


<NextProject ProjectName="Intelia" link="/projects/intelia" />
    </main>
  )
}
