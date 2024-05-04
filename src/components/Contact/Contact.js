import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b44d7f06-33e2-492d-ac28-920e4b66f6b0");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res)=> res.json());
    
        
    
        if (response.success) {
          console.log("Success",response);
          setResult(response.message);
          event.target.reset();
        } else {
          console.log("Error", response);
          setResult(response.message);
        }
      };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message<img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community. </p>
            <ul>
                <li><img src={mail_icon} alt="" />careership@nykinsky.com </li>
                <li><img src={phone_icon} alt="" />+91 9717698567</li>
                <li><img src={location_icon} alt="" />Noida,UP<br/>India</li>
            </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your  message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn sbtn'> Submit now   </button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact 

