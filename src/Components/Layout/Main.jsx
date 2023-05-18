import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarMain from '../Shared/NavBarMain';
import Footer from '../Shared/Footer';
;

const Main = () => {
    return (
        <div>
            <NavBarMain></NavBarMain>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;