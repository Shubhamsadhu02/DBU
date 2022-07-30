import React from 'react'
import Image from 'next/image'

export default function Testimonial({ content, image, name, designation}) {
  return (
    <section className="clientsbg my-140 py-5 review-section">
    <div className="container">
      <div className="clients">
        <h2>What Clients Says</h2>
        <Image src="/images/quote.svg" height={33} width={38} />
        <p className='clients-review'>{content}</p>
        <div className="client-info">
          <div className="client-info--img">
            <Image src={image} height={90} width={90} />
          </div>
          <div className="client-info--details">
            <h3>{name}</h3>
            <h4>{designation}</h4>
          </div>

        </div>

        <div className="pagination p1">
          <ul>
            <a className="is-active" href="#"><li /></a>
            <a href="#"><li /></a>
            <a href="#"><li /></a>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
