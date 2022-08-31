import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';
// import {Link} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Container} from "react-bootstrap";

export default function Header(props) {
    const isWhite = props.isWhite ?? false;
    const router = useRouter();

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
        // {
        //     title: 'Blog',
        //     link: '/blog'
        // },
        {
            title: 'Contact',
            link: '/contact'
        },
        
    ]
    return (
        <>
        {/* style={{background: isWhite ? 'linear-gradient(154.88deg, #131b1b 46.45%, #122322 103.51%)' : '#FFFFFF'}} */}
        <Navbar key='md' expand='md'  style={{zIndex: "1000"}}>
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
                        <Nav className="menu justify-content-end flex-grow-1" >
                        <ul>
                            {
                                
                                menuItems.map(item => {
                                    
                                    return <li><Link href={item.link}>
                                        <a className={router.pathname == `${item.link}` ? `${isWhite ? 'activewhite': 'activeblack'}` : ""}>
                                            {item.title}
                                            </a>
                                            </Link></li>
                                })
            
                            }
                             </ul>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
    )
}
