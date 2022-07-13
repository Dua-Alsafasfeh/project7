import React from 'react';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
import '../style/category.css';
function Category() {
    return (
        <>
            <div className='catecontainer'>
                <div className="linestyle line container">
                    <div>Today News</div>
                </div>
                <div className="row container catestyle">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="row">
                            <article className="article col-md-12">
                                <div className="inner">
                                    <figure>
                                        <a href="single.html">
                                            <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sample Article" />
                                        </a>
                                    </figure>
                                    <div className="padding">
                                        <div className="detail">
                                            <div className="category">
                                                <a href="category.html">Buisness</a>
                                            </div>
                                        </div>
                                        <h2>
                                            <a href="single.html">
                                                Top business headlines in the US right now
                                            </a>
                                        </h2>
                                        <p>
                                            Business journalism is the part of journalism that tracks, records, analyzes and interprets the business, economic and financial activities and changes that take place in societies. Topics widely cover the entire purview of all commercial activities related to the economy.
                                        </p>
                                        <footer className='m-3'>
                                            <Link to="/Business">
                                                <a className="btn btn-primary more" href="single.html">
                                                    <div>More Details</div>
                                                    <div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </footer>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="row">
                            <article className="article col-md-12">
                                <div className="inner">
                                    <figure>
                                        <a href="single.html">
                                            <img src="https://images.pexels.com/photos/718952/pexels-photo-718952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sample Article" />
                                        </a>
                                    </figure>
                                    <div className="padding">
                                        <div className="detail">
                                            <div className="category">
                                                <a href="category.html">Sports</a>
                                            </div>
                                        </div>
                                        <h2>
                                            <a href="single.html">
                                                the latest headlines of sports news
                                            </a>
                                        </h2>
                                        <p>
                                            Sports journalism is a form of writing that reports on matters pertaining to sporting topics and competitions. Sports journalism started in the early 1800s when it was targeted to the social elite and transitioned into an integral part of the news business with newspapers having dedicated sports sections.
                                        </p>
                                        <footer className='m-3'>
                                            <Link to="/Sport">
                                                <a className="btn btn-primary more" href="single.html">
                                                    <div>More Details</div>
                                                    <div>
                                                        <i className="ion-ios-arrow-thin-right" />
                                                    </div>
                                                </a>
                                            </Link>
                                        </footer>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                {/* //////////another category */}
                <div className="row container catestyle">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="row">
                            <article className="article col-md-12">
                                <div className="inner">
                                    <figure>
                                        <a href="single.html">
                                            <img src="https://static.politico.com/76/00/5360d78146278d12e90379cdbfb5/https-delivery.gettyimages.com/downloads/1238834853" alt="Sample Article" />
                                        </a>
                                    </figure>
                                    <div className="padding">
                                        <div className="detail">
                                            <div className="category">
                                                <a href="category.html">Health</a>
                                            </div>
                                        </div>
                                        <h2>
                                            <a href="single.html">
                                                the latest headlines of Health news
                                            </a>
                                        </h2>
                                        <p>
                                            Health journalism is the dissemination of medical and health information and related subjects in the media. The heterogeneous domains of health journalism are reporting of health news, medical research and its publication, and health policies, programs, and their criticisms involving both print and digital media.
                                        </p>
                                        <footer className='m-3'>
                                            <Link to="/Health">
                                                <a className="btn btn-primary more" href="single.html">
                                                    <div>More Details</div>
                                                    <div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </footer>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="row">
                            <article className="article col-md-12">
                                <div className="inner">
                                    <figure>
                                        <a href="single.html">
                                            <img src="https://www.digitaltrends.com/wp-content/uploads/2022/06/ios-16-beta-iphone13-3.jpg?p=1" />
                                        </a>
                                    </figure>
                                    <div className="padding">
                                        <div className="detail">
                                            <div className="category">
                                                <a href="category.html">Technology</a>
                                            </div>
                                        </div>
                                        <h2>
                                            <a href="single.html">
                                                the latest headlines of Technology news
                                            </a>
                                        </h2>
                                        <p>
                                            Technology news is so important that many news websites have created dedicated pages purely to report on technological developments. Naturally industries such as computing and video gaming are heavily interested in the developments reported as part of technology news stories.
                                        </p>
                                        <footer className='m-3'>
                                            <Link to="/Tech">
                                                <a className="btn btn-primary more" href="single.html">
                                                    <div>More Details</div>
                                                    <div>
                                                        <i className="ion-ios-arrow-thin-right" />
                                                    </div>
                                                </a>
                                            </Link>
                                        </footer>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;