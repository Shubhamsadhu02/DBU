import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'

export default function cCicktracker() {
  return (
    <main>
      <Banner background={"#000077"} title="Cricktracker" subtitle={"Collaboration"} />

      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>About</h2>
              <p>Cricket has captivated our hearts, and we are among those who have succumbed. Sahil Dev designed a series of posters on&nbsp;Indian Cricketers working with ScrollDroll which piqued Crictracker&lsquo;s interest, therefore we expanded the design concept this time to include a global cricket team as well.</p>
            </div>
          </div>
        </div></section>
      <section className='section-margin'>
        <div className="container">
          <div className="player-list">
            <div className='row'>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Warner.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Russel.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Bumhrah.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Dhawan.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Kholi.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Rohit.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/ABD.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Dhoni.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Gayle.svg" />
              </div>
              <div className='col-md-6'>
                <Image height={580} width={580} src="/images/cricktracker/Stokes.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="next-project text-center">
          <h3>NEXT PROJECT</h3>
          <h1>Josh</h1>
          <a href="Josh.html"><i className="far fa-arrow-right" /></a>
        </div>
      </section>
    </main>

  )
}
