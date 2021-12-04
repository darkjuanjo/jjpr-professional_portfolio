import React from 'react';
import '../../css/contactme.css';


function ContactMe() {
    return (
        <section className='space nowrap'>           
            <h2 id='contact' className='title'>Contact Me</h2>
            <form className='seperate'>
                <label htmlFor='name'>Enter your Name:</label>
                <input type='text' name='name' placeholder='Name'></input>
                <label htmlFor='email'>Enter your email address:</label>
                <input type='text' name='email' placeholder='Email Address'></input>
                <label htmlFor='phone'>Enter a telephone number:</label>
                <input type='text' name='phone' placeholder='Phone Number'></input>
                <label htmlFor='message'>Contact Reason:</label>
                <textarea type='text' name='message' placeholder='Message'></textarea>
                <p id='error'>Error</p>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default ContactMe;