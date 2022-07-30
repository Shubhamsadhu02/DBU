import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Testimonial from '../../src/components/Testimonial'

export default function Intelia() {
  return (
    <main>
      <Banner background={'#370606'} title="Intelia" subtitle="Branding • UI/UX" image={"/images/intelia/Intelia.png"} />
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>About</h2>
              <p>Intelia is a consulting company that specialises in IT infrastructure and solutions. They have worked in a variety of settings, ranging from small&nbsp;firms to large corporations, and have extensive experience. Intelia provides network, security, collaboration, mobile, datacenter, and cloud services, as well as consulting and highly skilled people.</p>
            </div>
            <div>
              <Image height={600} width={1096} layout="responsive" src="/images/intelia/about.png" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>The challenge for us</h2>
              <p>Our goal was to provide more visibility to the firm&nbsp;and products (exclusive and value-added services) in order to generate more leads and opportunities. The website&lsquo;s goal is to serve as a funnel for generating leads, which will be collected through social media ads and content.</p>
            </div>
            <div>
              <Image height={700} width={1096} layout="responsive" src="/images/intelia/challenges_1.png" />
            </div>
            <br />
            <div>
              <Image height={768} width={1096} layout="responsive" src="/images/intelia/challenges_2.png" />
            </div>
            <br />
            <div>
              <Image height={768} width={1096} layout="responsive" src="/images/intelia/challenges_3.png" />
            </div>
          </div>
        </div></section>
      <section>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>Website UI Design</h2>
              <p>We created a website that communicates&nbsp;trust, reputation, intelligence, and high-level consulting experience.</p>
            </div>
            <div>
              <Image height={792} width={1096} layout="responsive" src="/images/intelia/Website_cards.png" />
            </div>
            <br />
            <div>
              <Image height={3131} width={1096} layout="responsive" src="/images/intelia/landing.png" />
            </div>
          </div>
        </div></section>
      <Testimonial content="They are good listeners before they do. They have done exactly what we wanted with our website. DBU is one of the best creative places to work with."
        name={"Marc Bramon"} designation={"Co-founder, Intelia"} image="/images/intelia/Marc_Bramon.svg" />
    </main>

  )
}
