import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {
    const showNav = props.showNav ?? true;

    return (
        <>
        {showNav ?
        <footer>
            <div className="container" style={{padding: "80px 0 20px 0"}}>
               
                    <div className="footer d-flex justify-content-between align-items-center">
                        <div className='footer-wrapper'>
                            <h1>Have an Idea?</h1>
                        </div>
                        <div className="icon">
                            <a href="https://www.facebook.com/designer.bandaa" target="framename"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                            <a href="https://twitter.com/DesignerBanda" target="framename"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href="https://www.instagram.com/designer.banda/" target="framename"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a href="https://www.linkedin.com/in/designerbanda/" target="framename"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                            <a href="https://dribbble.com/DesignerBanda" target="framename"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
                        </div>
                    </div>
                    <a href="#" className="box my-5">Let’s discuss</a>
                   
            
                <div className="copyright">
                    <hr />
                    <p>© 2021 DB Universe</p>
                </div>
            </div>
        </footer>
        :""}
        </>
    )
}
