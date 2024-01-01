import React from 'react';
import watchd from "../assets/Watchd.png";
import connecta from "../assets/Connecta.png";
import arimaStockPrediction from "../assets/stockPrediction.png";
import weatherMe from "../assets/WeatherMe.png";
import letsGoCustomers from "../assets/letsgocustomers.png";
import cruze from "../assets/cruze.png";
import airbnbDataAnalysis from "../assets/airbnbDataAnalysis.png";
import bGeneratify from "../assets/B-Generatify.png";
import website from "../assets/Website.png";
import twoDArcade from "../assets/2D Arcade.png";

const Projects = () => {

    const allProjects = [
    {
        id: 1, 
        title: "B-Generatify",
        description: "An AI blog generator tool that outputs custom descriptions of inputted Youtube video links, created with JS, HTML, Python, Django, OpenAI API, and Assembly AI.",
        src: bGeneratify,
        link: "https://github.com/AkshatJawne/B-Generatify",
    },
    {
        id: 2, 
        title: "LetsGOCustomers",
        description: "A customer management platform with CRUD functionality, featuring serverless configuration with API Gateway and AWS integration, and server-based configuration with GraphQL API",
        src: letsGoCustomers,
        link: "https://github.com/AkshatJawne/LetsGOCustomers",
    },
    {
        id: 3, 
        title: "Cruze",
        description: "A full-stack ride-share, Uber-like platform with phone text verification, dynamic routing, and websockets. Built with PHP, Laravel, JS, and Vue.js.",
        src: cruze,
        link: "https://github.com/AkshatJawne/Cruze",
    },
    {
        id: 4, 
        title: "Connecta",
        description: "A responsive full-stack social media application with post sharing, liking, and commenting. Built with MERN Stack, featuring custom REST API.",
        src: connecta,
        link: "https://github.com/AkshatJawne/Connecta",
    },
    {
        id: 5, 
        title: "ARIMA Stock Prediction Model",
        description: "An Autoregressive Integrated Moving Average (ARIMA) pricing model created in Python with pandas, numpy, scikit-learn, and statsmodels that forecasted prices of various stocks with nearly 85% accuracy.",
        src: arimaStockPrediction,
        link: "https://github.com/AkshatJawne/ARIMA-Stock-Prediction-Model",
    },
    {
        id: 6, 
        title: "AirBnb Data Exploration",
        description: "Data cleaning and analysis on dataset of over 200,000 NYC Airbnb Properties achieved with SQL.",
        src: airbnbDataAnalysis,
        link: "https://github.com/AkshatJawne/AirbnbDataExploration",
    },
    {
        id: 7, 
        title: "Watchd",
        description: "An interactive Next.js clone of Amazon Prime Video designed to tell you about trending movies worldwide in various categories, through realtime data retrieved from The Movie Database API.",
        src: watchd,
        link: "https://watchd.vercel.app/",
    },
    {
        id: 8, 
        title: "WeatherMe",
        description: "A dynamic Weather App built with a strategic combination of Javascript,  HTML, and CSS.", 
        src: weatherMe,
        link: "https://akshatjawne.github.io/weatherme/",
    },
    {
        id: 9, 
        title: "This Website",
        description: "A portfolio website built in React, designed via Tailwind CSS.",
        src: website,
    },
    {
        id: 10, 
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
                  <p className='py-6'> Here are some of my projects, if you are interested in seeing more, check out
                  my <a className = "hover:text-blue-700" href = "https://github.com/AkshatJawne">Github</a>.
                  </p>
              </div>
              </div>
            <div className = "grid ml-28 sm:grid-cols-2 md:grid-cols-3">
                    {
                        allProjects.map(({id,title,description, src, link}) => (
                            <a href = {link}>
                                <div key = {id} className = "w-[400px] h-[400px]">
                                    <img className = "w-[400px] h-[230px]" src= {src}></img>
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