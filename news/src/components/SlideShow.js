import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';
import '../App.css'
import '../style/slide.css'

const { Meta } = Card;


function BreakingNews() {

    const [breakingnews, setbreakingnews] = useState([]);

    useEffect(() => {
        const loadbreakingnews = async () => {
            const response = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=94b41df1b4c346be9b6113a3a84450ae ");

            setbreakingnews(response.data.articles);
        };

        loadbreakingnews();
    }, []);

    console.log('breakingnews', breakingnews);
    return (
        <>
        <div className="container" style={{ width: '100%', margintop: '20em' }}>
            <Carousel fade={true} pause={false} className="slide">
                {breakingnews && breakingnews.map((item, index) => {
                    return (
                        <Carousel.Item interval={4000} key={index}><a href={item.url} >
                            <img
                                className="d-block w-100"
                                src={item.urlToImage}
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.500)', paddingLeft: '3%', textAlign: 'left' }}>
                                <p>{item.publishedAt}</p>
                                <h3 style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</h3>

                            </Carousel.Caption>
                        </a>
                        </Carousel.Item>


                    )
                })}

            </Carousel>

        </div>
        </>

    )


}

export default BreakingNews;