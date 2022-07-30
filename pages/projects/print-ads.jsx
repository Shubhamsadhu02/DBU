import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'

export default function PrintAds() {
  return (
    <main>
      <Banner background="url('/images/print-ads/bg.png')" title={"Print Ads"} image={"/images/print-ads/printads.png"}/>

  <section className='my-120'>
    <div className="container">
      <div className="team">
        <div className="work1 work3">
          <p>We retained our revolutionary side with us while working on commercials projects. It is also our mission to focus on societal issues, raise awareness and help people recognise the reality about their country by giving them a voice, even if it is a small one.</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="print-ads-list">
        <div className='row'>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/life.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/Monday.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/justice.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/Cricket.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/women.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/mobile.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/Rupees.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/wifi.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/Peace.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/mother'sday.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/plant.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/15aug.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/fathersday.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/government.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/black.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/diwali.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/fathersday1.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/plant1.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/traffic.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/15aug1.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/rich.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/bhagatsingh.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/navigation.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/farmers.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/media.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/attack.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/nepotism.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/nurse.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/fathersday2.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/manners.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/disconnect.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/farmers1.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/trap.png" />
          </div>
          <div className="col-md-6">
            <Image width={538} height={538} layout="responsive" src="/images/print-ads/fifa.png" />
          </div>
        </div>
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
