import React from 'react'

function Contact() {
	return (
		<>
		<div>
  <div className="container">
    <div className="row">
      <div className="col-md-10 top">
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">Contact Us</li>
        </ol>
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We hear you</p>
        <div className="line thin" />
        <div className="page-description">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h3>Contact</h3>
              <p>
                Please feel free to contact us if you have any enquiry, via
                telephone, email or by filling out the enquiry form below.
              </p>
              <p>
                Phone: <span className="bold">+962771567829</span> <br />
                Email: <span className="bold">globalnews@gamil.com</span>
                <br />
                <br />
                Salah Aldeen Street
                <br />
                Jordan, Aqaba
              </p>
            </div>
            <div className="col-md-6 col-sm-6">
              <form className="row contact" id="contact-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Name <span className="required" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Email <span className="required" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>
                      Your message <span className="required" />
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary">Send Message</button>
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

export default Contact