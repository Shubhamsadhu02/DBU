import React from 'react'
import Image from 'next/image'



export default function ProjectTestimonial({ content, image, name, designation}) {
  return (
    <section className="my-120">
    <div className="container">
      <div className="clients" style={{padding: "180px 70px"}}>
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
      </div>
    </div>
  </section>
  )
}

