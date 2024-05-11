import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm an, enthusiastic individual deeply committed to making waves in the
              <br />
              <br />  dynamic world of social media. Despite my status as a fresher, I've already delved into
              <i>
                <b className="purple"> creating YouTube blogs and videos. </b>
              </i>
              <br />
              <br />
              Through this hands-on experience, I've gained a profound understanding of
              <i>
                <b className="purple">social media dynamics, </b> and
                also in areas related to{" "}
                <b className="purple">
                  Video Editing,
                  Blogging Mojo,
                  Photography,
                  News Production
                </b>
              </i>
              <br />
              <br />
              I'm eager to further develop my skills,
              connect with industry professionals, and contribute
              <i>
                <b className="purple">
                  {" "}
                  meaningfully to the evolving landscape
                </b>
              </i>
              &nbsp; of social media.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@STRA447"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <CiYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sundram-basant-a817a0288/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/star_sb.20/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
