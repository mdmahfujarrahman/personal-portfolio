import React from 'react';
import Typewriter from "typewriter-effect";
import facebook from '../../asset/facebook.png';
import portrait from '../../asset/mahfuj.png';
import './Banner.css';

const Banner = () => {
    return (
        <section className="bg-primary text-secondary h-screen">
            <div className="container mx-auto flex flex-col md:flex-row items-center py-40">
                <div>
                    <div>
                        <h2 className="text-5xl font-semibold">Hi, i’m</h2>
                        <h3 className="text-5xl text-accent font-semibold my-8">
                            Md Mahfujar Rahman
                        </h3>
                        <div className="text-5xl test font-semibold mb-4">
                            <span>a </span>
                            <div className="inline-block">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Full Stack Developer.",
                                            "Self Believer.",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>
                        <p>
                            I use animation as a third dimension by which to
                            simplify experiences and kuiding thro each and every
                            interaction.
                            <br /> I’m not adding motion just to spruce things
                            up, but doing it in ways that.
                        </p>
                        <button class="resume-button my-8">
                            Download Resume
                        </button>
                    </div>
                    <div className="py-28">
                        <p>FIND WITH ME</p>
                        <ul>
                            <li className="social-button w-20">
                                <img className="w-6" src={facebook} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="photo-shape w-96">
                    <img
                        className="mt-[-100px]"
                        src={portrait}
                        alt="portrait"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;