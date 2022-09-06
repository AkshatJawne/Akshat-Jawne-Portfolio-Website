import React from 'react';
import homeImage from "../assets/home-background.jpg";
import {Link} from "react-scroll";
import {BsArrowDownCircle} from "react-icons/bs";
import Navbar from './Navbar';

const Home = () => {
  return (
    <div name = "Home">
        <Navbar />
            <div className='flex ml-28 w-10/12 h-1/3 items-center justify-center'>
                <img src = {homeImage} className = "relative px-1.5"/>
                <h1 className = "sm:w-100 text-white text-6xl font-bold absolute text-center">Computer Engineering Student @ <br></br>University of Waterloo</h1>
                <div className = "absolute flex pt-80 text-white cursor-pointer">
                    <Link to ={"About"} smooth duration = {500}>
                        <BsArrowDownCircle size={50} />
                    </Link>
                </div>
             </div>
    </div>
  )
}

export default Home