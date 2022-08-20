import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Header from '../src/components/Header'


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
            <Header isWhite={true} />
        <section className="explore" style={{padding: "50px 135px 0"}}>
        <div className="contactus">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
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
                            <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                            <a href="#"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
                        </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="contactus--form">
                            <div className="success-message" style={{zIndex:submitted?2:0}}>
                                <span className='form-reset' onClick={() => setSubmitted(false)}><FontAwesomeIcon icon={faChevronLeft} /></span>
                                <Image className="mx-auto" src="/images/contact/complete.svg" alt="" height="64px" width="64px" layout={"intrinsic"} />
                                <h3>Form has been submitted successfully!</h3>
                                <p>We will be back to you very soon...</p>
                            </div>
                            <form method="post" action="/" onSubmit={handleSubmit} style={{zIndex:submitted?0:2}}>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" placeholder="Full Name" name="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder="username@gmail.com" name="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Message</label>
                                    <textarea type="text" className="form-control" placeholder="Tell us something about your project....." rows={4} name="message"></textarea>
                                </div>
                                <div className="form-group text-end">
                                    <button type="submit" className="btn btn-outline-success">Submit</button>
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