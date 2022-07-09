import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';
import '../style/weather.css';


const { Meta } = Card;


function Weather() {

    const [weather, setweather] = useState([]);

    useEffect(() => {
        const loadweather = async () => {
            const response = await axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/jordan?unitGroup=uk&key=BU2Q48AQMNDLLBQPYB472B393&contentType=json");

            setweather(response.data.days);
        };

        loadweather();
    }, []);

    console.log('weather', weather);

    return (
        <>
        <div className="weatherstyle">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div
                            className="d-flex justify-content-between align-items-center breaking-news "
                            style={{ backgroundColor: "#21325E", color: "aliceblue", fontSize: "1.5em" }}
                        >
                            <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center py-2 text-white px-1 news">
                            <div className="weatherimg"><span className="d-flex align-items-center">&nbsp;</span>
                                </div>
                                
                            </div>
                            <marquee
                                className="news-scroll"
                                behavior="scroll"
                                direction="left"
                                onmouseover="this.stop();"
                                onmouseout="this.start();"
                            >
                                {weather && weather.map((item, index) => {
                                    return (
                                        <>
                                            <a href={item.datetime} key={index}>
                                                {item.datetime} {" | "}
                                                {item.conditions} {" | "}
                                                {item.tempmin}°C / {item.tempmax}°C
                                            </a>{" "}
                                            <span className="dot bg-warning" />{" "}
                                        </>
                                    )


                                })}
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        </>
    )
}

export default Weather;