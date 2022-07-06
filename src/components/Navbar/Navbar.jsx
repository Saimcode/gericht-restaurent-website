import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu,
        setToggleMenu] = useState(false);
    const [isFixed,
        setIsFixed] = useState(false);

        
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }

    return (
        <nav
            className='z-nav fixed w-full flex justify-between items-center text-primary-white bg-transparent backdrop-blur-2xl sm:px-8 sm:py-4 p-4'>
            <div className='flex justify-start items-center'>
                <img
                    src={images.gericht}
                    alt="app logo"
                    className="h-auto w-24 sm:w-40 2xl:w-52"/>
            </div>
            <ul className='lg:flex hidden justify-center items-center flex-1 duration-300 gap-2'>
                <li
                    className='text-primary-white my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#home'>Home</a>
                </li>
                <li
                    className='text-primary-white my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#about'>About</a>
                </li>
                <li
                    className='text-primary-white my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#menu'>Menu</a>
                </li>
                <li
                    className='text-primary-white my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#awards'>Awards</a>
                </li>
                <li
                    className='text-primary-white my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>

            {/*=========== Login Button ============*/}

            <div className="sm:flex hidden justify-end items-center">
                <a href='#login' className='my-0 mx-1 no-underline hover:text-primary-gray'>Log In / Register</a>
                <div className="line"/>
                <a
                    href="/"
                    className='my-0 mx-1 no-underline duration-150 hover:text-primary-gray'>Book Table</a>
            </div>

            {/*================ Mobile Navigation ================*/}

            <div className="flex lg:hidden">
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}}/> 
                {/*=========== Mobile Overlay ===========*/}
                {toggleMenu && (
                    <div
                        className='slide-bottom fixed top-0 left-0 w-full h-[400px] bg-primary-black duration-500 flex flex-col z-10'>
                        <MdOutlineRestaurantMenu
                            className="text-2xl text-primary-golden absolute top-5 right-5 cursor-pointer"
                            color='#fff'
                            fontSize={27}
                            onClick={() => {setToggleMenu(false)}}/> 
                        {/*=========== Nav ===========*/}
                        <ul className='list-none mt-4 p-6'>
                            <li
                                className='font-CormorantUpright m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#home'>Home</a>
                                    <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>
                            </li>
                            <li
                                className='font-CormorantUpright m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#about'>About</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                            <li
                                className='font-CormorantUpright m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#menu'>Menu</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                            <li
                                className='font-CormorantUpright m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#awards'>Awards</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                            <li
                                className='font-CormorantUpright m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#contact'>Contant</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
