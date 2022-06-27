import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__show">
                this is footer
            </div>
            <input placeholder='write your word'/>
            <input className="footer__code" placeholder='code'/>
            <button>
                copy
            </button>
        </div>
    )
}
//<button className="footer__copy">
export default Footer;