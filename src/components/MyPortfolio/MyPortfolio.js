import React from 'react';
import Contact from './Contact';
import PortfolioAbout from './PortfolioAbout';
import PortfolioBanner from './PortfolioBanner';
import Project from './Project';
import Skills from './Skills';

const MyPortfolio = () => {
    return (
        <div className="bg-[#111318]">
            <PortfolioBanner />
            <div className="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <PortfolioAbout />
            <div className="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <Skills />
            <div className="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <Project />
            <div className="divider container mx-auto bg-slate-500 h-2 rounded"></div>
            <Contact/>
        </div>
    );
};

export default MyPortfolio;