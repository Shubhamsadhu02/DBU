import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'

export default function Rain() {
    return (
        <main>
            <Header/>
            <Banner background={'#0D1131'} title ={"Rain"} subtitle ={"Rain • Branding • UI/UX"} image={"/images/rain/hero.png" }/>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>Rain Pay is a modern approach to payroll, that allows employees to take back control over their financial lives and receive the money theyve earned without having to wait until payday. </p>
                        </div>
                        <div>
                            <Image src="/images/rain/featured.png" height={600} width={1096} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The challenge for us</h2>
                            <p>The first challenge in this project was to create a simple, futuristic, and appealing company identity with a 3D element. We looked at a lot of different ideas before settling on this final design, which combines cubical 3d elements to depict a store with a door that also conveys the brand initials D in negative space. The bold square custom font is designed to complement the brand mark.</p>
                        </div>
                        {/*rain 4 boxes*/}
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <Image src="/images/rain/concept-1.png" layout='responsive' width={538} height={484} />
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <Image src="/images/rain/concept-2.png" width={538} layout='responsive' height={232} />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6">
                                            <Image src="/images/rain/concept-3.png" layout='responsive' width={230} height={228} />
                                        </div>
                                        <div className="col-6">
                                            <Image src="/images/rain/concept-4.png" layout='responsive' width={230} height={228} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Designed some posters</h2>
                            <p>Posters are an oldie but a goodie when it comes to marketing collateral.
                                In case of &apos;Rain&apos;, the challenge for DB Universe was to plan and create posters that communicated company&apos;s value and established credibility. We created posters for them that were in line with their company&apos;s concept and fulfilled their purpose well.</p>
                        </div>
                        {/*rain 4 boxes*/}

                        <div className="row pt-5">
                            <div className="col">
                                <Image src="/images/rain/poster-1.png" layout='responsive' width={262} height={371} />
                            </div>
                            <div className="col">
                                <Image src="/images/rain/poster-2.png" layout='responsive' width={262} height={371} />
                            </div>
                            <div className="col">
                                <Image src="/images/rain/poster-3.png" layout='responsive' width={262} height={371} />
                            </div>
                            <div className="col">
                                <Image src="/images/rain/poster-4.png" layout='responsive' width={262} height={371} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Embellished the Social Media</h2>
                            <p>For any business, especially when it is a budding business, social appearance plays a major role in marketing as well as making the mark. We planned and created a proper framing of how to furnish the interface on their social media.
                                <br /><br />
                                Then, we incorporated all the data related to brand such as the benefits, features, offers into beautiful designs. We used icons and illustrations and human designs that offers a pleasing and refreshing experience to users.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <Image src={'/images/rain/social-media.png'} height={1721} width={1366} layout='responsive' />
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Created Pre-Launch Website</h2>
                            <p>Creating design and delivering it for a pre-launch website, it is crucial that end product is up to the mark. There are a lot of things we had to keep in mind. We took care of the proper spacing through out the website, typography, imagery, logo, and color palette.
                                <br /><br />
                                For website to perform well, we did cross-device and cross-browser appearance test too.</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Image src="/images/rain/pre-launch.png" layout="responsive" height={537} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Typeface</h2>
                            <p>We&apos;ve Montserrat as the primary typeface because of its geometric and aesthetic simplicity, which complements the brand&apos;s fintech vibe.</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Image src="/images/rain/typeface.png" layout='responsive' height={537} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The Color palette</h2>
                            <p>We employed Blue as a primary color and complementarily we used Orange, Red & Green for secondary color in the website as well as for marketing collaterals. Also, to make the design colorful, we&apos;ve used gradient background.</p>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <Image src="/images/rain/color-palette.png" layout='responsive' height={537} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-120 mb-5'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Visual experience</h2>
                            <p>We used a combination of 3D and flat illustration as well as real images to create a visually appealing interface.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Image src="/images/rain/landing-page.png" height={6049} width={1096} />
                        </div>
                    </div>
                </div>
            </section>

            <ProjectTestimonial content="We've worked with DBU over several months for Rain's creatives & website needs and they have been an absolute delight to work with. Great delivery, professionalism and accommodation of all our asks. Kudos!"
       image="/images/index/testimonial/sneha.png" name="Sneha Kumari" designation="Marketing manager, Rainpay india" />


<NextProject ProjectName="Eynetech" link="/projects/eynetech" />
        </main>

    )
}
