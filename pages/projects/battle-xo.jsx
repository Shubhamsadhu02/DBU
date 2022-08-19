import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'


export default function Battlexo() {
    return (
        <main>
            <Header/>
             <Banner background="#111320" title ={"BattleXO"} subtitle ={"Branding • UI/UX"} image={"/images/battlexo/battlexo.png" }/>
            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>BattleXO is a gaming platform that allows you to play your desired games, organize, connect with like-minded gamers, and much more. It makes game play safer, smoother, and more efficiently.</p>
                        </div>
                        <div>
                            <Image src="/images/battlexo/about.png" height={600} width={1096} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The challenge for us</h2>
                            <p>As a one-of-a-kind and revolutionary platform for all online gamers, it provided us with a slew of problems with brand design. It all started with a basic and uninformative landing page that required a little sprucing up. The main task was to rework on UI/UX to improve the page's appearance and feel, but also offering a smooth and secure interface.
                                The second problem we faced was maintaining a careful approach that ensured the design system remained consistent and high-quality throughout the project.
                                <br/>
                                <br/>
                                The final challenge for us was to approach design in such a way that the finished result stood out from the crowd and instilled confidence in the product from the first sight.</p>
                        </div>
                        <div>
                            <Image height={890} width={1096} layout="responsive" src="/images/battlexo/challenge.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The Mood Board for visual language</h2>
                            <p>We first sought to create a mood board to visually define the brand and its offerings before diving into the design intricacies. We also took inspiration from other like-minded examples such as Dribble, Behance & other similar gaming platforms.
                                <br/>
                                <br/>
                                These pre-existing designs were really helpful in establishing our own visual design language. We were able to gain a deeper understanding of the brand's offerings and features from the perspective of the audience as a whole.
                                </p>
                        </div>
                        <div>
                            <Image height={700} width={1096} layout="responsive" src="/images/battlexo/mood.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Our Design Methodology</h2>
                            <h3>How did it start?</h3>
                            <p>After using a mood board to analyze all of the data that needed to be worked on. For the same, we worked on improving the product's functionality, usability, and utility. We conducted an extensive study into the demographics of users and the UI features given by competitors. We then separated the design jobs into simple gigs with clear goals and timeframes, taking into account the wide range of design tasks. We next distributed the tasks to our team members based on members' capabilities to accomplish tasks efficiently.
                            <br/>
                            <br/>
                            The first step in our design approach was to improve the user experience on the website's landing page. We concentrated on increasing the amount of engagement on the website with icons and UI design. We chose a suitable background image that reflected the brand's personality.
                            </p>
                        </div>
                        <div>
                            <Image height={1928} width={1096} layout="responsive" src="/images/battlexo/design1.png" />
                        </div>
                        <br/>
                        <div>
                            <Image height={890} width={1096} layout="responsive" src="/images/battlexo/design2.png" />
                        </div>
                        <br/>
                        <div>
                            <Image height={1080} width={1096} layout="responsive" src="/images/battlexo/design3.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="team">
                        <div className="work1 my-5">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                    <h3>Typefaces</h3>
                                    <p>By utilizing better typefaces, DB Universe improved the look and feel of the Website. We picked Work Sans as the primary font for body text, captions & CTAs & TerminaW00-Demi as the secondary font for heading since it looks futuristic & suits the gaming genre.</p>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <h3>Colorpalette</h3>
                                    <p>We chose red and purple gradient for headings to stand out against the dark core of the deep blue color. This decent and modest palette strengthens the brand's vision and personality.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <Image height={1080} width={1096} layout="responsive" src="/images/battlexo/typefaces.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h3>UI Components</h3>
                            <p>After Deciding the wireframe, typefaces & color palette our team started working on information architecture & high fidelity wireframes from which we got the idea to design each UI components such as cards, buttons, icons etc. After having 2-3 options for the cards, we represented the landing page to the client & they really impressed with all the options & finalised one.
                            </p>
                        </div>
                        <div>
                            <Image height={1316} width={1096} layout="responsive" src="/images/battlexo/components.png" />
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='my-120'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h3>Final Outcome </h3>
                            <p>Our designers crafted experience that made the interface smooth and comfortable going through for all the devices. We aimed to enable BattleXO stand out and fulfil its potential by incorporating all of the improvements and engaging ideology, a practical UI, and increased user experience.
                            </p>
                        </div>
                        <div>
                            <Image height={5508} width={1096} layout="responsive" src="/images/battlexo/outcome.png" />
                        </div>
                        
                    </div>
                </div>
            </section>

            <ProjectTestimonial content="We've worked with DBU over several months for Rain's creatives & website needs and they have been an absolute delight to work with. Great delivery, professionalism and accommodation of all our asks. Kudos!"
       image="/images/index/testimonial/.png" name="Rohit Raj" designation="Founder, BattleXo" />


    <NextProject ProjectName="Ayurwayda" link="/projects/vedose" />
        </main>
    )
}