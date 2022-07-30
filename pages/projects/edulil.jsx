import Image from 'next/image'
import React from 'react'
import Banner from '../../src/components/Banner'
import Testimonial from '../../src/components/Testimonial'

export default function Edulil() {
  return (
    <div>
      <Banner background={"#262261"} title="Edulil" subtitle="Branding • UI/UX" image="/images/edulil/Edulil.png" />
      
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>About</h2>
              <p>Edulil is a spam-free, ad-free learning platform for young children. Videos, songs, games, and books are available to engage children in a variety of activities. A performance report is given to parents that assesses their child&lsquo;s critical areas. While sitting right next to them, their children can learn new things and see the world.
              </p>
            </div>
            <div>
              <Image height={486} width={1096} layout='responsive' src="/images/edulil/about.png" />
            </div>
          </div>
        </div>
      </section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>The Brand Identity</h2>
              <p>&ldquo;Education for Little Ones&ldquo; is the brand name. This logo integrates the brand&lsquo;s tangible and intangible attributes, preserving the brand&lsquo;s identity. The typeface is bold and playful. The mascot is used in the logo to provide a consistent brand impression. Cat&lsquo;s legs are also represented by the letters Lil. The logo was created with children in mind to guarantee that it appeals to their unique characteristics.
              </p>
            </div>
            <div>
              <Image height={1090} width="1096" layout='responsive' src="/images/edulil/brand.png" />
            </div>
          </div>
        </div>
      </section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>Mascot design</h2>
              <p>By giving the brand a mascot, we&lsquo;ve given it a human figure. The mascot is a vibrant&nbsp;cat with superpowers as c hildren have a special connection to cartoons and superheros. C ombination of bright&nbsp;colours are used to make the mascot visually appealing. This mascot is used to promote the idea that studying is enjoyable. The Edulil is attempting to promote the concept of fun learning.
              </p>
            </div>
            <div>
              <Image height={486} width="1096" layout='responsive' src="/images/edulil/Mascot1.png" />
            </div>
            <br />
            <div>
              <Image height={486} width="1096" layout='responsive' src="/images/edulil/Mascot2.png" />
            </div>
            <br />
            <div>
              <Image height={486} width="1096" layout='responsive' src="/images/edulil/Mascot3.png" />
            </div>
            <br />
            <div>
              <Image height={486} width="1096" layout='responsive' src="/images/edulil/Mascot4.png" />
            </div>
          </div>
        </div>
      </section>
      <section className='section-margin'>
        <div className="container">
          <div className="team">
            <div className="work1 work3">
              <h2>Website UI</h2>
              <p>The website&lsquo;s user interface is simple to use. It offers a visually appealing card-based layout. To make it easier for children to enjoy, we organized all of the information into individual tabs. Icons and easy-to-read fonts on the website eliminate distractions and stimulate involvement. The website&lsquo;s user interface only demands inputs from parents when they log in. Aside from login page, the UI was created with youngsters in mind. Page routing is also designed to improve the website&lsquo;s user experience.
              </p>
            </div>
            <div>
              <Image height={3031} width="1096" layout='responsive' src="/images/edulil/website.png" />
            </div>
          </div>
        </div>
      </section>
      <Testimonial content="Creative, talented and professional is a rare combination – Sahil and his team have it all. Their work speaks for itself as you can tell with all their projects, and we couldn’t be happier with their branding work for Finshots!”" image="/images/edulil/Siddhant.png" name="Siddhant Bansal" designation="Founder, Edulil" />
    </div>

  )
}
