import React from 'react'
import Image from 'next/image'

export default function LogofolioOne() {
  return (
    <main>
      <section style={{ background: '#231F20' }}>
        <div className="project-header">
          <div className="container project-header--intro">
            <h1>Logofolio 1</h1>
          </div>
        </div>
      </section>

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
      <section>
        <div className="next-project text-center">
          <h3>NEXT PROJECT</h3>
          <h1>Edulil</h1>
          <a href="#"><i className="far fa-arrow-right" /></a>
        </div>
      </section>
    </main>
  )
}
