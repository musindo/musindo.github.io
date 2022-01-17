import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import OurVision from '../components/About/OurVision';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import AchievementContent from '../components/About/AchievementContent';
import Footer from '../components/_App/Footer';
import Navbar from "../components/_App/Navbar";

const About = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
            /> 

            <AboutUsContent />

            <OurVision />

            <AboutUsContentTwo />

            <div className="pt-100">
                <AchievementContent />
            </div>
            
            <Footer />
        </>
    )
}

export default About;