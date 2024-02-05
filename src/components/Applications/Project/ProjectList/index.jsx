import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectListHead } from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = ({mission}) => {
  return (
    <Container fluid>
      <Row className="project-cards">
        <Col md="12" className="project-list">
          <ProjectListHead />
        </Col>
        <Col sm="12">
          {mission.length === 0 && (
            <div className="text-center mt-5">
              <h4>Inga projekt hittades</h4>
            </div>
          )}
          <ProjectListTabContent mission={mission} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectListContainer;
