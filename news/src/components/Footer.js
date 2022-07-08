import React from 'react';

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="block">
                            <h1 class="block-title">Company Info</h1>
                            <div class="block-body">
                                <figure class="foot-logo">
                                    <img src="images/logo.png" class="img-responsive" alt="Logo" />
                                </figure>
                                <p class="brand-description">
                                    Global New includes the most important daily,, weekly, and monthly news, exclusive and urgent news, in addition to containing many sections, which attracts the user’s interest and meets his needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="block">
                            <h1 class="block-title">Pages<div class="right"></div></h1>
                            <div class="block-body ">
                                <a href="page.html" class="btn btn-magz white">Home <i class="ion-ios-arrow-thin-right"></i></a>
                                <a href="page.html" class="btn btn-magz white">Account <i class="ion-ios-arrow-thin-right"></i></a>
                                <a href="page.html" class="btn btn-magz white">About Us <i class="ion-ios-arrow-thin-right"></i></a>
                                <a href="page.html" class="btn btn-magz white">Contact Us <i class="ion-ios-arrow-thin-right"></i></a>

                            </div>

                            <div class="line"></div>
                            <h1 class="block-title">News Category<div class="right"></div></h1>
                            <div class="block-body ">
                                <ul class="tags">
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Sport</a></li>
                                    <li><a href="#">Financial</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-12 col-sm-6">
                        <div class="block">
                            <h1 class="block-title">Follow Us</h1>
                            <div class="block-body">
                                <p>Follow us and stay in touch to get the latest news</p>
                                <ul class="social trp">
                                    <li>
                                        <a href="#" class="facebook">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="twitter">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-twitter-outline"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="youtube">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-youtube-outline"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="googleplus">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-googleplus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="instagram">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-instagram-outline"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="tumblr">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-tumblr"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dribbble">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="linkedin">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="skype">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-skype"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="rss">
                                            <svg><rect width="0" height="0" /></svg>
                                            <i class="ion-social-rss"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="line"></div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="copyright">
                            COPYRIGHT &copy; Global News. ALL RIGHT RESERVED.
                            <div>
                                Made with <i class="ion-heart"></i> by <a href="http://kodinger.com">Orange Coding Academy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;