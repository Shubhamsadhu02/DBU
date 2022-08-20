import React from 'react'

import Link from 'next/link'
// import {Link} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Container} from "react-bootstrap";

export default function Header(props) {
    const isWhite = props.isWhite ?? false;

    const menuItems = [
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Projects',
            link: '/projects'
        },
        {
            title: 'Clientele',
            link: '/clients'
        },
        // {
        //     title: 'Shop',
        //     link: '/shop'
        // },
        {
            title: 'Blog',
            link: '/blog'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        
    ]
    return (
        <>
        <Navbar key='md' expand='md'  style={{background: isWhite ? 'linear-gradient(154.88deg, #131b1b 46.45%, #122322 103.51%)' : '#FFFFFF'}}>
            <Container>
                <Navbar.Brand href="/"><img src={isWhite ? '/images/logowhite.svg': '/images/logoblack.svg'}
                                            height={36} width={170}/></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="menu justify-content-center flex-grow-1 pe-3" >
                            {
                                menuItems.map(item => {
                                    
                                    return <Link href={item.link} className="nav-link">{item.title}</Link>
                                })
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>

        
        // <header>
        //     <Head>
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>
        //     <div className="container">
        //         <div className="nav-bar">
        //             <Link href="/" className="DP"><a><Image src="/images/logo.png" height={36} width={170} /></a></Link>
        //             <div className="toggle" />
        //             <ul className="menu">
        //                 <li>
        //                     <Link href='/about'><a>About</a></Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/projects">Projects</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/clients">Clientele</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/shop">Shop</Link>
        //                 </li>
        //                 {/* <li>
        //                     <Link href="#">Blog</Link>
        //                 </li> */}
        //                 <li>
        //                     <Link href="/Contact">Contact</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </header>

    )
}
