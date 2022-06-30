import React from 'react';
import Tasks from '../../Tasks/Tasks';
import Calender from '../Calender/Calender';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Tasks></Tasks>
            <Calender></Calender>
            <Footer></Footer>
        </div>
    );
};

export default Home;