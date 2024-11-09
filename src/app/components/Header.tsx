import Link from "next/link";
import "../style/header.css";

export default function Header () {
    return (
      <div className="header">
      {/* left */}
      <div>
        <h1 className="logo">ON.</h1>
      </div>

       {/* right */}
       <div className="header-right-div">
        <ul className="header-links">
      <li>
          <Link className="nav-links" href={"/"}><b>Home</b></Link>
      </li>

      <li>
        <Link className="nav-links" href={"/About"}><b>About</b></Link>
      </li>

      <li>
        <Link className="nav-links" href={"/Contact"}><b>Contact us</b></Link>
      </li>

      <li>
        <Link className="nav-links" href={"/Skill"}><b>Skills</b></Link>
      </li>


        </ul>
       </div>
      
      
      </div>
    );
  }