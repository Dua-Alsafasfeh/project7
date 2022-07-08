import '../style/weather.css';
import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';
const { Meta } = Card;

function Weather() {

    const [weather, setweather] = useState([]);

    useEffect(() => {
        const loadweather = async () => {
            const response = await axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/jordan?unitGroup=uk&key=BU2Q48AQMNDLLBQPYB472B393&contentType=json ");

            setweather(response.data.days);
        };
        loadweather();
    }, []);

    console.log('weather', weather);
    return (

        <div className="container-fluid" style={{ width: '60%' }}>
            <div class="line top">
                <div>Jordan Weather</div>
            </div>
            {weather && weather.map((item, index) => {
                return (
                    <>
                    <div className="content_wrapper ticker-container" id="app">  
                    {/* add ticker-container class above  */}
                        <div v-if="infos.city" className='ticker'>
                            {/* add className='ticker' above */}
                            <h1>
                                <div className="date">{item.datetime}</div>
                            </h1>
                            <div className="weather_card">
                                <div className="weather_card_img">
                                </div>
                                <div className="weather_card_infos">
                                    <div className="weather_card_infos_title">{item.conditions}</div>
                                    <div className="weather_card_infos_temp">{item.tempmin}°C / {item.tempmax}°C</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )

            })}
        </div>
    )
}
export default Weather;