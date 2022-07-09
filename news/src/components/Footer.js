import React from 'react';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-12 col-xs-12">
        <div className="block">
          <h1 className="block-title">Company Info</h1>
          <div className="block-body">
            <figure className="foot-logo">
              <img
                src="images/footerlogo.png"
                className="img-responsive"
                alt="Logo"
              />
            </figure>
            <p className="brand-description">
              Global New includes the most important daily,, weekly, and monthly
              news, exclusive and urgent news, in addition to containing many
              sections, which attracts the user’s interest and meets his needs.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="block">
          <h1 className="block-title">
            Pages
            <div className="right" />
          </h1>
          <div className="block-body ">
          {/* <Link to="/Home"> */}
            <a href="page.html" className="btn btn-magz white">
              Home <i className="ion-ios-arrow-thin-right" />
            </a>
            {/* </Link> */}
            <a href="page.html" className="btn btn-magz white">
              About Us <i className="ion-ios-arrow-thin-right" />
            </a>
            <a href="page.html" className="btn btn-magz white">
              Contact Us <i className="ion-ios-arrow-thin-right" />
            </a>
          </div>
          <div className="line" />
          <h1 className="block-title">
            News Category
            <div className="right" />
          </h1>
          <div className="block-body ">
            <ul className="tags">
              <li>
                <a href="#">Buisness</a>
              </li>
              <li>
                <a href="#">Sport</a>
              </li>
            </ul>
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
                <a href="#" className="facebook">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-twitter-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-youtube-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="googleplus">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-googleplus" />
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-instagram-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="tumblr">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-tumblr" />
                </a>
              </li>
              <li>
                <a href="#" className="dribbble">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-dribbble" />
                </a>
              </li>
              <li>
                <a href="#" className="linkedin">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" className="skype">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-skype" />
                </a>
              </li>
              <li>
                <a href="#" className="rss">
                  <svg>
                    <rect width={0} height={0} />
                  </svg>
                  <i className="ion-social-rss" />
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