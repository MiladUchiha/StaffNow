import { Comment, Done, ImagePath, Issues, Resolved } from "../../../../Constant";

import { Badge, Col, Progress, Row, Button } from "reactstrap";

export const CommonProjectListCard= ({ item }) => {
  return (
    <Col xxl="4" lg="4" md="6">
      <div className={`project-box ${item.done? "b-light1-success" : "b-light1-primary"}`}>
        <Badge color={item.done? 'success' : 'primary'}>{item.done? "Klart" : "Pågående"}</Badge>
        <h5 className="f-w-500">{item.title}</h5>
        <div className="d-flex">
         
          <div className="flex-grow-1"><p>{item.jobTitle}</p></div>
        </div>
        
        <Row className="details">
          <Col xs="6"><span>Antal personal </span></Col>
          <Col xs="6" className={`txt-${item.done ? 'success' : 'primary'}`}>{item.antalPersonal}</Col>
          <Col xs="6"><span>Stad</span></Col>
          <Col xs="6" className={`txt-${item.done ? 'success' : 'primary'}`}>{item.area}</Col>
          <Col xs="6"><span>Betal alternativ</span></Col>
          <Col xs="6" className={`txt-${item.done ? 'success' : 'primary'}`}>{item.payway}</Col>
          <Col xs="6"><span>Tid period</span></Col>
          <Col xs="6" className={`txt-${item.done ? 'success' : 'primary'}`}>{item.startDate}-{item.endDate}</Col>
          <Col xs="6"><span>Deskription</span></Col>
          <Col xs="6" className={`txt-${item.done ? 'success' : 'primary'}`}>{item.comment}</Col>
        </Row>
        <p>{item.description}</p>
       
        <div className="project-status mt-4">
          <div className="d-flex mb-0 justify-end">
            
           <Button className={`btn btn-primary`} key={2} color="transparent">Redigera</Button>
          </div>
         
        </div>
      </div>
    </Col>
  );
};
