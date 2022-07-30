import Image from 'next/image';
import React from 'react'

export default function Banner({ background, title, subtitle=null, image=null }) {
    // console.log(background);
    return (
        <section style={{ background}}>
            <div className="project-header">
                <div className="container project-header--intro">
                    <h1>{title}</h1>
                    {subtitle?<p>Branding • UI/UX</p>:''}
                </div>
                {image?
                <div className="project-banner-container">
                    <Image className='project-banner' src={image} height={256} width={510} />
                </div>
                :''
                }
            </div>
        </section>
    )
}
