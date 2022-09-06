import React from 'react'

const Contact = () => {
  return (
    <div name = "Contact">
            <form action = "https://getform.io/f/709189db-a2a3-466e-a0aa-661b255320ba" method = "POST" className = "flex flex-col px-28">
                <h2 className = "text-4xl font-bold inline pt-16 pb-4 text-blue-700">Contact</h2>
                <input className = "p-2 bg-transparent border-2 rounded-md border-blue-700 mr-7" type = "text" name = "name" placeholder = "Your Name"></input>
                <input className = "p-2 my-4 bg-transparent border-2 rounded-md border-blue-700 mr-7" type = "text" name = "email" placeholder = "Your Email"></input>
                <textarea className = "p-2 my-4 bg-transparent border-2 rounded-md border-blue-700 mr-7 mt-2" rows = "10" name = "message"   placeholder = "Your Message"></textarea>
                <button className ="bg-blue-700 text-white hover:bg-white hover:text-blue-700 rounded-full p-3 w-1/6 mb-12">Get in Touch</button>
            </form>
        <div>

        </div>
    </div>
  )
}

export default Contact