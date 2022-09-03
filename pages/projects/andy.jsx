import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'


export default function Andy() {
    return (
        <main>
            <Header/>
            <Banner background={'#26206C'} title ={"Andy"} subtitle ={"Branding • UI/UX"} image={"/images/andy/andy.png"}/>
            <section className='my-120'>
                    <div className="container">
                        <div className="team">
                            <div className="work1 work3">
                                <h2>About</h2>
                                <p>Andy is a decentralized network focused on creating and managing a universal identity. It provides open access tools to the developers to create an experience tailor-made for you.</p>
                            </div>
                            
                            <div>
                                <Image src="/images/andy/about.png" alt='' height={600} width={1096} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='my-120'>
                    <div className="container">
                        <div className="team">
                            <div className="work1 work3">
                                <h2>Foundation</h2>
                                <p>In our first meeting with the Andy team, we discussed about their problems, business goals, taste, references for the brand identity. Our collaborative process helped us to create a moodboard for the visual identity of andy.
                                    After creating moodboard & having a roadmap of the project, our team started working on the logo.</p>
                            </div>
                            
                            <div>
                                <Image src="/images/andy/foundation1.png" alt='' height={600} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/foundation2.png" alt='' height={432} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/foundation3.png" alt='' height={420} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/foundation4.png" alt='' height={535} width={1096} />
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className='my-120'>
                    <div className="container">
                        <div className="team">
                            <div className="work1 work3">
                                <h2>Consistent Branding</h2>
                                <p>Andy&apos;s team was concerned about the consistency of branding across all platforms. We brainstormed several ideas to establish a brand theme that speaks about blockchain technology, so we used Andy&apos;s primary color as the background and logo to create a pattern in the background, & the final outputs are shown below.</p>
                            </div>
                            
                            <div>
                                <Image src="/images/andy/consistent.png" alt='' height={600} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/consistent1.png" alt='' height={535} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/consistent2.png" alt='' height={460} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/consistent3.png" alt='' height={766} width={1096} />
                            </div>
                            <br/>
                            <div>
                                <Image src="/images/andy/consistent4.png" alt='' height={535} width={1096} />
                            </div>
                        </div>
                    </div>
                </section>

                <ProjectTestimonial content="We've worked with DBU over several months for Rain's creatives & website needs and they have been an absolute delight to work with. Great delivery, professionalism and accommodation of all our asks. Kudos!"
       image="/images/index/testimonial/amit.png" name="Amit Agrawal" designation="Founder, Andy" />

        <NextProject ProjectName="Spayee" link="/projects/spayee" />
            </main>
    )
}