import React from 'react';
import '../style/about.css';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
import Ads from './UserAds';
function About() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-md-9 col-sm-9 aboutstyle'>
            <section className="page">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <ol className="breadcrumb">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active">About Us</li>
                    </ol>
                    <h1 className="page-title text-left">About Us</h1>
                    <p className="page-subtitle">We will tell you who we are</p>
                    <div className="line thin" />
                    <div className="page-description">
                      <h4>Global News</h4>
                      <p>
                        Global News is an news website that includes the most important
                        daily, weekly, and monthly news, exclusive and urgent news, in
                        addition to containing many sections, which attracts the user’s
                        interest and meets his needs.
                      </p>
                      <p>
                        Global News is a very powerful medium of spreading information
                        among people. Information is a very vital thing as we need to know
                        what is happening around us. Also, awareness to the happenings at
                        our surrounding helps us in better planning and decision. Global
                        News are a great source of information that can be available at
                        home. Each and everyone must ensure to imbibe the habit of reading
                        newspapers in their lives. It is the Global News which ensures to
                        provide us accurate and verified information.
                      </p>
                      <div className="question">
                        Have a question?{" "}
                        <Link to="/Contact">
                          <a href="#" className="btn btn-primary">
                            Contact Us
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
          <div className='col-md-3 col-sm-3 '>
            <Ads />
          </div>
        </div>
        <hr/>
        <div className='row'>
          <div className='col-md-12 col-sm-12 '>
            <div classname="photostyle" >
              <section className="team text-center">
                <div className="container teamimg">
                  <div className="header my-5">
                    <h1 classname="page-title">Meet our Team </h1>
                    <p className="page-subtitle">Meet and Greet our Team Members</p>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-lg-4">
                      <div className="img-block mb-5">
                        <img
                          src="images/team-img/taebah.jpg"
                          className="img-fluid  img-thumbnail "
                          alt="image1"
                        />
                        <div className="content mt-2">
                          <h4>Taebah ALshlouh</h4>
                          <p className="text-muted">Full Stack Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 ">
                      <div className="img-block mb-5">
                        <img
                          src="images/team-img/samar.jpg"
                          width="{'95%'}"
                          className="img-fluid  img-thumbnail "
                          alt="image1"
                        />
                        <div className="content mt-2">
                          <h4> Samar Alkhamis</h4>
                          <p className="text-muted">Full Stack Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                      <div className="img-block mb-5">
                        <img
                          src="images/team-img/aya.png"
                          className="img-fluid  img-thumbnail "
                          alt="image1"
                        />
                        <div className="content mt-2">
                          <h4>Aya AlSawa</h4>
                          <p className="text-muted">Full Stack Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classname="row">
                    <div className="col-md-4 col-lg-6">
                      <div className="img-block mb-5">
                        <img
                          src="images/team-img/dyar.jpg"
                          className="img-fluid  img-thumbnail "
                          alt="image1"
                        />
                        <div className="content mt-2">
                          <h4>Dyar Alhoniti</h4>
                          <p className="text-muted">Product Owner</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-6">
                      <div className="img-block mb-5">
                        <img
                          src="images/team-img/duaa.jpeg"
                          className="img-fluid  img-thumbnail "
                          alt="image1"
                        />
                        <div className="content mt-2">
                          <h4>Dua'a ALsafasfeh </h4>
                          <p className="text-muted">Scrum Master</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>




    </>
  )
}

export default About;
