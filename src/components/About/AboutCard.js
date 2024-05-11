import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sundram Basant </span>
            from <span className="purple"> Motihari, Bihar, India.</span>
            <br />
            I am currently doing youtube content and searching for a job in Video Editing
            Blogging Mojo
            Photography
            News Production.
            <br />
            Pg diploma in Hindi Journalism Indian
            Institute of Mass Communication (IIMC)
            Delhi
            <br />
            <br />
            Despite being a fresher, I've created
            YouTube blogs and videos, gaining a deep understanding of social media
            dynamics.
            <br />
            <br />
            And my Hobbies includes:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
