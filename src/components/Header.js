import React from 'react'

import Link from 'next/link'
// import {Link} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Container} from "react-bootstrap";

export default function Header(props) {
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
            title: 'Clients',
            link: '/clients'
        },
        {
            title: 'Shop',
            link: '/shop'
        },
        {
            title: 'Contact',
            link: '/Contact'
        },
        
    ]
    return (
        <>
        <Navbar key='md' expand='md'>
            <Container>
                <Navbar.Brand href="/"><img src='/images/logo.png'
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
