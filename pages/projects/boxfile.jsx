import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Testimonial from '../../src/components/Testimonial'

export default function Boxfile() {
  return (
    <main>
      <Banner background={'#002F3D'} title="Boxfile" subtitle="Branding • Advertising • UI/UX" image="/images/boxfile/Boxfile.png" />

      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>About</h2>
              <p>Boxfile is comprehensive cloud-based auditing and accounting platform enabling automated workflows and simplifying collaboration between teams and clients. It enables firms to concentrate on core Audit and Accounting activities. It manages all the data from one secure platform anytime, anywhere through any device.</p>
            </div>
            <div>
              <Image height={ 700 } width={1096} layout="responsive" src="/images/boxfile/About.png" />
            </div>
          </div>
        </div></section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>The challenge for us</h2>
              <p>The biggest challenge for us to give an exciting and fresh look and feel to their website and branding as they have a very particular target audience i. e Accountants &amp; Auditors.
                <br />
                <br />
                The earlier website was not understandable &amp; there was no CTA on the website which was essential to successfully convert the target audience into clients.</p>
            </div>
            <div>
              <Image height={700} width={1096} layout="responsive" src="/images/boxfile/Challenge.png" />
            </div>
          </div>
        </div></section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>Brand Identity</h2>
              <p>In this logo, we&nbsp;aimed to give the brand name a visual representation.&nbsp;The design depicts a box filled with many files that are neatly organised, indicating that the company is providing the same services to its customers, which is to create an great ecosystem for chartered accountants to conduct audits and manage their tasks and files.
              </p>
            </div>
            <div>
              <Image height={700} width={1096} layout="responsive" src="/images/boxfile/Brand1.png" />
            </div>
            <br />
            <div>
              <Image height={525} width={1096} layout="responsive" src="/images/boxfile/Brand2.png" />
            </div>
            <br />
            <div>
              <Image height={620} width={1096} layout="responsive" src="/images/boxfile/Brand3.png" />
            </div>
            <br />
            <div>
              <Image height={620} width={1096} layout="responsive" src="/images/boxfile/Brand4.png" />
            </div>
            <br />
            <div>
              <Image height={860} width={1096} layout="responsive" src="/images/boxfile/Brand5.png" />
            </div>
          </div>
        </div></section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>Website UI</h2>
              <p>Brand color, illustrations, and icons are designed in a way that offers an exciting experience to a not so exciting task. Also, we wanted to distinguish ourselves from other similar platforms so our website UI was planned in a colorful and fun manner.
              </p>
            </div>
            <div>
              <Image height={612} width={1096} layout="responsive" src="/images/boxfile/Website1.png" />
            </div>
            <br />
            <div>
              <Image height={1216} width={1096} layout="responsive" src="/images/boxfile/Website2.png" />
            </div>
            <br />
            <div>
              <Image height={925} width={1096} layout="responsive" src="/images/boxfile/Website3.png" />
            </div>
          </div>
        </div></section>
      <Testimonial content="Worked with DB Universe for our design requirements and they were really professional throughout the development process and their outputs were simply world class." image="/images/boxfile/Marc_Bramon.svg" name={"Senthilkumar M. Jegadeeswaran"} designation="Co-founder, Boxfile" />

    </main>

  )
}
