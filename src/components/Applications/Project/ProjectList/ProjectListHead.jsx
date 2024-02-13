import { All, CreateNewProject, Doing, Done, Href } from "../../../../Constant";
import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks";
import { setActiveTab } from "../../../../Redux/Reducers/ProjectSlice";
import Link from "next/link";
import { CheckCircle, Info, PlusSquare, Target } from "react-feather";
import { Button, Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from "reactstrap";

export const ProjectListHead = () => {
  const {activeTab} = useAppSelector((state)=>state.project)
  const dispatch = useAppDispatch()
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Card>
      <Row>
        <Col md="6" className="p-0 d-flex">
          <Nav tabs className="border-tab" id="top-tab">
            <NavItem><NavLink href={Href} className={activeTab === '1' ? 'active' : ''} onClick={() => dispatch(setActiveTab("1"))}><Target />Alla</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={activeTab === '2' ? 'active' : ''} onClick={() => dispatch(setActiveTab("2"))}><Info />Pågående</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={activeTab === '3' ? 'active' : ''} onClick={() => dispatch(setActiveTab("3"))}><CheckCircle />Klart</NavLink></NavItem>
          </Nav>
        </Col>
      
        <Col md="6">
         
          <Link className="btn btn-primary" href={`/add-mission`}><PlusSquare />Lägg till uppdrag</Link>
        </Col>
      </Row>
    </Card>
  );
};
