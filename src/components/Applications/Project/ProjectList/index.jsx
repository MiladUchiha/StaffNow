import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectListHead } from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = ({mission, type, user}) => {


  return (
    <Container fluid>
      <Row className="project-cards">
  
        <Col md="12" className="project-list">
          <ProjectListHead type={type} />
        </Col>

        
        
          
        <Col sm="12">
          {mission.length === 0 && (
            <div className="text-center mt-5">
              {type === "uppdraggivare" ? 'Du har inga uppdrag än' : 'Inga matchande uppdrag hittades'}
            </div>
          )}
          {mission.length > 0 && (
            <ProjectListTabContent mission={mission} user={user} type={type} />
          )}
          
          
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectListContainer;
