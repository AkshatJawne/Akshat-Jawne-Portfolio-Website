import React from 'react'
import {MdMail} from "react-icons/md";
import {FaGithubSquare} from "react-icons/fa";
import {IoLogoLinkedin} from "react-icons/io";
import {BsArrowUpCircle} from "react-icons/bs";
import {Link} from "react-scroll";

const Footer = () => {


    return (
        <div className = "flex flex-wrap container items-center justify-between p-6 w-full mx-auto">
            <div className = "text-xl mx-0">
                <h1>Copyright © 2022 Akshat Jawne</h1>
            </div>
            <div>
                <ul className = "flex flex-col mt-4 md:flex-row md:space-x-9 md:mt-0 md:text-md md:font-medium mx-4 cursor-pointer">
                    <li className = "text-blue-700">
                        <a href = "https://www.linkedin.com/in/akshatjawne/"><IoLogoLinkedin size = {50}></IoLogoLinkedin></a>
                    </li>
                    <li className = "text-blue-700">
                        <a href = "mailto:akshatjawne@gmail.com"><MdMail size = {50}></MdMail></a>
                    </li>
                    <li className = "text-blue-700 mt-1">
                        <a href="https://github.com/AkshatJawne"><FaGithubSquare size = {41}></FaGithubSquare></a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Footer