import Image from 'next/image';
import React from 'react'

export default function Banner({ background, title, subtitle=null, image=null }) {
    // console.log(background);
    return (
        <section style={{ background, height: "316px"}}>
            <div className="container">
                <div className="project-header">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 d-flex align-items-center">
                            <div className="project-header--intro">
                                <h1>{title}</h1>
                                {subtitle?<p>Branding • UI/UX</p>:''}
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            {image?
                                <div className="project-banner-container d-flex">
                                    <Image className='project-banner' src={image} alt='' height={256} width={510} />
                                </div>
                            :''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
