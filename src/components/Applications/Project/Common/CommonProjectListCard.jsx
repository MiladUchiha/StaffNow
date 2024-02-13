import { useState } from "react";
import { Comment, Done, ImagePath, Issues, Resolved } from "../../../../Constant";
import  axios  from "axios";
import { useRouter } from "next/navigation";
import { Badge, Col, Progress, Row, Button, Toast, ToastBody } from "reactstrap";
import {toast} from "sonner";

export const CommonProjectListCard= ({ item }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const deleteHandle = async () => {
    await axios.post(`/api/missions/deleteMission/`, { id: item.id }).then((res) => {
      console.log(res);
      toast.success("Uppdraget är raderad");
      router.refresh();
    });
  };
   
      
     
  

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
          <div className="d-flex mb-0 justify-end space-x-3">
           
           <Button className={`btn btn-primary`} key={2} color="transparent">Redigera</Button>
           <Button onClick={() => setOpen(true)} className={`btn btn-danger`} key={3} color="transparent">Radera</Button>
           
          </div>
         
        </div>
      </div>
      <Toast fade isOpen={open} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="toast-header toast-img">
              <img className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
              <strong className="me-auto">StaffNow</strong>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </div>
            <ToastBody className="toast-dark">
              <h6 className="mb-2"></h6>
              <p className="mb-0">Vill du försätta?</p>
              <div className="mt-2 pt-2 border-top d-flex gap-2">
                <Button color="dark" size="sm" onClick={() => setOpen(false)}>Inte säkert</Button>
                <Button color="danger" size="sm" onClick={() => {deleteHandle(), setOpen(false)}}>Redera uppdraget</Button>
              </div>
            </ToastBody>
          </Toast>
    </Col>
  );
};
