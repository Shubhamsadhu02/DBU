import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'

export default function Dybo() {
    return (
        <main>
             <Banner background="url('/images/dybo/bg.svg')" title ={"Dybo"} subtitle ={"Branding • UI/UX"} image={"/images/dybo/hero.png" }/>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>DYBO is a visual technology platform that reinventing product presentation with automated 3D content generation, photorealistic product visuals and augmented reality.
                                DYBO has worked with companies like OYO Rooms, The Armchair, Giovanni Boutique, MicroD, Russet and counting more.</p>
                        </div>
                        <div>
                            <Image src="/images/dybo/featured.png" height={600} width={1096} />
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
                        {/*dybo 4 boxes*/}
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <img className='img-responsive w-100' src="/images/dybo/concept-1.png" />
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <img className='img-responsive w-100' src="/images/dybo/concept-2.png"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <img className='img-responsive w-100' src="/images/dybo/concept-3.png" />
                                        </div>
                                        <div className="col-6">
                                            <img className='img-responsive w-100' src="/images/dybo/concept-4.png"/>
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
                            <h2>Started from the Brand Identity</h2>
                            <p>The initial task in this project was to design a brand identity that should be both Minimalistic and inviting, with a 3D element. As a result, we began working on different ideas on paper. Then, experimented with various colour combinations (as shown below) on illustrator, our customer chose the one that best suited their needs.</p>
                        </div>
                        {/*dybo 4 boxes*/}

                        <div className="row pt-5">
                            <div className="col position-relative">
                                <Image src="/images/dybo/concept-5.png" layout='responsive' width={302} height={350} />
                            </div>
                            <div className="col-5">
                                <Image src="/images/dybo/concept-6.png" layout='responsive' width={453} height={360} />
                            </div>
                            <div className="col position-relative">
                                <div className="col-12">
                                    <Image src="/images/dybo/concept-7.png" layout='responsive' width={302} height={170} />
                                </div>
                                <div className="col-12 mt-2">
                                    <Image src="/images/dybo/concept-8.png" layout='responsive' width={302} height={170} />
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
                            <h2>Refined UI/UX of the Product</h2>
                            <p>We first sought to create a mood board to visually define the brand and its offerings before diving into the design intricacies. We also took inspiration from other like-minded examples such as Dribble, Behance & other similar gaming platforms.
                                <br />
                            These pre-existing designs were really helpful in establishing our own visual design language. We were able to gain a deeper understanding of the brands offerings and features from the perspective of the audience as a whole.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Our Design Methodology</h2>
                            <p>Understanding the pain points of the target market and analysing the competition are essential for any products success. So we began the project with user research to discover the users pain spots, followed by the creation of user personas to answer their problems in our final product, and the competitive analysis revealed some other surprising data. After gathering all of the information and consulting with the stakeholders, our team created a product journey map with information architecture. We utilised a card sorting technique to evaluate the material on the site before going into the structure and layout. </p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Image src="/images/dybo/methadology.png" height={537} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Scenes after Research & Analysis</h2>
                            <p>We created wireframes to represent the products interface with all of the data points after two weeks of research and analysis. While working on the wireframes, our team concentrated on the design system, such as the typography, icons, and colours that will be utilised in the final UI. We tried out a few different options for the products user interface before landing on the one that best satisfied the users and clients needs. </p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Image src="/images/dybo/research-analysis.png" height={700} width={1096} />
                            </div>
                            <div className="col-12 mt-4">
                                <Image src="/images/dybo/ra2.png" height={850} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>A Consistent Design System</h2>
                            <p>To achieve consistency and uniformity in design, we designed a unique design system by leveraging a repetitive collection of components, such as font, forms, input area, buttons, and colours. This allowed us to create a consistent and unified experience across all of the websites pages and dashboard. Because of Gilroy types current appearance and versatility, we were able to create a clean minimalistic ui with a lot of clarity and usefulness. We utilised Myrtle Green as our major colour scheme, which helped us stand out from the competition, as well as mild tints of the Golden colour.</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <Image src="/images/dybo/design-system-1.png" height={537} width={1096} />
                            </div>
                            <div className="col-12 mt-4">
                                <Image src="/images/dybo/design-system-2.png" height={700} width={1096} />
                            </div>
                            <div className="col-12 mt-4">
                                <Image src="/images/dybo/design-system-3.png" height={1230} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-120 mb-5'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Robust Output</h2>
                            <p>Our team worked around the clock to ensure that the final product was as good as possible. In the UI, we experimented with many typefaces and icon styles before settling on the best fit for the product. You may see a robust result below after many revisions in the UI. During user testing, they deemed the product to be both user-friendly and attractive.</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <Image src="/images/dybo/robust-output-1.png" height={537} width={1096} />
                            </div>
                            <div className="col-12 mt-4">
                                <Image src="/images/dybo/robust-output-2.png" height={700} width={1096} />
                            </div>
                            <div className="col-12 mt-4">
                                <Image src="/images/dybo/robust-output-3.png" height={1230} width={1096} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing-page">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Image src="/images/dybo/landing-page.png" height={6049} width={1096} />
                    </div>
                </div>
                </div>
            </section>



            <section>
                <div className="container">
                    <div className="clients" style={{ background: 'none' }}>
                        <Image src="/images/quote.svg" height={38} width={38} />
                        <p>DB Universe team is full of talented designers. More importantly, they are very patient, accommodating and an absolute delight to work with. They came highly recommended and worked diligently on our project.</p>
                        <div className='row'>
                            <Image src="/images/dybo/client.svg" height={80} width={80} />
                            <div className="col-8">
                                <h3>Sandeep Singh</h3>
                                <h4>Co-founder, dybo</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="next-project text-center">
                    <h3>NEXT PROJECT</h3>
                    <h1>Finshots</h1>
                    <a href="Finshots.html"><i className="far fa-arrow-right" /></a>
                </div>
            </section>
        </main>

    )
}
