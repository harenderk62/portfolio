import Button from "../Components/button"
import User from "../assets/user.png"
import ResumeLogo from "../assets/ListIcon/resume.svg"
import "./about.scss"

const AboutMe =()=>{
    const portfolioHandler =()=>{
        console.log("Im Clicked")
    }

    const resumeHandler =()=>{
        console.log("Resume Handler")
    }

    return(<div className="page-container">
        <div className="header">
            <div className="aboutMe">
        <h1>Harender Kumar</h1>
        <h3>Software Engineer | Developer | Full Stack</h3>
        <p>I'm an experienced Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems. Proficient in various platforms and languages like MERN stack, python, SQL. Experienced with the latest cutting-edge development tools and procedures. Recognized for commitment and speed. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.</p>
        <div className="btn-group">
        <Button className="grn-btn" img={User} type="button" onClick={portfolioHandler} btnName="View Portfolio"/>
        <Button className="drk-btn" img={ResumeLogo} type="button" onClick={resumeHandler} btnName="View Resume"/>
        </div>
        </div>
        <img className="profile" src={User} alt="Profile" />
        </div>
    </div>)
}

export default AboutMe;