import React from 'react';
import Category from './Category';
import Food from './Food';
import BreakingNews from './SlideShow';
import Ads from './UserAds';

function Home(){
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-9 col-sm-9 '>
                <BreakingNews/>
            </div>
            <div className='col-md-3 col-sm-3 '>
                <Ads/>
            </div>
            </div>
            <div className='row '>
            <div className='col-md-12 col-sm-12'>
                <Category/>
            </div>
            </div>
            <div className='row'>
            <div className='col-md-12 col-sm-12 '>
                <Food/>
            </div>
            </div>
        </div>
        
        
        
        </>
    )
}
export default Home;