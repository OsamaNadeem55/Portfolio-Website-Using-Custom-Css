
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn} from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineNoPhotography } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import '@/app/style/skill.css';
import { FaFigma } from "react-icons/fa6";

function Skills(){
  return(
      <main className="Skill-container">
           <div className="Skill-container2">
               {/* top div */}
            <div className="Skill-header-box">
              <h1 className="ser-title">My Skills</h1>
              <br />
              <p className="ser-des">I Possess a Broad Range of Skills Across Web Development, UI/UX Design, App Development, Game Design, and Photography. I Specialize in Building Responsive Websites, Crafting user-friendly Interfaces, and Developing Engaging Mobile Applications. Additionally, I Design Captivating Game Experiences and use my Photography Expertise to Enhance Visual Projects, Providing well-rounded Digital Solutions.</p>
            </div>
            {/* boxes div */}
            <div className="boxes-container">
                  <div className="box">
                      <FaLaptopCode className="ski-icon"/>
                      <h2 className="web">Web Development</h2>
                      <span className="Title-box">Frontend Frameworks, Python/Django</span>
                  </div>
                  <div className="box">
                      <FaFigma className="ski-icon"/>
                      <h2 className="web">UI/UX Design</h2>
                      <span className="Title-box">Interaction Design, Wireframing & Prototyping</span>
                  </div>
                  <div className="box">
                      <GiSoundOn className="ski-icon"/>
                      <h2 className="web">Sound Design</h2>
                      <span className="Title-box">Audio Post-Production, Sound Mixing</span>
                  </div>
                  <div className="box">
                      <IoGameControllerOutline className="ski-icon"/>
                      <h2 className="web">Game Design</h2>
                      <span className="Title-box">Game Systems Design, Gameplay Mechanics</span>
                  </div>
                  <div className="box">
                      <MdOutlineNoPhotography className="ski-icon"/>
                      <h2 className="web">Photography</h2>
                      <span className="Title-box">Creative Photography, Travel Photography</span>
                  </div>
                  <div className="box">
                      <CiMobile4 className="ski-icon"/>
                      <h2 className="web">App Development</h2>
                      <span className="Title-box">iOS App Development, App Migration Services</span>
                  </div>
                  
            </div>

           </div>
      </main>
  )
}
export default Skills
  