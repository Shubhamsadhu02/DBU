import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import 'swiper/css';


export default () => {

  const slide = [
    {
      "content": "DBU is full of out of the box thinkers. Whole team is gifted with ability to understand the soul and spirit of their client's ideas, re-creates those ideas and produce designs that exactly express what clients would have imagined in his mind. I recommend DBU whole heartedly.",
      "image": "/images/index/testimonial/vikash.png",
      "name": "Vikas Sethia",
      "designation": "Founder, Josh Community"
    },
    {
      "content": "We worked with DB Universe on the redesign of the Dybo.io Platform. It was a pleasure to work with them. Their design helped boost our conversion rate, and they brought design knowledge to the table that helped us understand how to make our product design-driven.",
      "image": "/images/index/testimonial/dhawal.png",
      "name": "Dhawal Jain",
      "designation": "Founder & CEO, Dybo"
    },
    {
      "content": "DBU designed the logo for our product Finshots(https://finshots.in). It's been a pleasure working with them. They came up with good ideas for the logo and incorporated our feedback timely into the design. DBU’s approach is very professional and methodical. ",
      "image": "/images/index/testimonial/bhanu.png",
      "name": "Bhanu Harish Gurram",
      "designation": "Co - Founder, Finshots"
    }
  ]
  return (
    <section className="clientsbg my-120">
        <div className="container">
          <div className="clients">
            <h2>What Clients Says</h2>
            <Image src="/images/quote.svg" height={33} width={38} />
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }} modules={[Autoplay,Pagination]} className="homeSlider"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
          {
             slide.map((ele, index) => {
              return <SwiperSlide key={index}>
              <p className='clients-review'>{ele.content}</p>
              <div className="client-info">
                <div className="client-info--img">
                  <Image src={ele.image} height={90} width={90} />
                </div>
                <div className="client-info--details">
                  <h3>{ele.name}</h3>
                  <h4>{ele.designation}</h4>
                </div>
              </div>
                </SwiperSlide>
             })
             }
            
    </Swiper>
    </div>
    </div>
</section>
  );
};
