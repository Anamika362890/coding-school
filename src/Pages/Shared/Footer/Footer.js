import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer text-center p-5 stick-bottom'>

            <h2>You Can Find Us At</h2>
            <ul className='social'>
                <a href='https://www.facebook.com/'><FaFacebook></FaFacebook></a>
                <a href='https://api.whatsapp.com/message'><FaWhatsapp></FaWhatsapp></a>
                <a href='https://twitter.com/'><FaTwitter></FaTwitter></a>
                <a href='https://github.com/login'><FaGithub></FaGithub></a>
            </ul>

            <p>Copyright @2022</p>


        </div>
    );
};

export default Footer;