import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Testimonial from '../../src/components/Testimonial'

export default function Haituz() {
  return (
    <main>
      <Banner background={'#231F20'} title="Hiatuz" subtitle="Branding • UI/UX" image="/images/hiatuz/Haituz.png" />
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>About</h2>
          <p>Hiatuz is an online platform that offers flexible, shorter, but less stressful GATE coaching, allowing students to spend more time self-practicing to increase speed and accuracy. Hiatuz believes in efficient and effective education, and they ensure that concepts are comprehended by employing recorded lectures and live classes.
          </p>
        </div>
        <div>
          <Image height={668} width={1096} src="/images/hiatuz/about1.png" />
        </div>
        <br />
        <div>
          <Image height={500} width={1096} layout="responsive" src="/images/hiatuz/about2.png" />
        </div>
        <br />
        <div>
          <Image height={668} width={1096} layout="responsive" src="/images/hiatuz/about3.png" />
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>Ideation &amp; Construction</h2>
          <p>Hiatuz comes from the term hiatus, which means &quot;a halt or break in a sequence or activity.&quot; The logo features Hiatuz&lsquo;s initial letter H and a pause button, emphasising the brand&lsquo;s ambition to disrupt traditional educational methods. Because the courses they offer are just for electrical engineering, it&nbsp;also symbolizes the anode/cathode of an electric circuit.
          </p>
        </div>
        <div>
          <Image height={450} width={1096} layout="responsive" src="/images/hiatuz/Ideation1.png" />
        </div>
        <br />
        <div>
          <Image height={640} width={1096} layout="responsive" src="/images/hiatuz/Ideation2.png" />
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>Colors &amp; Typeface</h2>
          <p>The hues are a fantastic match for each other. Yellow is associated with gained knowledge, as well as uplifting and illuminating qualities such as hope, happiness, cheerfulness, and joy. The colour black is utilised to create contrast, which corresponds to Hiatuz&lsquo;s unusual teaching style.
            <br />The typeface is&nbsp;Bebas&nbsp;which ensures a strong and bold brand identity.
          </p>
        </div>
        <div>
          <Image height={350} width={1096} layout="responsive" src="/images/hiatuz/colors1.png" />
        </div>
        <br />
        <div>
          <Image height={560} width={1096} layout="responsive" src="/images/hiatuz/colors2.png" />
        </div>
        <br />
        <div>
          <Image height={560} width={1096} layout="responsive" src="/images/hiatuz/colors3.png" />
        </div>
      </div>
    </div>
  </section>
  <section className='section-margin'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <h2>Website UI</h2>
          <p>Hiatuz is a brand-new company that has only a few batches in operation. The user interface was created with the goal of instilling trust in consumers&lsquo; minds by displaying the founding team&lsquo;s accomplishment, testimonials from current students, and the courses they offer.&nbsp;
          </p>
        </div>
        <div>
          <Image height={700} width={1096} layout="responsive" src="/images/hiatuz/Website.png" />
        </div>
      </div>
    </div>
  </section>
  <Testimonial content="What we love most about working with DB Universe is how well they grasps our viewpoint and translates it into the designs! It feels great to be able to trust that your work is in good hands and just relax knowing that the output is going to be just great!" image="/images/hiatuz/shanti.png" name="Shanti Bayyavarapu" designation="Co-founder, Hiatuz" />
  <section>
    <div className="next-project text-center">
      <h3>NEXT PROJECT</h3>
      <h1>Print Ads</h1>
      <a href="Print.html"><i className="far fa-arrow-right" /></a>
    </div>
  </section>
</main>

  )
}
