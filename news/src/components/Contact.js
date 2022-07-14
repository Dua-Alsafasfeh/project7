import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.css';




// npm i @emailjs/browser to run the form functionality

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2qdh9jb', 'template_g2qjhx4', form.current, 'FygekewmDWaC0As1M')
      .then((result) => {


        document.getElementById("alert").style.display = "block";
        console.log(result.text);
        console.log("message sent");
        e.target.reset();

      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>

      <div className='contactstyle'>
        <div class="container">
          <div class="row">
            <div class="col-md-10 top">

              <ol class="breadcrumb">
                <li><a href="#">Home</a></li>
                <li class="active">Contact Us</li>
              </ol>
               <div id="alert" className="alert alert-success" role="alert" style={{ display: 'none' }}>
              <p class="alert-heading">Thank you For Contacting Us</p>
            </div>
              <h1 class="page-title">Contact Us</h1>
              <p class="page-subtitle">We hear you</p>
              <div class="line thin"></div>
              <div class="page-description">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <h3>Contact</h3>
                    <p>
                      Please feel free to contact us if you have any enquiry, via telephone, email or by filling out the enquiry form below.
                    </p>
                    <p>
                      Phone: <span class="bold">+962771567829</span> <br />
                      Email: <span class="bold">globalnews@gamil.com</span>
                      <br />
                      <br />
                      Salah Aldeen Street<br />
                      Jordan, Aqaba
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8 col-sm-6">


                    <form class="row contact" id="contact-form" ref={form} onSubmit={sendEmail}>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Name <span class="required"></span></label>
                          <input type="text" class="form-control" name="user_name" required />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email <span class="required"></span></label>
                          <input type="email" class="form-control" name="user_email" required />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Your message <span class="required"></span></label>
                          <textarea class="form-control" name="message" required></textarea>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <button class="btn btn-primary" type='submit' value="send">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Contact;