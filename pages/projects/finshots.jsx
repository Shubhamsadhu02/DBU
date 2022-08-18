import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Header from '../../src/components/Header'


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

       <section className='section-margin'>
                <div className="container">
                    <div className="clients" style={{ background: 'none' }}>
                        <Image src="/images/quote.svg" height={38} width={38} />
                        <p>DB Universe team is full of talented designers. More importantly, they are very patient, accommodating and an absolute delight to work with. They came highly recommended and worked diligently on our project.</p>
                        <div className='row'>
                            <Image src="/images/finshots/sandeep.png" height={80} width={80} />
                            <div className="col-8">
                                <h3>Sandeep Singh</h3>
                                <h4>Co-founder, Spayee</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

          <section>
                <div className="next-project text-center">
                    <h3>NEXT PROJECT</h3>
                    <h1>Dybo</h1>
                    <a><i className="far fa-arrow-right" /></a>
                </div>
            </section>  

    </main>
  )
}
