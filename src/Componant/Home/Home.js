import React from 'react';
import Tasks from '../../Tasks/Tasks';
import Calender from '../Calender/Calender';
import Footer from '../Footer/Footer';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    return (
        <div>
            <ToDo></ToDo>
            <Tasks></Tasks>
            <Calender></Calender>
            <Footer></Footer>
        </div>
    );
};

export default Home;