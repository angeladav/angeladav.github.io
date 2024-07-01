import '../styling/Contact.css'
import { useState } from 'react';

function sendMail(subject, content) {
    console.log(subject);
    console.log(content);
    const link = "mailto:angeladavis2024@u.northwestern.edu"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(content)
        ;
    console.log(link)

    window.location.href = link;
}

function Contact() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='contact'>
            <div className='contact-title'> Contact Me </div>
            <div className='contact-regular-text'> Have any questions, comments, or concerns? Feel free to send me an email here! </div>
            <form className='contact-form' onSubmit={(e) => {
                e.preventDefault();
                sendMail(subject, message);
                setSubject('');
                setMessage('');
            }}>
                <textarea rows="1" className='contact-email' placeholder="Subject" value={subject}
                    onChange={(e) => setSubject(e.target.value)} />
                <textarea rows="5" className='contact-message' placeholder="Write your message here!" value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                <button className='contact-submit-button' type="submit"> Send Message </button>
            </form>
        </div>
    )
}

export default Contact;
