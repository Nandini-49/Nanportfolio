import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "CloudLaunch",
      description: "Static Web Hosting Service",
      imgUrl: projImg1,
      link: "https://github.com/Nandini-49/CloudLaunch",
    },
    {
      title: "Expense Tracker",
      description: "Vizualize Your Spending",
      imgUrl: projImg2,
      link: "https://github.com/Nandini-49/expense-tracker-app",
    },
    {
      title: "YouTube Clone App",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/Nandini-49/youtube-cln",
    },
    {
      title: "AEROTHON Route Tracker",
      description: "Find Your Way, and Never Be Lost!!",
      imgUrl: projImg1,
      link: "https://github.com/Nandini-49/Airothon-6.0",
    },
    {
      title: "Instagram Clone",
      description: "Join the Fever!!",
      imgUrl: projImg2,
      link: "https://github.com/Nandini-49/instagram_clone",
    },
    {
      title: "Kanaban Board",
      description: "Organize Your Life, Motion to Notion",
      imgUrl: projImg3,
      link: "https://github.com/Nandini-49/quicksell",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <p>
                    Through the years of learning web development, I have delved
                    into mulitple projects, and some of the most notable are
                    showcased below. Feel free to check them out on github, and
                    any feedback is greatly appreciated.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      hidden
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="someimage"
      ></img>
    </section>
  );
};
