import React from 'react';
import {BrowseRoute, Route, Routes, Link} from 'react-router-dom';

function Category() {
    return (
        <>
            <div className="line container">
                <div>Today News</div>
            </div>
            <div className="row container">
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
                                    <footer>
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
                                        Sports journalism is a form of writing that reports on matters pertaining to sporting topics and competitions. Sports journalism was targeted to the social elite and transitioned into an integral part of the news business with newspapers having dedicated sports sections.
                                    </p>
                                    <footer>
                                    <Link to="/News">
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
        </>
    )
}
export default Category;