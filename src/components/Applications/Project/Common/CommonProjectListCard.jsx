import { useState } from "react";
import { Comment, Done, ImagePath, Issues, Resolved } from "../../../../Constant";
import  axios  from "axios";
import { useRouter } from "next/navigation";
import { Badge, Col, Progress, Row, Button, Toast, ToastBody } from "reactstrap";
import {toast} from "sonner";
import Link from "next/link";

export const CommonProjectListCard= ({ item, type , user }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  let status;
  let statusWord1;
  let statusWord2;
  if (type === "uppdraggivare") {
    status = item.done;
    statusWord1 = "Pågående";
    statusWord2 = "Klart";
  } else {
    status = user.acceptedMissionId.includes(item.id);
    statusWord1 = "Väntande";
    statusWord2 = "Accepterade";
  }
  const deleteHandle = async () => {
    await axios.post(`/api/missions/deleteMission/`, { id: item.id }).then((res) => {
      console.log(res);
      toast.success("Uppdraget är raderad");
      router.refresh();
    });
  };
  const doneHandle = async () => {
    await axios.post(`/api/missions/doneMission/`, { id: item.id }).then((res) => {
      
      toast.success("Uppdraget är klart")
      router.refresh();
    }).catch((err) => {
      toast.error(err);
    });
  };
  const createChat = async () => {
    try {
      const response = await axios.post(`/api/chat/create`, {
        missionId: item.id,
        user,
        bemannasKontoId: item.bemannasKontoId,
      });
  
      if (response.data.chatExists) {
        // Chat already exists
        toast.info(response.data.message);
      } else {
        // Chat created successfully
        toast.success("Chat skapad!");
      }
    } catch (error) {
      toast.error("An error occurred while creating the chat.");
    }
  };
  const decline = async () => {
    await axios.post(`/api/missions/declineMission/`, { id: item.id,user: user} ).then((res) => {
      toast.success("Uppdraget är nekad");
      router.refresh();
    });
  };
   
      
     
  

  return (
    <Col xxl="4" lg="4" md="6">
      <div className={`project-box ${status? "b-light1-success" : "b-light1-primary"}`}>
        <Badge color={status? 'success' : 'primary'}>{status? statusWord2 : statusWord1}</Badge>
        <h5 className="f-w-500">{item.title}</h5>
        <div className="d-flex">
         
          <div className="flex-grow-1"><p>{item.jobTitle}</p></div>
        </div>
        
        <Row className="details">
          <Col xs="6"><span>Antal personal </span></Col>
          <Col xs="6" className={`txt-${status ? 'success' : 'primary'}`}>{item.antalPersonal}</Col>
          <Col xs="6"><span>Stad</span></Col>
          <Col xs="6" className={`txt-${status ? 'success' : 'primary'}`}>{item.area}</Col>
          <Col xs="6"><span>Betal alternativ</span></Col>
          <Col xs="6" className={`txt-${status ? 'success' : 'primary'}`}>{item.payway}</Col>
          <Col xs="6"><span>Tid period</span></Col>
          <Col xs="6" className={`txt-${status ? 'success' : 'primary'}`}>{item.startDate}-{item.endDate}</Col>
          <Col xs="6"><span>Deskription</span></Col>
          <Col xs="6" className={`txt-${status ? 'success' : 'primary'}`}>{item.comment}</Col>
        </Row>
        <p>{item.description}</p>
       
        <div className="project-status mt-4">
          <div className="d-flex mb-0 justify-end space-x-3">
           {type === "uppdraggivare" ? (
            <>
            {!status && (
               <Button className={`btn btn-success`} onClick={() => doneHandle()} key={2} color="transparent">Klart!</Button>)}
           
            <Button onClick={() => setOpen(true)} className={`btn btn-danger`} key={3} color="transparent">Radera</Button>
            </>
            ) : (
              <>
              {!user.acceptedMissionId.includes(item.id) ? (
                 <>
                 <Button className={`btn btn-success`} onClick={() => createChat()} key={2} color="transparent">Ansök</Button>
                 <Button className={`btn btn-danger`} onClick={() => decline()} key={3} color="transparent">Neka</Button>
                 </>):(
                  <Link href={`/chat/`}>
                   <Button className={`btn btn-success`}  key={2} color="transparent">
                      Chatt
                   </Button>
                   </Link>
                  )
              }
           
            
            </>
            )

            }
           
           
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
