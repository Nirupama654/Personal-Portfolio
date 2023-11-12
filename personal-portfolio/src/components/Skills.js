import C from "../assets/img/C.png";
import JavaScript from "../assets/img/Javascript.svg";
import ReactJS from "../assets/img/logo512.png";
import NodeJS from "../assets/img/NodeJS.png";
import HTML from "../assets/img/HTML.svg";
import CSS from "../assets/img/CSS.svg"
import Bootstrap from "../assets/img/Bootstrap.png";
import GIT from "../assets/img/GIT.svg";
import Postman from "../assets/img/Postman.png";
import TypeScript from "../assets/img/Typescript.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/dark-bg.jpg"
import { Type } from "react-bootstrap-icons";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const skills = [
    {
      language : "HTML",
      logo : HTML
    },
    {
      language : "CSS",
      logo : CSS
    },
    {
      language : "JavaSript",
      logo : JavaScript
    },
    {
      language : "ReactJS",
      logo : ReactJS
    },
    {
      language : "C",
      logo : C
    },
    {
      language : "Bootstrap",
      logo : Bootstrap
    },
    {
      language : "TypeScript",
      logo : TypeScript
    },
    {
      language : "Git",
      logo : GIT
    },
    {
      language : "Postman",
      logo : Postman
    },
    {
      language : "NodeJS",
      logo : NodeJS
    },
    
    
  ]

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Experienced in full-stack web development with expertise in HTML, CSS, JavaScript, ReactJS, and a strong foundation in UI/UX design principles.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {skills.map((skill) => (
                            <div className="item">
                                <img src={skill.logo} alt="Image" />
                                <h5>{skill.language}</h5>
                            </div>
                          ))}
                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
