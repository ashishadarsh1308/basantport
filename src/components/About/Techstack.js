import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiAdobeacrobatreader,
  SiCanva,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { CiVideoOn } from "react-icons/ci";
import { MdAddAPhoto } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { FaFileExcel } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFileWord } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeacrobatreader />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CiVideoOn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdAddAPhoto />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNewspaper />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiFilmProjector />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
    </Row>
  );
}

export default Techstack;
