import React from 'react';
import './Home.css';
import Card from '../../Components/Cards/Card';
import Profile from '../../Components/Profile/Profile';
import RightFooter from '../../Components/RightFooter/RightFooter';
import Status from '../../Components/Status/Status';

function Home() {
    return (
        <section className="home">
            <div className="home_left">
                <Status/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
            <div className="home_right">
               <Profile/>
                <RightFooter/>
            </div>
        </section>
    )
}

export default Home
