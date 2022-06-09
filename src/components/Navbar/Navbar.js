import React from 'react';
import logo from '../../asset/logo.png';

const Navbar = () => {
    return (
        <div className="bg-primary">
            <nav className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown order-2 ml-60 md:ml-[650px]">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost text-accent lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLineJoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content overflow-hidden mt-3 p-2 shadow bg-primary text-secondary rounded-box w-52"
                        >
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Features</a>
                            </li>
                            <li>
                                <a href="/">Project</a>
                            </li>
                            <li>
                                <a href="/">Skills</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <img className="w-10 order-1" src={logo} alt="logo" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-secondary">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Project</a>
                        </li>
                        <li>
                            <a href="/">Skills</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;