import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../src/components/Header'

export default function Projects() {

    const cards=[
        {
            "title": "Spayee",
            "description": "Edtech • Branding • Website",
            "image": "/images/index/spayee.png",
            "link": "/projects/spayee",
            "backgroundColor": "spayee-bg"
        },
        {
            "title": "Finshots",
            "description": "Financial News Application • Branding ",
            "image": "/images/index/finshots.png",
            "link": "/projects/finshots",
            "backgroundColor": "finshots-bg"
        },
        {
            "title": "Dybo",
            "description": "AR Product • Branding • UI/UX Design ",
            "image": "/images/index/dybo.png",
            "link": "/projects/dybo",
            "backgroundColor": "dybo-bg"
        },
        {
            "title": "Rain Pay",
            "description": "Fintech • Digital Ads • Website Design",
            "image": "/images/index/rain-pay.png",
            "link": "/projects/rain",
            "backgroundColor": "rain-pay-bg"
        },
        {
            "title": "Eynetech",
            "description": "IT Industry • Branding • Website Design",
            "image": "/images/index/eyentech.png",
            "link": "/projects/eynetech",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Bakul Fresh",
            "description": "Agritech Product • Branding • UI/UX Design",
            "image": "/images/index/bakul.png",
            "link": "/projects/bakul-fresh",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Battle XO",
            "description": "Gaming Industry • Web App • UI/UX Design",
            "image": "/images/projects/Battlexo.png",
            "link": "/projects/battle-xo",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Fredo",
            "description": "News App • Brand Identity • Website & App Design",
            "image": "/images/projects/fredo.png",
            "link": "/projects/",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Logofolio 3",
            "description": "2020",
            "image": "/images/projects/Logofolio3.png",
            "link": "/projects/logofolio-3",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Box File",
            "description": "IT Industry • Brand Identity • Branding • Website Design",
            "image": "/images/projects/Boxfile.png",
            "link": "/projects/boxfile",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Crictracker",
            "description": "Collaboration with the leading cricket news website",
            "image": "/images/projects/Crictracker.png",
            "link": "/projects/cricktracker",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Andy",
            "description": "Block chain Based Platform • Brand Identity • Branding ",
            "image": "/images/projects/andy.png",
            "link": "/projects/",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Namalama",
            "description": "Alcohol Brand • Branding • Packaging Design",
            "image": "/images/projects/Namalama.png",
            "link": "/projects/namalama",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Logofolio 2",
            "description": "2019",
            "image": "/images/projects/Logofolio2.png",
            "link": "/projects/logofolio-2",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Windo",
            "description": "E-Commerce • Branding • UI/UX Design",
            "image": "/images/projects/Windo.png",
            "link": "/projects/windo",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Haituz",
            "description": "Edutech • Brand Identity • Website Design",
            "image": "/images/projects/Haituz.png",
            "link": "/projects/haituz",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Logofolio 1",
            "description": "2018",
            "image": "/images/projects/Logofolio1.png",
            "link": "/projects/logofolio-1",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Print Ads",
            "description": "Minimal Print Ads",
            "image": "/images/projects/Printads.png",
            "link": "/projects/print-ads",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Intellia",
            "description": "IT Start up • Brand Identity • Website Design",
            "image": "/images/projects/Intelia.png",
            "link": "/projects/intelia",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Edulil",
            "description": "Kids E-Platform • Brand Identity • Website Design",
            "image": "/images/projects/Edulil.png",
            "link": "/projects/edulil",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Vedose",
            "description": "E-Pharma • Branding • Website Design",
            "image": "/images/projects/Vedose.png",
            "link": "/projects/vedose",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Josh",
            "description": "Brand identity for a social community",
            "image": "/images/projects/josh_girl.png",
            "link": "/projects/josh",
            "backgroundColor": "bakul-bg"
        },
    ]

    return (
        <div>
            <Head>
                <title>DBU | Projects</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Header/>
            <section className='projects-section' style={{padding: "100px 230px"}}>
                <div className="container-fluid">
                    <div className="crafting text-center">
                        <h2>Crafting Industries</h2>
                        <p style={{width: "515px"}}>We provide our clients with a fresh approach and bring innovation to their challenges.</p>
                        {/* <ul>
                            <li className="active"><a href="#">ALL</a></li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">UI/UX</a></li>
                            <li><a href="#">Advertising</a></li>
                        </ul> */}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                   
                    <div className="work-box" style={{marginBottom: "10rem"}}>
                        <div className='row' style={{rowGap: "2rem"}}>
                            {
                                cards.map((ele) => {
                                    return <div className='col-sm-12 col-md-6 col-lg-6'>
                                                <Link href={ele.link}><div className="product-wrapper finshots-bg">
                                                    <div className="box-bg" style={{background: `url(${ele.image})`}}>
                                                        <div className="product-wrapper--text">
                                                            <Link href={ele.link}><a><h2 className='product-wrapper--title'>{ele.title}</h2></a></Link>
                                                            <p className='product-wrapper--subtitle'>{ele.description}</p>
                                                        </div>
                                                    </div> 
                                                </div></Link>
                                            </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>


            {/* <section>
                <div className="container">
                   
                    <div className="work-box" style={{marginBottom: "10rem"}}>
                        <div className='row' style={{rowGap: "2rem"}}>
                            <div className='col-md-6 col-lg-6 spayee-bg'>
                                <div className="product-wrapper" style={{background: "url('/images/index/spayee.png')"}}>
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/spayee" ><a><h2 className='product-wrapper--title'>Spayee</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Branding &amp; website design for an edutech startup</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper finshots-bg">
                                    <div className="box-bg" style={{background: "url('/images/index/finshots.png')"}}>
                                        <div className="product-wrapper--text">
                                            <Link href="/projects/finshots"><a><h2 className='product-wrapper--title'>Finshots</h2></a></Link>
                                            <p className='product-wrapper--subtitle'>Brand identity for a financial short news application</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper dybo-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/dybo"><a><h2 className='product-wrapper--title'>Dybo</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Branding, UI/UX &amp; icon designs for an AR product</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/dybo"><a><Image src="/images/index/dybo.png" width={486} height={450} layout="responsive" /></a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper rain-pay-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/rain"><a><h2 className='product-wrapper--title'>Rain Pay</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Landing page &amp; digital ads for US based fintech product</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/rain"><a><Image src="/images/index/rain-pay.png" width={486} height={450} layout="responsive" /></a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/eynetech"><a><h2 className='product-wrapper--title'>Eynetech</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Branding &amp; website design for an IT industry</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/eynetech"><a><Image src="/images/index/eyentech.png" width={486} height={450} layout="responsive" /></a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/bakul-fresh"><a><h2 className='product-wrapper--title'>Bakul Fresh</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity &amp; app design for an agritech product</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/bakul-fresh"><a>
                                        <Image src="/images/index/bakul.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/battle-xo"><a><h2 className='product-wrapper--title'>Battle XO</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Web application for a gaming platform</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/battle-xo"><a><Image src="/images/projects/Battlexo.png" width={486} height={450} layout="responsive" /></a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/vedose"><a><h2 className='product-wrapper--title'>Vedose</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity, branding & website design for an
                                            E-pharma product</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/vedose"><a><Image src="/images/projects/Vedose.png" width={486} height={450} layout="responsive" /></a></Link>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/logofolio-3"><a><h2 className='product-wrapper--title'>Logofolio 3</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>2020</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/logofolio-3"><a><Image src="/images/projects/Logofolio3.png" width={486} height={450} layout="responsive" /></a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/boxfile"><a><h2 className='product-wrapper--title'>Box File</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity &amp; Website for an IT industry</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/boxfile"><a><Image src="/images/projects/Boxfile.png" width={486} height={450} layout="responsive" /></a></Link>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/cricktracker"><a><h2 className='product-wrapper--title'>Crictracker</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Collaboration with the leading cricket news website</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/cricktracker"><a>
                                        <Image src="/images/projects/Crictracker.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/josh"><a><h2 className='product-wrapper--title'>Josh</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity for a social community</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/josh"><a>
                                        <Image src="/images/projects/josh_ai.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/namalama"><a><h2 className='product-wrapper--title'>Namalama</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity &amp; packaging for an alcohol brand</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/namalama"><a>
                                        <Image src="/images/projects/Namalama.png" width={500} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/logofolio-2"><a><h2 className='product-wrapper--title'>Logofolio 2</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>2019</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/logofolio-2"><a>
                                        <Image src="/images/projects/Logofolio2.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/windo"><a><h2 className='product-wrapper--title'>Windo</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity & UI/UX for an E-commerce platform</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/windo"><a>
                                        <Image src="/images/projects/Windo.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg ps-0">
                                    <div className="product-wrapper--text" style={{paddingLeft: '40px'}}>
                                        <Link href="/projects/haituz"><a><h2 className='product-wrapper--title'>Haituz</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity & website for edutech startup</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/haituz"><a>
                                        <Image src="/images/projects/Haituz.png" width={550} height={450} layout="responsive" objectFit='cover' />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/logofolio-1"><a><h2 className='product-wrapper--title'>Logofolio 1</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>2018</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/logofolio-1"><a>
                                        <Image src="/images/projects/Logofolio1.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/edulil"><a><h2 className='product-wrapper--title'>Edulil</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Brand identity & website for E-learning platform for kids</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/edulil"><a>
                                        <Image src="/images/projects/Edulil.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/intelia"><a><h2 className='product-wrapper--title'>Intellia</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Branding & website for a germany based IT startup</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/intelia"><a>
                                        <Image src="/images/projects/Intelia.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/print-ads"><a>
                                        <h2 className='product-wrapper--title'>Print Ads</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>From Branding to mobile application</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/print-ads"><a>
                                        <Image src="/images/projects/Printads.png" width={486} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper eyentech-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/"><a>
                                        <h2 className='product-wrapper--title'>Fredo</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>News App • Brand Identity • Website & App Design </p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/"><a>
                                        <Image src="/images/projects/fredo.png" width={550} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="product-wrapper bakul-bg">
                                    <div className="product-wrapper--text">
                                        <Link href="/projects/"><a>
                                        <h2 className='product-wrapper--title'>Andy</h2></a></Link>
                                        <p className='product-wrapper--subtitle'>Block chain Based Platform • Brand Identity • Branding</p>
                                    </div>
                                    <div className="content">
                                    <Link href="/projects/"><a>
                                        <Image src="/images/projects/andy.png" width={550} height={450} layout="responsive" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
