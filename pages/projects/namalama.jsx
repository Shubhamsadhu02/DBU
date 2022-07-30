import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Testimonial from '../../src/components/Testimonial'

export default function Namalama() {
  return (
    <main>
      <Banner background={'#050100'} title="Namalama" subtitle="Branding • Packaging" image={"/images/namalama/namalama.png"} />

      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>About</h2>
              <p>Nama Lama is a gin-making firm that approached us for help with branding and packaging for their new dry gin label in response to the increasing gin market. We wanted to build a brand that was surprising but welcoming, luxurious but accessible to everyone.
              </p>
            </div>
            <div>
              <Image height={768} width={1096} layout="responsive" src="/images/namalama/about1.png" />
            </div>
            <br />
            <div>
              <Image height={480} width={1096} layout="responsive" src="/images/namalama/about2.png" />
            </div>
            <br />
            <div>
              <Image height={700} width={1096} layout="responsive" src="/images/namalama/about3.png" />
            </div>
            <br />
            <div>
              <Image height={1237} width={1096} layout="responsive" src="/images/namalama/about4.png" />
            </div>
            <br />
            <div>
              <Image height={1237} width={1096} layout="responsive" src="/images/namalama/about5.png" />
            </div>
            <br />
            <div>
              <Image height={1237} width={1096} layout="responsive" src="/images/namalama/about6.png" />
            </div>
            <br />
            <div>
              <Image height={1237} width={1096} layout="responsive" src="/images/namalama/about7.png" />
            </div>
            <br />
            <div>
              <Image height={1237} width={1096} layout="responsive" src="/images/namalama/about8.png" />
            </div>
          </div>
        </div>
      </section>
      <Testimonial content="Working with DBU was a creatively satisfying experience. As a young entrepreneur you need designers who can be readily available to have conversation with whenever an idea arises and to DBU's credit, always was, to contribute and streamline our thoughts into living." image="/images/namalama/karan.png" name="Karan Desai" designation="Founder, Nama Lama" />
    </main>

  )
}
