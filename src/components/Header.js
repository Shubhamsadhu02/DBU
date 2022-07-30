import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className="nav-bar">
                    <Link href="/" className="DP"><a><Image src="/images/logo.png" height={36} width={170} /></a></Link>
                    <div className="toggle" />
                    <ul className="menu">
                        <li>
                            <Link href='/about'><a>About</a></Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/clients">Clientele</Link>
                        </li>
                        <li>
                            <Link href="/shop">Shop</Link>
                        </li>
                        {/* <li>
                            <Link href="#">Blog</Link>
                        </li> */}
                        <li>
                            <Link href="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}
