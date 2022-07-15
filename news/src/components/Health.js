import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';
import Ads from "./UserAds";




const { Meta } = Card;


function Health() {

    const [health, sethealth] = useState([]);

    useEffect(() => {
        const loadhealth = async () => {
            const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_8969f768ee1f5b85ba15ae102244eae12fdd&country=gb,us&language=en&category=health");

            sethealth(response.data.results);
        };

        loadhealth();
    }, []);

    console.log('health', health);

    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-9 col-sm-9 '>
                <div className="container health" style={{ width: '80%' }}>
            <div class="line top">
                <div>Health News</div>
            </div>
            {health && health.map((item, index) => {
                return (
                    // <Card
                    // key={index}
                    // hoverable style={{width: "70%"}}
                    // cover={<img alt="image" src= {item.image_url}/>}>

                    //     <Meta title={item.title} description={item.image_url}/>
                    //     <a href={item.link} target='blank' rel="noopener noreferrer">
                    //         <Button type="primary" style={{marginTop: '10px'}}>Read More</Button>
                    //     </a>


                    // </Card>

                    <div key={index}>


                        <div class="row"  >
                            <article class="col-md-12 article-list">
                                {item.image_url && (
                                    <div class="inner">
                                        <figure>
                                            <a href="single.html">
                                                <img src={item.image_url} alt="Sample Article" />
                                            </a>
                                        </figure>

                                        <div class="details">
                                            <div class="detail">
                                                <div class="category">
                                                    <a href="#">News</a>
                                                </div>
                                                <div class="time">{item.pubDate}</div>
                                                {/* <div class="time">December 19, 2016</div> */}
                                            </div>
                                            <h1><a href="single.html">{item.title} </a></h1>
                                            <p>
                                                {item.description}
                                            </p>
                                            <footer>
                                                <a class="btn btn-primary more" href={item.link}>
                                                    <div>More</div>
                                                    <div><i class="ion-ios-arrow-thin-right"></i></div>
                                                </a>
                                            </footer>
                                        </div>
                                    </div>
                                )}
                            </article>

                        </div>
                        <br />

                    </div>


                )

            })}
        </div>
            </div>
            <div className='col-md-3 col-sm-3 '>
                <Ads/>
            </div>
            </div>
        </div>
        </>
        
    )


}

export default Health;