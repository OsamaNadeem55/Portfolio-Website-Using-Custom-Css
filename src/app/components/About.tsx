import Image from "next/image";
import "@/app/style/about.css";
import Link from "next/link";

function Aboutus(){
    return(
        <div className="about-container">
             <div className="about-boxes-container">
               
                <div className="box1">
                <Image src={"/images/profile.jpg"}
                  width={100}
                  height={100}
                  className="images-about"
                  alt="MY-pic"></Image>

                 
            
                </div>
                
                <div className="about-box2">
                    <h2 className="about-heading">About Me</h2>
                    <p className="about-title">I am <span className="bold">Osama Nadeem</span>, a passionate and meticulous Web Developer and AI Enthusiast with a BBA (Bachelor's in Business Administration) from the University of Karachi. My career has Spanned Multiple Domains, Including Web Development, Data Analyst, and UI/UX Design, and I've Gained Practical Experience with Cutting-Edge Technologies such as Next.js, Tailwind CSS, and TypeScript.</p>
                    <p className="about-title">I am Currently Pursuing Advanced Learning at the <span className="bold">Governor IT Initiative</span> I am currently Deepening my Knowledge at the Governor IT Initiative, Mentor by Industry Experts such as <span className="bold">Sir Hamzah Syed</span> and <span className="bold">Sir Ameen Alam.</span> Alongside My Technical Expertise, I Focus on Freelancing and Improve My Skills.</p>
                    <p className="about-title">With a Strong Eye For Design and a Commitment to Making a Meaningful Impact, I Recently Developed Professional Business Cards and Crafted Responsive Projects, Including an E-Commerce Platform. I am Always Eager to Collaborate and Tackle New Challenges that Align with My Passion for Technology and Innovative Problem Solving

.</p>
                </div>
             </div>
        </div>
    )
}
export default Aboutus

