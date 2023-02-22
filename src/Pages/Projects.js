import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

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
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/naveen3011/GETmore/main/Screenshot1.png"
              title="GETmore"
              description="GETmore is one of the sites. Full featured shopping cart
              User profile with orders
              Admin product management
              Admin user management
              Admin Order details page
              Mark orders as delivered option
              Checkout process (shipping, payment method, etc)
              Database seeder (products & users)."              link="https://github.com/naveen3011/GETmore" 
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/naveen3011/Attendance-Management-System/main/photo/3.png"
              title="Attendance-Management-System"
              description="Objective
              Nowadays everyone wants that technology can help them to make them work easily. So , I made one project which helps to take attendance so easily without any paperwork.Solution :
              The purpose of this project is to take attendance using face detection. This program makes the CSV files of present attendees automatically After successful face detection. Also, It will make a CSV file for registered students’ info.
              Domain :
              AI/ML and Computer-Vision.
              Face Recognition application is developed in python language using these libraries. OpenCV, Numpy, OS, Pandas, Tkinter."
              link="https://github.com/naveen3011/Attendance-Management-System"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/naveen3011/E-CELL/main/Screenshot2.png"
              title="E-CELL MMMUT Offical Website"
              description="∗ Developed an offical website of Entrepreneurship Cell MMMUT using HTML, CSS, JavaScript, Bootstrap,PHP.
              ∗ This website provide information about upcoming event and everything about Entrepreneurship Cell MMMUT.
              ∗ Used HTTP Request and Response to handle data coming from REST APIs."              link="https://github.com/naveen3011/E-CELL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
