import "@/app/style/workhistory.css";

// canding  all text
function History(){
    return(
        <main className="education-container">
             <div className="education-container2">
                 {/* top div */}
              <div className="education-header-box">
                <h1 className="education-title">Work History</h1>
                <p className="education-des">I have Developed My Skills through Web Development, Professional Training, and Academic Accomplishments, All While Maintaining a Strong Commitment to Continuous Growth.</p>
              </div>
              {/* boxes div */}
              <div className="education-box-container">
              
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">University of Karachi</h2>
                    <span className="uni-stu ">Student</span> <span className="uni-date">Starts jan-2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name "> Academic Journey - UK</h2>
                    <p className="uni-des ">In 2024, I enrolled at the University of Karachi to pursue a Bachelor&apos;s in Business Administration, Integrating Academic Learning with Experience.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Governor IT Initiative</h2>
                    <span className="uni-stu">Student</span> <span className="uni-date">Jan-2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name"> GIAIC - Start Quarter-2</h2>
                    <p className="uni-des">
                    Continous Hard Work, I Reached to Quarter 2, InshaAllah Mastering AI, Metaverse, Blockchain, and Tools like Next.js and Tailwind CSS.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Web Development</h2>
                    <span className="uni-stu">(In Progress)</span> <span className="uni-date"> Jan-2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name">Journey - As a Frontend Developer</h2>
                    <p className="uni-des">I Started by learning HTML, CSS, and JavaScript, Building Websites, and Working on Personal Projects to Improve My Skills.</p>
                </div>
              </div>

              </div> 



              </div>
        </main>
    )
}
export default History