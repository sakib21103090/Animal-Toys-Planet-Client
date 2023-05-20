import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Extra from '../../Extra/Extra';
import Extra2 from '../../Extra/Extra2';
import Category from '../Category/Category';
import LoadData from '../Category/LoadData/LoadData';


const Home = () => {
    return (
        <div className="bg-rose-50">
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Extra2></Extra2>
            <Extra></Extra>
            
           
            
        </div>
    );
};

export default Home;