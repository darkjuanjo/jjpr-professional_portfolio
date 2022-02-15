import React from 'react';
import '../../css/footer.css';

function TheFooter(props) {
    return (
        <section id='footer' className='justify-center'>
        <a href="https://github.com/darkjuanjo" target="_blank" rel="noopener noreferrer">
            <img id='github'
            alt=''
            ></img>
        </a>
        <a  href="https://www.linkedin.com/in/jjpaz-1007/" target="_blank" rel="noopener noreferrer">
            <img id='linkedin'
            alt=''
            ></img>
        </a>
        <a  href="mailto:juanj.paz92@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img id='email'
            alt=''
            ></img>
        </a>
        <a  href="tel:+14422797075" target="_blank" rel="noopener noreferrer">
            <img id='phone'
            alt=''
            ></img>
        </a>
        </section>
       
    );
};

export default TheFooter;