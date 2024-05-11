import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaGoogleDrive } from "react-icons/fa";
import resume from "../../Assets/resume.png";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div>
            <Button
              href="https://drive.google.com/file/d/10qrDWKA7Du2_1bpbDXD2dST07mOl67Ny/view?usp=drivesdk"
              target="_blank"
              className="fork-btn-inner"
            >
              <FaGoogleDrive /> View CV
            </Button>
          </div>
          <br />
          <br />
          <img
            src={resume}
            alt="home pic"
            className="img-fluid"
            style={{ maxWidth: "850px" }}
          />
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
