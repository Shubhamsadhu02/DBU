import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Brands from '../src/components/Brands'
import Header from '../src/components/Header'
import Testimonial from '../src/components/Testimonial'

export default function Home() {
  return (
    <main>
      <Head>
        <title>DBU | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="explore" style={{height: "840px"}}></div>
      <Header isWhite={true} />
      <section className="position-relative" style={{padding: "200px 240px 280px 240px", zIndex: "1000"}}>
        <div className="container-fluid">
          <div className="building text-center">
            <h1>Building the Future</h1>
            <p className="text-center" style={{width: "650px"}}>We design digital experiences to create an impactful modern identity that transform businesses and customer lives</p>
            <a href='#' className="box">Explore Our Universe</a>
          </div>
        </div>
      </section>

      <section className='my-120'>
        <div className="container">
          <div className="work">
            <h2>Our Works</h2>
            <p className='col-md-6'>Our team of innovative thinkers and UI UX experts build results driven and user-centric designs. The work we do makes a difference, and it is this difference that drives us</p>
          </div>
          <div className="work-box">
            <div className='row' style={{rowGap: "2rem"}}>
              <div className='col-sm-12 col-md-6 col-lg-6'>
                <Link href="/projects/spayee">
                  <div className="product-wrapper spayee-bg">
                    <div className="box-bg" style={{background: "url('/images/index/spayee.png')"}}>
                      <div className="product-wrapper--text">
                        <Link href="/projects/spayee"><a><h2 className='product-wrapper--title'>Spayee</h2></a></Link>
                        <p className='product-wrapper--subtitle'>Branding & website design for an edutech startup</p>
                      </div>
                    </div> 
                  </div>
                </Link>
              </div>
            
              <div className='col-sm-12 col-md-6 col-lg-6'>
                <Link href="/projects/finshots">
                  <div className="product-wrapper finshots-bg">
                    <div className="box-bg" style={{background: "url('/images/index/finshots.png')"}}>
                      <div className="product-wrapper--text">
                        <Link href="/projects/finshots"><a><h2 className='product-wrapper--title'>Finshots</h2></a></Link>
                        <p className='product-wrapper--subtitle'>Brand identity for a financial short news application</p>
                      </div>
                    </div> 
                  </div>
                </Link>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <Link href="/projects/dybo">
                  <div className="product-wrapper finshots-bg">
                    <div className="box-bg" style={{background: "url('/images/index/dybo.png')"}}>
                      <div className="product-wrapper--text">
                        <Link href="/projects/dybo"><a><h2 className='product-wrapper--title'>Dybo</h2></a></Link>
                        <p className='product-wrapper--subtitle'>Branding, UI/UX &amp; icon designs for an AR product</p>
                      </div>
                    </div> 
                  </div>
                </Link>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <Link href="/projects/rain">
                  <div className="product-wrapper finshots-bg">
                    <div className="box-bg" style={{background: "url('/images/index/rain.png')"}}>
                      <div className="product-wrapper--text">
                        <Link href="/projects/rain"><a><h2 className='product-wrapper--title'>Rain Pay</h2></a></Link>
                        <p className='product-wrapper--subtitle'>Landing page &amp; digital ads for US based fintech product</p>
                      </div>
                    </div> 
                  </div>
                </Link>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <Link href="/projects/eynetech">
                  <div className="product-wrapper eyentech-bg">
                    <div className="box-bg" style={{background: "url('/images/index/eyentech.png')"}}>
                      <div className="product-wrapper--text">
                        <Link href="/projects/eynetech"><a><h2 className='product-wrapper--title'>Eynetech</h2></a></Link>
                        <p className='product-wrapper--subtitle'>Branding &amp; website design for an IT industry</p>
                      </div>
                    </div> 
                  </div>
                </Link>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <Link href="/projects/bakul-fresh">
                  <div className="product-wrapper bakul-bg">
                    <div className="box-bg" style={{background: "url('/images/index/bakul.png')"}}>
                      <div className="product-wrapper--text">
                        <Link href="/projects/bakul-fresh"><a><h2 className='product-wrapper--title'>Bakul Fresh</h2></a></Link>
                        <p className='product-wrapper--subtitle'>Brand identity &amp; app design for an agritech product</p>
                      </div>
                    </div> 
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="view-all">
          <a href='/projects'>
          <button type='submit'>View All</button></a>
        </div>
      </section>

      <section className="whatwedobg my-140">
        <div className="container">
          <div className="whatwedo">
            <div className="todo">
              <h2>What we do?</h2>
            </div>
            <div className="row whatwedo-lists">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <img src="vector/Group.png" />
                <h2>Branding</h2>
                <div className="vertical-line">
                  <h3>Brand Identity</h3>
                  <h3>Icons &amp; Illustrations</h3>
                  <h3>Verbal Identity</h3>
                  <h3>Packaging</h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <img src="vector/Group (2).png" />
                <h2>UX/UI</h2>
                <div className="vertical-line">
                  <h3>Research &amp; Analysis</h3>
                  <h3>Wireframing</h3>
                  <h3>User Interface</h3>
                  <h3>Prototyping</h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <img src="vector/Group (3).png" />
                <h2>Development</h2>
                <div className="vertical-line">
                  <h3>Website</h3>
                  <h3>Mobile Apps</h3>
                  <h3>Web Apps</h3>
                  <h3>Maintenance</h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <img src="vector/Group (6).png" />
                <h2>Marketing</h2>
                <div className="vertical-line">
                  <h3>Brochure &amp; Emailers</h3>
                  <h3>Pitch Deck &amp; Presentation</h3>
                  <h3>Social Media</h3>
                  <h3>Print Ads</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brands />

      
      <Testimonial />
      <section>
        <div className="container">
          <div className="social-media">
            <ul>
              <Link href="https://www.linkedin.com/in/designerbanda/"><li className='linked-in'><a href="#">Linked-in</a></li></Link>
              <Link href="https://www.instagram.com/designer.banda/"><li className='instagram'><a href="#">Instagram</a></li></Link>
              <Link href="https://www.behance.net/DesignerBanda"><li className='behance'><a href="#">Behance</a></li></Link>
              <Link href="https://www.facebook.com/designer.bandaa/"><li className='facebook'><a href="#">Facebook</a></li></Link>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
