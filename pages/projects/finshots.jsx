import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'
import ProjectTestimonial from '../../src/components/ProjectTestimonial'
import NextProject  from '../../src/components/NextProject'


export default function Finshots() {
  return (
    <main>
        <Header/>
      <Banner background="url('/images/finshots/background.png')" title ={"Finshots"} subtitle ={"Branding • Advertising"} image={"/images/finshots/finshots.png"}/>
      <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>About</h2>
                            <p>Finshots curates the most significant financial news that the typical Indian should know through simplified analysis, allowing users to keep up with what&apos;s going on in the business/financial world in a daily 3-minute long article.
                            </p>
                        </div>
                        <div className="work1 work3">
                            <h2>Impact</h2>
                            <p>Our challenge was to understand the complex nuances of finance then come up with an identity that offeres the simplicity & innovation that Finshot has to offer. We captured the idea of founders of bringing news from India and around the world in one place that can be consumed over an one cup of morning coffee.</p>
                        </div>
                        <div>
                        <Image src="/images/finshots/finshot1.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                        <Image src="/images/finshots/finshot2.png" height={650} width={1096} />
                        </div>
                    </div>
                </div>
       </section>

       <section className='section-margin'>
                <div className="container">
                    <div className="team">
                        <div className="work1 work3">
                            <h2>Logo Idea &amp; Construction</h2>
                            <p>Our key problem was to create a brand that didn&apos;t rely on cliched financial elements. We wanted to communicate the idea of a coffee shot in this design by integrating Finshots&apos; initials, F and S, with a coffee mug, suggesting that Finshots provides financial news in a way that can be read over a cup of morning coffee. The lighting volt also indicates the app&apos;s speedy and responsive character.
                            </p>
                        </div>
                        <div>
                            <Image src="/images/finshots/finshot3.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                            <Image src="/images/finshots/finshot4.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                            <Image src="/images/finshots/finshot5.png" className='mb-5' height={250} width={1096} />
                        </div>
                        <div>
                            <Image src="/images/finshots/finshot6.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                            <Image src="/images/finshots/finshot7.png" className='mb-5' height={650} width={1096} />
                        </div>
                        <div>
                            <Image src="/images/finshots/finshot8.png" className='mb-5' height={650} width={1096} />
                        </div>
                    </div>
                </div>
       </section>

       <ProjectTestimonial content="DBU designed the logo for our product Finshots(https://finshots.in). It's been a pleasure working with them. They came up with good ideas for the logo and incorporated our feedback timely into the design. DBU’s approach is very professional and methodical. They completed the project within the timeframe we agreed upon"
       image="/images/index/testimonial/harish.png" name="Bhanu Harish Gurram" designation="Co-founder, Finshots" />


<NextProject ProjectName="Dybo" link="/projects/dybo" />

    </main>
  )
}
