import React from 'react';
import '../../css/me.css';


function Me() {
    return (
        <>
        <section className='justify-center space'>
            <img id='me'></img>
        </section>
        <section className='space nowrap'>           
            <h2 className='title'>About Me</h2>
            <p id='me-text'>
            Cybernetic Electronics Project Engineer with +4 years of experience in Skyworks Solutions. Inc
            Proficient in Java, C# and highly motivated to learn and improve current programming skills.
            Currently partaking in the UC Berkely Coding Bootcamp in order to learn Javascript, HTML, CSS,
            Node and other required programmming languages to become a full stack developer.
            </p>
        </section>
        </>
    );
};

export default Me;