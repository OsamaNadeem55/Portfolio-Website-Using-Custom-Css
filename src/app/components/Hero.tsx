import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import "../style/hero.css";
import Image from "next/image";

export default function Hero () {
    return (
    <div className="header-container">
        <div className="header-boxes-con">
            
           {/* left  */}
            
            <div>
          <Image src={"/images/profile.jpg"} 
          width={200}
          height={200}
         className="header-image"
          
          alt="profile"/>
            </div>
          
          {/* right */}
          <div className="hero-right-div">
            <h1 className="title-hero"> Hello, I&apos;m Osama </h1>
              <h1>Frontend Developer </h1>
            <p className="des-hero">Specializing in Creating Responsive and User-Friendly Websites using HTML , CSS , JavaScript , and Frameworks like React and Next.js . I Focus on Delivering Seamless, Visually Appealing, and High-Performance Web Experiences.
            </p>  
            <button className="hero-btn">HIRE ME <HiMiniArrowTopRightOnSquare className="arrow-btn"/></button>
          </div>
          
        </div>
    </div>
    );
  }