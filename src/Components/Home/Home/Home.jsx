import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className="bg-rose-50">
            <Banner></Banner>
            <Gallery></Gallery>
            <h5>home swiit</h5>
        </div>
    );
};

export default Home;