import React from 'react'
import {Link} from "react-scroll";

const Navbar = () => {

    const pages = [
        {
            id: 1, 
            link: "About"
        },
        {
            id: 2, 
            link: "Projects"
        },
        {
            id: 3, 
            link: "Resume"
        },
        {
            id: 4, 
            link: "Contact"
        }
    ]
  return (
    <nav className = "flex flex-wrap container items-center justify-between p-6 w-full mx-auto text-blue-700">
        <div>
            <h1 className = "text-4xl font-bold blue-500 cursor-pointer my-0"><Link to={"Home"}>Akshat Jawne</Link></h1>
        </div>
        <div>
            <ul className = "flex flex-col mt-4 md:flex-row md:space-x-9 md:mt-0 md:text-md md:font-medium mx-4 cursor-pointer">
                {pages.map(({id, link}) => (
                    <li key = {id} className = "hover:bg-blue-700 hover:rounded-lg p-2 hover:text-white duration-100">
                        <Link to ={link} smooth duration = {500}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar