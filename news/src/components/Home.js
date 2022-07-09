import React from 'react';
import Category from './Category';
import Food from './Food';
import BreakingNews from './SlideShow';
// import Weather from './Weather';

function Home(){
    return(
        <>
        <BreakingNews/>
        <Category/>
        <Food/>
        {/* <Weather/> */}
        </>
    )
}
export default Home;