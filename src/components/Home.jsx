import React from 'react';
import homeImage from "../assets/home-background.jpg";
import {Link} from "react-scroll";
import {BsArrowDownCircle} from "react-icons/bs";
import Navbar from './Navbar';

const Home = () => {
  const style= {
  container: "bg-cover h-3/4",
  about: "py-[15%] px-[31%] items-center justify-center",
  intro: "text-4xl text-white font-extrabold text-center",
  name: "text-7xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#ECECEC] pr-5 text-white",
  iconcontainer: "flex flex-row mt-[2%]",
}
  return (
    <div name = "Home">
        <Navbar />
             <div id="Home" className={style.container} style={{ backgroundImage: `url(${homeImage})`}}>
               <div className={style.about}>
                <h4 className={style.intro}>Computer Engineering @ The University of Waterloo</h4>
            <div className={style.iconcontainer}>
              <div className = "absolute flex pt-80 text-white cursor-pointer z-20">
                    <Link to ={"About"} smooth duration = {500}>
                        <BsArrowDownCircle size={50} />
                    </Link>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home