import "@/app/style/education.css";

function Education(){
    return(
        <main className="education-container">
             <div className="education-container2">
                 {/* top div */}
              <div className="education-header-box">
                <h1 className="education-title">Education</h1>
                <p className="education-des">Relied Upon by Industry Experts for Outstanding Quality and Service. Professionals From Diverse Sectors Count on us to Provide Superior Quality and Impactful Results. Here's what they have to say About our Work.
                </p>
              </div>
              {/* boxes div */}
              <div className="education-box-container">
              
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">University of Karachi</h2>
                    <span className="uni-stu ">Student</span> <span className="uni-date">Start-2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name ">Bachelor in Busniess Administration</h2>
                    <p className="uni-des ">I am Currently Enrolled Bachelor&apos;s Degree in Busniess at University of Karachi, starts in  jan 2024. This Program will Offer a Strong Foundation in the Business Field.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Governor IT Initiative Web 3.0 & Metaverse</h2>
                    <span className="uni-stu">Student</span> <span className="uni-date">Starts Feb-2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name">Certified Web 3.0 and Metaverse</h2>
                    <p className="uni-des">
                    At the Governor IT Initiative, Students Explore AI, Metaverse, and Blockchain Technologies in an Accessible Manner. This Free Program is an Excellent Opportunity for those Interested in these Innovative Field.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Khana E Farang</h2>
                    <span className="uni-stu">Completed</span> <span className="uni-date"> Aug-20-2022</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name">Certificate of Information Technology</h2>
                    <p className="uni-des">As a CIT student, Gain Expertise in Web Development, Digital Marketing, and Freelancing through Guidance from Outstanding Instructors. The Program Provides Valuable Mentorship, Equipping Student with Practical Skills that are Crucial for Success in their Careers..</p>
                </div>
              </div>

              </div> 



              </div>
        </main>  
    )
}
export default Education