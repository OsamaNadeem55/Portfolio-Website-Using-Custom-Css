import "@/app/style/contact.css";
import { CiFlag1 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";

function Contact(){
   return(
       <div className="container">
           <div className="contact-box-cantainer">

               <div className="contact-box1">
               <h1 className="text-top-1">Information Form</h1>

                   <form action="" className="form">
                       <input className="input" type="text" placeholder="Enter Your Name"required /> <br />
                       <input className="input" type="email" placeholder=" Enter Your Email "required /> <br />
                       <input className="input" type="text" placeholder="Subject"required /> <br />
                       <input className="input-msg" type="text" placeholder=" Enter Your Message"required /> <br />
                       <input type="button" value="Submit" className="submit-btn"/>
                   </form>
               </div>
               <div className="contact-box2">
               <h1 className="text-top-2">Contact Us</h1>
                   <div className="inform-box">
                       <span className="flag-icon"><CiFlag1 className="icon-flag"/></span>
                      <div className="box-information2">
                      <p className="parent-box"> <span className="country-data">Country:</span> <span className="adrees">Pakistan</span></p>
                       <p className="parent-box"> <span className="country-data">City:</span>    <span className="adrees">Hyderabad</span></p>
                       <p className="parent-box"> <span className="country-data">Street:</span>  <span className="adrees">Afandi Town</span></p>
                      </div>
                   </div>
           
                   <div className="inform-box">
                   <span className="flag-icon"><FaRegMessage className="icon-msg"/></span>

                   <div className="box-information2">
                     <p className="parent-box"> <span className="country-data">Email:</span> <span className="adrees">osamanadeem4345@gmail.com</span></p>
                       <p className="parent-box"> <span className="country-data">Linkedin:</span>    <span className="adrees">Osama Nadeem</span></p>
                       <p className="parent-box"> <span className="country-data">Facebook:</span>  <span className="adrees">Osama Shiekh</span></p>
                     </div>
                   </div>

                   <div className="inform-box">
                   <span className="flag-icon"><IoMdPhonePortrait className="icon-flag"/></span>

                   <div className="box-information2">
                      <p className="parent-box"> <span className="country-data">Support Services:</span> <span className="adrees">14115</span></p>
                       <p className="parent-box"> <span className="country-data">Office:</span>    <span className="adrees">021-455-767</span></p>
                       <p className="parent-box"> <span className="country-data">Personal:</span>  <span className="adrees">0336-3341867</span></p>
                      </div>
                   </div>

               </div>
           </div>
       </div>
   )
}
export default Contact