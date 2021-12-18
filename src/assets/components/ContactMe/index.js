import React, { useState } from 'react';
import '../../css/contactme.css';
import {validemail, validname, validphone, validtext} from '../../../utils/validation';

function ContactMe() {
    const [userFormData, setUserFormData] = 
        useState({ name: '', email: '', phone: '', message: '' });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone, message} = userFormData;
        const namelabel = document.getElementById('namelabel');
        const email_label = document.getElementById('email_label');
        const phonelabel = document.getElementById('phonelabel');
        const messagelabel = document.getElementById('messagelabel');
        const error = document.getElementById('error');
        let flag = 0; 
        
        if(!validname(name)) {
            namelabel.classList.add('input_error');
            flag++;
        } else {
            namelabel.classList.remove('input_error');
        }

        if(!validemail(email)) {
            email_label.classList.add('input_error');
            flag++;
        } else {
            email_label.classList.remove('input_error');
        }

        if(!validphone(phone)) {
            phonelabel.classList.add('input_error');
            flag++;
        } else {
            phonelabel.classList.remove('input_error');
        }

        if(!validtext(message)) {
            messagelabel.classList.add('input_error');
            flag++;
        } else {
            messagelabel.classList.remove('input_error');
        }

        if(flag !== 0) {
            error.textContent = '*Data is required!';
            return 
        }
        
        setUserFormData({
            name: '',
            email: '',
            phone: '',
            message:''
          });

          document.getElementById('contact-form').reset();
          error.textContent = '';
    }



    return (
        <section id='contact-section' className='space nowrap'>           
            <h2 id='contact' className='title'>Contact Me</h2>
            <form id='contact-form' className='seperate' onSubmit={handleFormSubmit}>
                <label id='namelabel' htmlFor='name'>*Enter your Name:</label>
                <input type='text' name='name' placeholder='Name' onChange={handleInputChange}></input>
                <label id='email_label' htmlFor='email'>*Enter your email address:</label>
                <input type='text' name='email' placeholder='Email Address' onChange={handleInputChange}></input>
                <label id='phonelabel' htmlFor='phone'>*Enter a telephone number:</label>
                <input type='text' name='phone' placeholder='Phone Number' onChange={handleInputChange}></input>
                <label id='messagelabel' htmlFor='message'>*Contact Reason:</label>
                <textarea type='text' name='message' placeholder='Message' onChange={handleInputChange}></textarea>
                <p id='error'></p>
                <button 
                type='submit'
                >Submit
                </button>
            </form>
        </section>
    );
};

export default ContactMe;