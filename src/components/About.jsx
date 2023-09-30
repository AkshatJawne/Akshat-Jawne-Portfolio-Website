import React from 'react'
import akshatImage from "../assets/DSC_0201.JPG";

const About = () => {
  return (
    <div name = "About" className='w-full h-3/4 mt-36 mb-28'>
         <div className = "pr-28 md:flex-row">
            <div className =  "ml-24">
                <h2 className = "text-4xl font-bold text-blue-700"> About Me :)</h2>
                <p className='pb-8 py-4 text-xl ml-1'>
                    Welcome to my website! I’m Akshat, a Computer Engineering Student at the University of Waterloo. I am currently 
                    working at Ford as a Systems Software Developer, and previously worked as a Software Developer at Deep Trekker, 
                    an industry-leading underwater robotics company. The boundless nature of technology has fascinated me since I could 
                    string letters together; currently, I am interested in Full Stack Development, Machine Learning, and Financial Technology, 
                    but welcome any opportunities that enable me to channel my technological prowess to create meaningful change. In my free time, 
                    I enjoy practicing Martial Arts, trying out different Cafés around the city, and watching the NBA. 
                    <br/> <br/>
                    I am currently seeking Summer 2024 internships; if you have
                    any questions about anything outlined on this website or about my candidature, 
                    please feel free to contact me. 
                </p>
            </div>
            </div>
    </div> 
  )

}

export default About
