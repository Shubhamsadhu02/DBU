import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'


export default function BakulFresh() {
  return (
    <main>
        <Header/>
      <Banner background={'#ED682E'} title ={"Bakul Fresh"} subtitle ={"Branding • UI/UX"} image={"/images/bakul-fresh/bakulfresh.png" }/>
      <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>Bakul Fresh is India&apos;s first subscription-based online vegetable platform, allowing customers to purchase weekly or monthly vegetable subscription plans. The Plans are completely customizable, and the vegetables are farm fresh and inexpensive. Customers only need to sit back and relax at home while Bakul&apos;s team delivers vegetables to their doorstep.
                              </p>
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/about.png" height={650} width={1096} />
                        </div>
                    </div>
                </div>
       </section>

       <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>The challenge for us</h2>
                            <p>A brand&apos;s success is contingent on appropriate branding, which allows the target audience to easily relate to it. Bakul Fresh lacked a cohesive brand identity, as well as information and modern design trends on their website. Bakul team wanted us to design the website while working on the logo. This was so challenging to align the brand identity with the website without a logo. They wanted design should be  timeless, simple, and distinctive that looks fresh and reflects nature.
                              <br/>
                              <br/>
                              Our second task was to design a user-friendly mobile application. the app will be used by people between the ages of 25 - 60, we had to adhere to a number of visual constraints, such as font selection and data point size. We iterate the UI of the subscription plan numerous times when building the app and website after receiving input from the client and users. Finally, we arrived at the ideal solution.
                            </p>
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/Challenge.png" height={650} width={1096} />
                        </div>
                    </div>
                </div>
       </section>

       <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Worked on Website &amp; Logo Simultaneously</h2>
                            <p>When it comes to design a website without any brand identity it becomes very challenging to create visual language of the website. We distributed the work for all the modules i.e, logo, website & user research(for mobile app) among the team. We worked day & night on both website & logo to meet the client’s requirement. Although it was a one page website but we tried different ideas in order to make it aesthetic, fresh & easy to recognize the product offerings.
                            </p>
                        </div>
                        <div className="work1 work3">
                            <h2>Explored 10+ options for the Logo</h2>
                            <p>Team Bakul desired a logo that integrated the letters B, natural, fresh & Ok gesture. We began constructing moodboards for our inspiration in order to match the exact requirements for the logo. We looked at about ten choices and decided on the greatest fit for the brand in less than two weeks. 
                            </p>
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/explored1.png" className='mb-5' height={750} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/explored2.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/explored3.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/explored4.png" height={650} width={1096} />
                        </div>
                    </div>
                </div>
       </section>

       <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Design system for the website &amp; mobile app</h2>
                            <p>We designed a design framework for the website and mobile app interface while working on the logo. We used Ubuntu as our primary typeface and Poppins as our secondary typeface in the design system. Icons with varying colours and strokes for improved accessibility. To build a visual language, we carefully considered the size, spacing, and placement of each component.
                              </p>
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/design1.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/design2.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/design3.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/design4.png" height={1050} width={1096} />
                        </div>
                    </div>
                </div>
       </section>
       <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Mobile App </h2>
                            <p>It is critical for any given brand to function successfully across all platforms where it is available. As a result, we focused on a light and straightforward interface that runs quickly on both a web page and a mobile device. 
                              <br/>
                              <br/>
                              To boost the motivation to utilize the app, we concentrated on improving its usability and and designed application&apos;s UI in such a way that it is easy to use and intuitive as possible.</p>
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/mobile1.png" className='mb-5' height={1250} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/bakul-fresh/mobile2.png" height={2650} width={1096} />
                        </div>
                    </div>
                </div>
       </section>

       <ProjectTestimonial content="DB Universe is consultative, understands your requirements and creates solutions to fit your needs! Being a startup, they understood our vision right away and did an excellent job at executing it, making for an efficient as well as friendly experience.They team are highly professional, very prompt in responding to queries and respects time. I strongly recommend the services of DB Universe"
       image="/images/index/testimonial/sunil.png" name="Sunil Agrawal" designation="Founder, Bakul Fresh" />


<NextProject ProjectName="Battlexo" link="/projects/battle-xo" />
    </main>
  )
}
