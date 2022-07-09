import React, {useState, useEffect} from "react";
import {Card,Button} from 'antd';
import axios from 'axios';
import '../style/cateapi.css'




const {Meta} = Card;


function News() {

    const [news, setNews] = useState ([]);

    useEffect(() => {
        const loadNews = async () => {
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_900798d950e9338c71a8d1a30ef6878b6a62&country=au,be,es,ae,us&language=en&category=sports  ");

        setNews(response.data.results);
    };

    loadNews();
    }, []);

    console.log('news', news);
  return (
    <div className="container sport" style={{width: '60%'}}>
               <div class="line top">
            <div>Sport's News</div>
        </div>
      {news && news.map((item, index) => {
        return(
            // <Card
            // key={index}
            // hoverable style={{width: "70%"}}
            // cover={<img alt="image" src= {item.image_url}/>}>

            //     <Meta title={item.title} description={item.image_url}/>
            //     <a href={item.link} target='blank' rel="noopener noreferrer">
            //         <Button type="primary" style={{marginTop: '10px'}}>Read More</Button>
            //     </a>


            // </Card>

     <div  key={index}>
               
            
        <div class="row">
            <article class="col-md-12 article-list">
            {item.image_url && (
                <div class="inner">


                    <figure>

                        <a href="single.html">
                            <img src={item.image_url} alt="Sample Article"/>
                        </a>
                    </figure>
                    
                    <div class="details">
                        <div class="detail">
                            <div class="category">
                                <a href="#">Sport</a>
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
        <br/>

</div>

        
        )

      })}
    </div>
  )


}

export default News;