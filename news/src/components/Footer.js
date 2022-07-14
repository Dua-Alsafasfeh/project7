import React from 'react';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="block">
              {/* <h1 className="block-title">Company Info</h1> */}
              <div className="block-body">
                <figure className="foot-logo">
                  <img
                    src="images/footerlogo.png"
                    className="img-responsive mt-5"
                    alt="Logo"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="block">
              <h1 className="block-title">
                Pages
                <div className="right" />
              </h1>
              <div className="block-body mt-5">
                <Link to="/Home">
                  <a href="page.html" className="btn btn-magz white">
                    Home <i className="ion-ios-arrow-thin-right" />
                  </a>
                </Link>
                <Link to="/About">
                  <a href="page.html" className="btn btn-magz white">
                    About Us <i className="ion-ios-arrow-thin-right" />
                  </a>
                </Link>
                <Link to="/Contact">
                  <a href="page.html" className="btn btn-magz white">
                    Contact Us <i className="ion-ios-arrow-thin-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 col-sm-6">
            <div className="block">
              <h1 className="block-title">Follow Us</h1>
              <div className="block-body">
                <p>Follow us and stay in touch to get the latest news</p>
                <ul className="social trp">
                  <li>
                    <a href="https://www.facebook.com/cnninternational" target={'_blank'} className="facebook">
                      <svg>
                        <rect width={0} height={0} />
                      </svg>
                      <i className="ion-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/cnni" target={'_blank'} className="twitter">
                      <svg>
                        <rect width={0} height={0} />
                      </svg>
                      <i className="ion-social-twitter-outline" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/aljazeerachannel" target={'_blank'} className="youtube">
                      <svg>
                        <rect width={0} height={0} />
                      </svg>
                      <i className="ion-social-youtube-outline" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/asharqnews/" target={'_blank'} className="linkedin">
                      <svg>
                        <rect width={0} height={0} />
                      </svg>
                      <i className="ion-social-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/aljazeera.net/" target={'_blank'} className="instagram">
                      <svg>
                        <rect width={0} height={0} />
                      </svg>
                      <i className="ion-social-instagram-outline" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="line" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              COPYRIGHT © Global News. ALL RIGHT RESERVED.
              <div>
                Made with <i className="ion-heart" /> by{" "}
                <a href="http://kodinger.com">Orange Coding Academy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;