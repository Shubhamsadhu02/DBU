import Image from 'next/image'
import Link from 'next/link'
import Header from '../src/components/Header'

export default function About() {
    return (
        <main>
            <div className="explore explore1" style={{height: "768px"}}></div>
            <Header isWhite={true}/>
            <section className="explore-top__section1 position-relative" style={{padding: "120px 135px" , zIndex: "1000"}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <Image className='explore-image' src="/images/about/sahil.png" alt='Sahil' width={328} height={328} />
                            {/* <h2 className='explore-image--heading'>Sahil Dev aka Designer Banda,</h2>
                            <h3 className='explore-image--sub-heading'>Founder</h3> */}
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 about-content" style={{paddingLeft: "60px"}}>
                            {/* <h2 className='about-heading'>About Founder</h2> */}
                            <p className='about-paragraph'>A minimalist brand & product designer, creating digital experiences and strong brand identities. I have worked with more than 200+ clients worldwide. Some notable names are Slice, Lead School, Spayee, Cricktracker, Social Samosa, Rain Pay & more. 
                            <br/>
                            <br/>
                                Currently, I am building DB Universe, a remote collaborative agency that focuses on designing digital experiences to create an impactful modern identity that transforms businesses and customer lives.
                            </p>
                            <h2 className='explore-image--heading'>Sahil Dev, Founder</h2>
                            {/* <small className='about-link'><a target="_blank">designerbanda.com</a> <Image src="/images/about/arrow.svg" height={26} width={26} /></small> */}

                        </div>
                    </div>
                </div>
            </section>


            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1">
                            <h2>Our Team</h2>
                            <p>We are UX/UI designers, Product Designers, Consultants, Strategists, illustrators, UX Researchers, Marketer, Motion Designers, Artists, and bathroom singers.</p>
                        </div>
                        <div className="work-box">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content red">
                                        <Image src="/images/about/akash.png" alt='Akash Solanki' width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Akash Solanki,</h2><span>UX Consultant</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content grey">
                                        <Image src="/images/about/veer.png" alt="Veer Shrivastava" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Veer Shrivastava,</h2><span>UI/UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content red">
                                        <Image src="/images/about/hemant.png" alt="Hemanth Bharti" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Hemanth Bharthi,</h2><span>Visual Designer</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content grey">
                                        <Image src="/images/about/rajini.png" alt='Shreya Singh' width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Shreya Singh, </h2><span>Illustrator</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content grey">
                                        <Image src="/images/about/vivek.png" alt="Vivek kesarwani" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Vivek kesarwani,</h2><span>Visual Designer</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 content-box">
                                    <div className="content red">
                                        <Image src="/images/about/ravi.png" alt="Ravi Kumar" width={328} height={405} layout="responsive" />
                                    </div>
                                    <div className="title1">
                                        <h2>Ravi Kumar,</h2><span>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="whatwedo1bg my-120">
                <div className="container">
                    <div className="whatwedo1">
                        <div className="todo">
                            <h2>What we do?</h2>
                        </div>
                        <div className="work-box">
                            <div className='row' style={{rowGap: "30px"}}>
                                <div className='col-sm-6 col-md-6 col-lg-6 whatwedo-box'>
                                    <div className="title1">
                                        <Image src="/vector/Group.png" alt='' height={48} width={48} />
                                        <h2>Branding</h2>
                                        <p>Building a visual expression of the products that encourages loyalty and builds trust. We bring the client’s vision into reality with a planned research, ideation, and precise execution.</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-6 whatwedo-box'>
                                    <div className="title1">
                                        <Image src="/vector/Group (2).png" alt='' height={48} width={48} />
                                        <h2>UX/UI</h2>
                                        <p>We create interfaces with the core objective of creating an experience that facilitates effective interaction for the end-users that helps businesses to achieve their financial goals.</p>
                                    </div>
                                </div>

                                <div className='col-sm-6 col-md-6 col-lg-6 whatwedo-box'>
                                    <div className="title1">
                                        <Image src="/vector/Group (3).png" alt='' height={48} width={48} />
                                        <h2>Development</h2>
                                        <p>We specialize in building fast, reliable, SEO-friendly, responsive websites and user-oriented mobile apps that are adaptable, modular, and expandable using cutting-edge technologies.</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-6 whatwedo-box'>
                                    <div className="title1">
                                        <Image src="/vector/Group (6).png" alt='' height={48} width={48}  />
                                        <h2>Marketing</h2>
                                        <p>A strong digital presence on social media that increases traffic and exposure to your product.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <section>
        <div className="container">
          <div className="social-media">
            <ul>
                <li className='linked-in'><Link href="https://www.linkedin.com/in/designerbanda/" passHref={true}><a>Linked-in</a></Link></li>
                <li className='instagram'><Link href="https://www.instagram.com/designer.banda/" passHref={true}><a>Instagram</a></Link></li>
                <li className='behance'><Link href="https://www.behance.net/DesignerBanda" passHref={true}><a>Behance</a></Link></li>
                <li className='facebook'><Link href="https://www.facebook.com/designer.bandaa/" passHref={true}><a>Facebook</a></Link></li>
            </ul>
          </div>
        </div>
      </section>
        </main>
    )
}
