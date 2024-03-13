
import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks";
import { setActiveTab } from "../../../../Redux/Reducers/ProjectSlice";
import Link from "next/link";
import { CheckCircle, Info, PlusSquare, Target } from "react-feather";
import { Button, Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from "reactstrap";

export const ProjectListHead = ({type}) => {
  const {activeTab} = useAppSelector((state)=>state.project)
  const dispatch = useAppDispatch()
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  let one ;
  let two ;
  let three ;
  if (type === "uppdraggivare") {
    {
        one = "Alla";
        two = "Pågående";
        three = "Klart";
    }
  }else{
    {
        one = "Alla";
        two = "Väntande";
        three = "Accepterade";
    }
  }

  return (
    <Card>
      <Row>
        <Col md="6" className="p-0 d-flex">
          <Nav tabs className="border-tab" id="top-tab">
            <NavItem><NavLink  className={activeTab === '1' ? 'active' : ''} onClick={() => dispatch(setActiveTab("1"))}><Target />{one}</NavLink></NavItem>
            <NavItem><NavLink  className={activeTab === '2' ? 'active' : ''} onClick={() => dispatch(setActiveTab("2"))}><Info />{two}</NavLink></NavItem>
            <NavItem><NavLink  className={activeTab === '3' ? 'active' : ''} onClick={() => dispatch(setActiveTab("3"))}><CheckCircle />{three}</NavLink></NavItem>
          </Nav>
        </Col>
        <Col md="6">
         
          <Link className="btn btn-primary" href={`/uppdrag-givare/add-mission`}><PlusSquare />Lägg till uppdrag</Link>
        </Col>
      </Row>
    </Card>
  );
};
