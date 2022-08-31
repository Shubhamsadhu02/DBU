import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";

import Header from '../src/components/Header';


export default function Contact(props) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        console.log(event.target);
        const formData = new FormData(event.target);
        for (var [key, value] of formData.entries()) {
            console.log(key, value);
        }
        setSubmitted(true);
        event.preventDefault();
        return false;
    }
    return (
        <main>
        <div className="explore explore3" style={{height: "115vh"}}></div>
        <Header isWhite={true} />
        <section className="explore-top__section1 position-relative" style={{padding: "25px 60px 0", zIndex: "1000"}}>
        <div className="contactus">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="contact-description-wrapper">
                            <h2>Contact Us</h2>
                            <p style={{width: "378px", paddingTop: "1rem"}}>
                                Deep strategic thoughts, Countless conversations, and a lot of emotions with the superpower of turning your ideas into unforgettable companies.
                                <br/>
                                Sounds intriguing?
                            </p>
                            <h6 className='mt-5'>Reach out to us</h6>
                            <p><a href="mailto:hello@dbuniverse.com" target="_blank" rel="noreferrer">hello@dbuniverse.com</a></p>
                        
                            <div className="icon" style={{marginTop: "10rem"}}>
                            <a href="https://www.facebook.com/designer.bandaa" target="framename" ><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                            <a href="https://twitter.com/DesignerBanda" target="framename"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href="https://www.instagram.com/designer.banda/" target="framename"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a href="https://www.linkedin.com/in/designerbanda/" target="framename"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                            <a href="https://dribbble.com/DesignerBanda" target="framename"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
                        </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="contactus--form">
                            <div className="success-message" style={{zIndex:submitted?2:0, display:submitted?'block':'none'}}>
                                <span className='form-reset' onClick={() => setSubmitted(false)}>
                                <Image className="mx-auto" src="/images/contact/complete.svg" alt="" height="64px" width="64px" layout={"intrinsic"} /></span>
                                <h3 style={{color: "#FAFAFA"}}>Form has been submitted successfully!</h3>
                                <p>We will be back to you very soon...</p>
                            </div>
                            <form method="post" action="/" onSubmit={handleSubmit} style={{zIndex:submitted?0:2, display:submitted?'none':'block'}}>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" placeholder="Full Name" name="name" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder="username@gmail.com" name="email" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Message</label>
                                    <textarea type="text" className="form-control" placeholder="Tell us something about your project....." rows={4} name="message" required></textarea>
                                </div>
                                <div className="form-group text-end">
                                    <button type="submit" className="submit-btn">Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </section>

        </main>
    );
}