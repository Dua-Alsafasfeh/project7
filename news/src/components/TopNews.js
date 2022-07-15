import React, {useState, useEffect} from "react";
import {Card,Button} from 'antd';
import axios from 'axios';


const {Meta} = Card;


function TopNews(){

    const [topnews, settopnews] = useState ([]);

    useEffect(() => {
        const loadtopnews = async () => {
        const response = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=94b41df1b4c346be9b6113a3a84450ae");

        settopnews(response.data.articles);
    };

    loadtopnews();
}, []);

console.log('topnews', topnews);

  return (
    <div className=" topstyle">
                   {/* <div className="container"> */}
                        {/* <div className="row"> */}
                            {/* <div className="col-md-11"> */}
                                <div
                                    className="d-flex justify-content-between align-items-center breaking-news "
                                    style={{ backgroundColor: "#252e38", color: "aliceblue", fontSize: "1.5em" }}
                                >
                                    <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news">
                                        <span className="d-flex align-items-center">&nbsp; Global News</span>
                                    </div>
                                    <marquee
                                        className="news-scroll"
                                        behavior="scroll"
                                        direction="left"
                                        onmouseover="this.stop();"
                                        onmouseout="this.start();"
                                    >
                                        {topnews && topnews.map((item, index) => {
                                            return (
                                                <>
                                      
                                        <a href={item.url} key={index}>
                                        {item.title}
                                        </a>{" "}
                                        <span className="dot" />{" "}
                                        </>
                                        )
                                            

                                        })}
                                    </marquee>
                                </div>
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
    </div>
  )
}

export default TopNews;