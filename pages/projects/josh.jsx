import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Testimonial from '../../src/components/Testimonial'

export default function Josh() {
  return (
    <main>
      <Banner background={'#370E06' } title="Josh" subtitle="Branding • Advertising" image="/images/josh/josh.png" />
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>About</h2>
              <p>For a bridigital India, the Josh Community aims to empower poor children, youth, and women. It&lsquo;s a one-of-a-kind internet venture that serves as a one-stop shop for goods, services, and job openings. We&nbsp;work with NGOs, agencies, and industry to upskill the country&lsquo;s workforce.
              </p>
            </div>
            <div className="work1 work3">
              <h2>Impact</h2>
              <p>Considering Josh&lsquo;s beautiful intuition to help and make the unprivileged
                self-reliant from supporting them with basic needs to creating a continuous cycle of supply for financial growth to make them independent. We&lsquo;ve helped them not just with a design but an idea that reflects their ethical sharing revolution that has helped thousands of impoverished individuals to reach their potentials.</p>
            </div>
            <div className="building building1">
              <ul>
                <li>
                  <h2>21k+</h2>
                  <h3>Life influenced</h3>
                </li>
                <li>
                  <h2>600k+</h2>
                  <h3>Contribution mode</h3>
                </li>
                <li>
                  <h2>150k+</h2>
                  <h3>Product souled</h3>
                </li>
                <li>
                  <h2>₹850k+</h2>
                  <h3>Dhruva income</h3>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 215 }}>
            <Image height={600} width={1096} layout="responsive" src="/images/josh/impact.png" />
          </div>
        </div>
      </section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>The challenge for us</h2>
              <p>The most difficult task for us was to convey the concept of joy of sharing through all of the communication channels. We tried to transmit happiness in the branding and marketing collaterals, and&nbsp;came up with an identity that resonates with all the community members, consumers, and businesses.
              </p>
            </div>
            <div>
              < Image height={590} width={1096} layout="responsive" src="/images/josh/challenge1.png" />
            </div>
            <br />
            <div>
              < Image height={638} width={1096} layout="responsive" src="/images/josh/challenge2.png" />
            </div>
            <br />
            <div>
              < Image height={475} width={1096} layout="responsive" src="/images/josh/challenge3.png" />
            </div>
            <br />
            <div>
              < Image height={360} width={1096} layout="responsive" src="/images/josh/challenge4.png" />
            </div>
            <br />
            <div>
              < Image height={610} width={1096} layout="responsive" src="/images/josh/challenge5.png" />
            </div>
            <br />
            <div>
              < Image height={616} width={1096} layout="responsive" src="/images/josh/challenge6.png" />
            </div>
            <br />
            <div>
              < Image height={464} width={1096} layout="responsive" src="/images/josh/challenge7.png" />
            </div>
            <br />
            <div>
              < Image height={542} width={1096} layout="responsive" src="/images/josh/challenge8.png" />
            </div>
          </div>
        </div>
      </section>
      <Testimonial content="DBU is full of out of the box thinkers. Whole team is gifted with ability to understand the soul and spirit of their client's ideas, re-creates those ideas and produce designs that exactly express what clients would have imagined in his mind. I recommend DBU whole heartedly." image={"/images/josh/Vikas.png"}
      name="Vikas Sethia" designation="Founder, Josh Community" />
    </main>

  )
}
