import React from 'react'
import Image from 'next/image'
import Header from '../../src/components/Header'
import Banner from '../../src/components/Banner'
import NextProject  from '../../src/components/NextProject'

export default function LogofolioOne() {
  return (
    <main>
      <Header/>
      <Banner background={'#2A2B31'} title ={"Logofolio 1"} />

      <section className='my-120'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <p>This logofolio consists some of our best identity work that we did in 2018, including the creative process that conducted by the DBU team. The brands mentioned are the trademarks of the companies that we assisted in their brand creation and/or transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            <Image src="/images/logofolio-1/img-1.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-2.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-3.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-4.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-5.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-6.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-7.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-8.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-9.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-10.png" height={620} width={1096} layout="responsive" />
          </div>
          <div>
            <Image src="/images/logofolio-1/img-11.png" height={620} width={1096} layout="responsive" />
          </div>
          <div className="logofolio-bottom">
            <p>Thanks for watching</p>
          </div>
        </div>
      </section>

      <NextProject ProjectName="Logofolio 2" link="/projects/logofolio-2" />
    </main>
  )
}
