import Layout from "./layout";
import "../style/Contact.css";

function Contact() {
    return (
        <div className="static-page">
            <Layout />
            <h2 className="contact-title title">Let's Connect!</h2>
            <div className="contact-page">
                <div className="contact-bg">
                <div className="contact-card">
                    <form action="mailto:javonh@uw.edu?subject=Let's Connect!"
                    method="POST" encType="text/plain" name="EmailForm">
                        <div className="contact-name">
                            <div className="contact-fname">
                                <label htmlFor="fname">First Name</label>
                                <br />
                                <input type="text" id="fname" name="First Name" required/>
                            </div>
                            <div className="contact-lname">
                                <label htmlFor="lname">Last name</label>
                                <br />
                                <input type="text" id="lname" name="Last Name" required/>
                            </div>
                        </div>
                        <div className="contact-message">
                            <div className="contact-subject">
                                <label htmlFor="subject">Subject</label>
                                <br />
                                <input type="subject" id="subject" name="Subject" required/>
                            </div>
                            <br />
                            <label htmlFor="message">Message</label>
                            <br />
                            <textarea id="message" name="Message" required/>
                        </div>
                        <div className="contact-submit">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;