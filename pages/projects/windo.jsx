import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'

export default function Windo() {
  return (
    <main>
      <Banner background={"#242536"} title="Windo" subtitle={"Branding • UI/UX"} />
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>About</h2>
          <p>Spayee is comprehensive cloud-based auditing and accounting platform enabling automated workflows and simplifying collaboration between teams and clients. It enables firms to concentrate on core Audit and Accounting activities. It manages all the data from one secure platform anytime,
            anywhere through any device.</p>
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>Impact</h2>
          <p>Windo is the fine platform for solopreneurs and budding businesses who want to set up their online business and manage it feasibly. No hassle bustle required, ready to use in just seconds. Working for such a platform with our modest design approach was a great experience which helped Windo to raise $500,000 in a seed round headed by Unicorn India Ventures with in 3 months of time span.
          </p>
        </div>
        <div className="building building1"> 
          <ul>
            <li>
              <h2>21k+</h2>
              <h3>Seed funding</h3>
            </li>
            <li>
              <h2>600k+</h2>
              <h3>App downloads</h3>
            </li>
            <li>
              <h2>150k+</h2>
              <h3>Registered businesses</h3>
            </li>
            <li>
              <h2>₹850k+</h2>
              <h3>Ratings</h3>
            </li>
          </ul>
        </div>
        <div style={{marginTop: 215}}>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/impact.png" />
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>Pain points in the earlier design</h2>
          <p>Branding wasn’t matching with the UI<br />
            Important functionalties were missing<br />
            No onboarding screens<br />
            App flow &amp; UI design was bad</p>
        </div>
        <div>
          <iImage height={668} width={1096} layout="responsive" src="/images/windo/pain.png" />
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>Solved all the problems in a better way</h2>
          <p>Proposed a new branding that works well with the app UI<br />
            Enhanced usuability &amp; experience<br />
            Included all the missing features<br />
            Easy to use card based design</p>
        </div>
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved1.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved2.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved3.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved4.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved5.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved6.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/windo/solved7.png" />
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="clients" style={{background: 'none'}}>
        <img src="vector/“.png" className="fitbg4" />
        <p>good. experience working with sahil for some xdesign requirements. prompt on timelines and was responsive. totally would recommend.
        </p>
        <img src="vector/Windo/silus.png" className="fitbg5" />
        <h3>Silus Reddy Chintapalli</h3>
        <h4>Founder, Windo</h4>
      </div>
    </div>
  </section>
</main>

  )
}
