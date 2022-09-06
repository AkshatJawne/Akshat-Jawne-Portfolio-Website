import React from 'react';
// import placeHolder from "../assets/placeholder-image.png";
import watchd from "../assets/Watchd.png";
import weatherMe from "../assets/WeatherMe.png";
import website from "../assets/Website.png";
import twoDArcade from "../assets/2D Arcade.png";

const Projects = () => {

    const allProjects = [{
        id: 1, 
        title: "Watchd",
        description: "An interactive Next.js clone of Amazon Prime Video designed to tell you about trending movies worldwide in various categories, through realtime data retrieved from The Movie Database API.",
        src: watchd,
        link: "https://watchd.vercel.app/",
    },
    {
        id: 2, 
        title: "WeatherMe",
        description: "A dynamic Weather App built with a strategic combination of Javascript,  HTML, and CSS.", 
        src: weatherMe,
        link: "https://akshatjawne.github.io/weatherme/",
    },
    {
        id: 3, 
        title: "This Website",
        description: "A portfolio website built in React, designed via Tailwind CSS.",
        src: website,
    },
    {
        id: 4, 
        title: "2D Mini Arcade",
        description: "A small Terminal Arcade program built in C++ where you can play Tic-Tac-Toe, Hangman, and Rock-Paper-Scissors.",
        src: twoDArcade,
        link: "https://github.com/AkshatJawne/2D-Mini-Arcade",
    }
]
    return (
      <div name = "Projects" className='w-full h-3/4'>
           <div className = "max-w-screen-lg flex flex-col md:flex-row">
              <div className = "mx-24 px-4">
                  <h2 className = "text-4xl font-bold text-blue-700">Projects</h2>
                  <p className='py-6'> Here are some of my projects, if you are interested in seeing more, check out my 
                  my <a className = "hover:text-blue-700" href = "https://github.com/AkshatJawne">Github</a>.
                  </p>
              </div>
              </div>
            <div className = "grid ml-28 sm:grid-cols-2 md:grid-cols-3">
                    {
                        allProjects.map(({id,title,description, src, link}) => (
                            <a href = {link}>
                                <div key = {id} className = "w-4/6">
                                    <img src= {src}></img>
                                    <h1 className = "font-bold pt-2">{title}</h1>
                                    <p>{description}</p>
                                </div>
                            </a>
                        ))}
            </div>        
      </div> 
    )
  }
  
  export default Projects