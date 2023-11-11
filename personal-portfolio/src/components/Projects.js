import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import darkBg from "../assets/img/dark-bg.jpg";
import analytics from "../assets/img/analytics-dashboard.png";
import quiz from "../assets/img/quiz-app.png"
import medical from "../assets/img/medical-transcription.png";
import connector from "../assets/img/ConnectorNet.png";
import automation from "../assets/img/Automation.jpeg";
import tracking from "../assets/img/web-tracking.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Analytics Dashoard",
      description: "Engineered an interactive analytics dashboard within the admin portal of a hospital navigation system using React and Chart.js, providing a data-driven compass for informed decision-making.",
      imgUrl: analytics,
    },
    {
      title: "Quiz Application",
      description: "Spearheaded the development of a Quiz App, an engaging and user-friendly internal quiz application tailored for employees, fostering a culture of learning and knowledge-sharing within the organization.",
      imgUrl: quiz,
    },
    {
      title: "Medical Transcription Analysis",
      description: "Pioneered the front-end development of a cutting-edge Medical Transcription Analysis system, capturing doctor-patient conversations and effortlessly delivering accurate transcriptions via email, improving healthcare communication.",
      imgUrl: medical,
    },
    {
      title: "Automation Testing",
      description: "Led the strategic migration of a healthcare ecommerce app's entire testing framework from Testcafe to Nightwatch, ensuring a seamless transition and enhanced testing capabilities.",
      imgUrl: automation,
    },
    {
      title: "Tracking Application",
      description: "Crafted an application using React and Next.js that revolutionizes tracker tracking, leveraging Puppeteer and Node.js to optimize data filtration and delivery for a superior user experience.",
      imgUrl: tracking,
    },
    {
      title: "Connector App",
      description: "Collaborated on the captivating UI design of a Connector App, an exclusive network fostering meaningful connections between top healthcare executives and trusted vendor-partners, facilitating valuable business collaborations.",
      imgUrl: connector,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Experience a journey through a diverse range of projects, from pioneering healthcare solutions to enhancing user experiences and optimizing testing frameworks. Each project showcases a commitment to innovation and a passion for creating meaningful digital solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
