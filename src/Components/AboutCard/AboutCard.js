import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Naveen kushwaha </span>
            <br />I am a Full Stack Developer and a Competitive programmer. <br />
            <br />I am pursing pre-final year B.Tech in Computer Science and Engineering in Madan Mohan Malaviya University of Technology Gorakhpur Uttar Pradesh.<br /> <br />
           <br />
            
            ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN etc.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses on Data Structure and Full Stack Development .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;