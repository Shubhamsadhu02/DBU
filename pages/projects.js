import Image from 'next/image'
import Link from 'next/link'
import Header from '../src/components/Header'

export default function Projects() {

    const cards=[
        {
            "title": "Spayee",
            "description": "Edtech • Branding • Website",
            "image": "/images/projects/spayee.png",
            "link": "/projects/spayee",
            "backgroundColor": "spayee-bg"
        },
        {
            "title": "Finshots",
            "description": "Financial News Application • Branding ",
            "image": "/images/projects/finshots.png",
            "link": "/projects/finshots",
            "backgroundColor": "finshots-bg"
        },
        {
            "title": "Dybo",
            "description": "AR Product • Branding • UI/UX Design ",
            "image": "/images/projects/dybo.png",
            "link": "/projects/dybo",
            "backgroundColor": "dybo-bg"
        },
        {
            "title": "Rain Pay",
            "description": "Fintech • Digital Ads • Website Design",
            "image": "/images/projects/Rain.png",
            "link": "/projects/rain",
            "backgroundColor": "rain-pay-bg"
        },
        {
            "title": "Eynetech",
            "description": "IT Industry • Branding • Website Design",
            "image": "/images/projects/Eyntech.png",
            "link": "/projects/eynetech",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Bakul Fresh",
            "description": "Agritech Product • Branding • UI/UX Design",
            "image": "/images/projects/bakul.png",
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
            "link": "/projects/fredo",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Logofolio 3",
            "description": "2020",
            "image": "/images/projects/Logofolio3.png",
            "link": "/projects/logofolio-3",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Box File",
            "description": "IT Industry • Brand Identity • Branding • Website Design",
            "image": "/images/projects/Boxfile.png",
            "link": "/projects/boxfile",
            "backgroundColor": "eyentech-bg"
        },
        {
            "title": "Crictracker",
            "description": "Collaboration with the leading cricket news website",
            "image": "/images/projects/Crictracker.png",
            "link": "/projects/cricktracker",
            "backgroundColor": "bakul-bg"
        },
        {
            "title": "Andy",
            "description": "Block chain Based Platform • Brand Identity • Branding ",
            "image": "/images/projects/andy.png",
            "link": "/projects/andy",
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
            "backgroundColor": "eyentech-bg"
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
            "backgroundColor": "eyentech-bg"
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
                                                <Link href={ele.link}><div className={`product-wrapper ${ele.backgroundColor}`}>
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
        </div>
    )
}
