import React from 'react';
import Category from './Category';
import Food from './Food';
import BreakingNews from './SlideShow';

function Home(){
    return(
        <>
        <BreakingNews/>
        <Category/>
        <Food/>
        </>
    )
}
export default Home;