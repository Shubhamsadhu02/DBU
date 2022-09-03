import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'

export default function Spayee() {
    return (
        <main>
            <Header/>
            <Banner background={'#2F2475'} title ={"Spayee"} subtitle ={"Branding • UI/UX"} image={"/images/spayee/hero.png" }/>
            <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>Spayee is a learning management system (LMS) platform that allows teachers, trainers, and content creators to design, advertise, and sell online courses. Spayee offers a complete end-to-end solution from building&nbsp;landing pages, integrated payment gateways, and marketing tools for course delivery.</p>
                        </div>
                        <div className="work1 work3">
                            <h2>Impact</h2>
                            <p>Knowledge should be shared with desired learners.<br />
                                So, when it comes to scalability, secured and economically friendly space to share knowledge, then Spayee is the spot. Our challenge was to restructure a platform, already having millions of learners, and establish their brand identity in the community to stand out at a distinctive position in the global course market and we have successfully made it to the end.</p>
                        </div>
                        <div className="building building1">
                            <ul>
                                <li>
                                    <h2>3k+</h2>
                                    <h3>Growth Stories</h3>
                                </li>
                                <li>
                                    <h2>4.5</h2>
                                    <h3>Ratings</h3>
                                </li>
                                <li>
                                    <h2>$50 M</h2>
                                    <h3>Earned by Creators</h3>
                                </li>
                                <li>
                                    <h2>500+</h2>
                                    <h3>Client Base</h3>
                                </li>
                            </ul>
                        </div>
                        <div className='my-120'>
                          <Image src="/images/spayee/impact.png" alt='' height={600} width={1096} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The challenge for us</h2>
                            <p>Having a customer base of 500+&nbsp; Spayee was facing identity problem. The task at hand was to overhaul the brand identity and website in such a way that it would assist them in becoming the market leader in the course delivery sector while also providing a unique and distinct position in the global course market.</p>
                        </div>
                        <div>
                          <Image src="/images/spayee/wireframe.png" alt='' className='mb-5' height={980} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/spayee/challenge1.png" alt='' className='mb-5' height={460} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/spayee/challenge2.png" alt='' className='mb-5' height={664} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/spayee/challenge3.png" alt='' className='mb-5' height={907} width={1096} />
                        </div>
                        <div>
                          <Image src="/images/spayee/challenge4.png" alt='' className='mb-5' height={650} width={1096} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-margin landing-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Image src="/images/spayee/landing-page.png" alt='' height={6049} width={1096} />
                        </div>
                    </div>
                </div>

            </section>


            <ProjectTestimonial content="DB Universe team is full of talented designers. More importantly, they are very patient, accommodating and an absolute delight to work with. They came highly recommended and worked diligently on our project."
       image="/images/index/testimonial/sandeep.png" name="Sandeep Singh" designation="Co-founder, Spayee" />
            
            <NextProject ProjectName="Finshots" link="/projects/finshots" />
        </main>

    )
}
