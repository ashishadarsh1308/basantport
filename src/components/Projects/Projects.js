import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import s1 from "../../Assets/s2.png";
import s3 from "../../Assets/s3.png";
import s4 from "../../Assets/s4.png";
import s5 from "../../Assets/s5.png";
import s6 from "../../Assets/s6.png";
import s7 from "../../Assets/s7.png";
import s8 from "../../Assets/s8.png";
import s9 from "../../Assets/s9.png";
// import s8 from "../../Assets/s8.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s1}
              isBlog={false}
              title="Sample"
              demoLink="https://www.instagram.com/p/C2-OQanJT5I/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s3}
              isBlog={false}
              title="Sample"
              demoLink="https://www.instagram.com/p/C2nIrJZSrSr/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s4}
              isBlog={false}
              title="Sample"
              demoLink="https://www.instagram.com/p/C50l3K9tIYy/"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s5}
              isBlog={false}
              title="Sample"
              demoLink="https://www.instagram.com/p/C088rpnoNF3/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s6}
              isBlog={false}
              title="Sample"
              demoLink="https://www.instagram.com/p/C0jZd6mySfb/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s7}
              isBlog={false}
              title="Sample"
              demoLink="https://www.instagram.com/p/C0jWQSlyf5r/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          For more <strong className="purple"> content </strong>  visit
        </h1>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s8}
              isBlog={false}
              title="YouTube Channel 1"
              demoLink="https://www.youtube.com/@desicelebritysbasant1127"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s9}
              isBlog={false}
              title="My Insta"
              demoLink="https://www.instagram.com/p/C0jWQSlyf5r/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s9}
              isBlog={false}
              title="YouTube Channel 2"
              demoLink="https://www.youtube.com/@STRA447"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
