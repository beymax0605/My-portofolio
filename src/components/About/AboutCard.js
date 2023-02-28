import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Derek Haru </span>
            from <span className="purple"> California, USA.</span>
            <br />I'm a Senior Full-Stack Developer with extensive experience and a degree in Computer Science.
            My HTML/CSS/JavaScript skills are strong, and I'm proficient in most popular front-end libraries and frameworks, including React, Next, JavaScript/TypeScript/ECMAScript, SCSS, Sass, Tailwinds, Material-UI, and more.
            I'm proficient in all phases of the Software Development Life Cycle (SDLC), including Analysis, Design, Development, Documentation, Testing, Deployment, Version Control, and production support.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
