import { NewProjectInitialValue, NewProjectValidation, ProjectListData } from "../../../../Data/Application/Project";
import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks";
import { setCreatedData } from "../../../../Redux/Reducers/ProjectSlice";
import { CountryDataList, PreFetchData } from "../../../../Data/Form&Table/Form";
import { Formik, Form } from "formik";
import { Typeahead } from "react-bootstrap-typeahead";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TitleAndClientSection } from "./TitleAndClientSection";
import { MultiWithHeaderData, MultiWithHeaderData2 } from "../../../../Data/Form&Table/Form";
import { Button } from "reactstrap";
import { ProjectSection } from "./ProjectSection";
import { DateSection } from "./DateSection";
import { DescriptionSection } from "./DescriptionSection";
import { ButtonSection } from "./ButtonSection";
import UploadProjectFile from "./UploadProjectFile";
import { EnterSomeDetails } from "../../../../Constant";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { ClientName, ClientNamePlaceholder, ProjectTitle, ProjectTitlePlaceholder } from "../../../../Constant";
import { ErrorMessage, Field } from "formik";
import { Medium, ProjectSize, ProjectSizePlaceholder, Small, Big, StartingDate, EndingDate } from "../../../../Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ProjectStatus, ProjectProgress, ProjectProgressPlaceholder, FixPrice, Hourly, Priority, Low, High, Urgent, PriorityPlaceholder } from "../../../../Constant";

const CreateNewProjectForm = () => {
  const router = useRouter();

  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const dispatch = useAppDispatch();
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const projectSubmit = (values) => {


    router.push(`/${i18LangStatus}/project/project_list`);
  };
  const [data, setData] = useState({
    name: "",
    companyName: "",
    organizationNumber: "",
    address: "",
    branches: [], // State for branch selection
    email: "",
    password: "",
    description: "",

  });
s
  const [jobTitle, setJobTitle] = useState("")
  const [antalPersonal, setAntalPersonal] = useState("");
  const [timmar, setTimmar] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(user.id);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Formik initialValues={NewProjectInitialValue} validationSchema={NewProjectValidation} onSubmit={projectSubmit}>
      {({ setFieldValue, value }) => (
        <Form className="theme-form">
          <Row>
            <Col>
              <FormGroup>
                <Label check>Projekts titel</Label>
                <Field name="title" type="text" className="form-control" placeholder="Projekts namn *" />
                
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label check>Jobb titel</Label>
                <Typeahead

                  selected={data.branches.map(branch => ({ name: branch }))}
                  onChange={(selected) => {
                    // Extract branch names from the selection
                    const branchNames = selected.map((item) => item.name);

                    // Update local component state
                    setData({ ...data, branches: branchNames });

                    // Update Formik state for the 'branches' field to store branch names
                    setFieldValue('branches', branchNames);
                  }}
                  id="multiple-typeahead" labelKey={"name"} multiple options={MultiWithHeaderData} placeholder="Välj mellan brancher" className="" />
               
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <FormGroup>
                <Label check>Projekts område</Label>


                <Typeahead options={CountryDataList} placeholder="Countries" id="PreFetch" />

                
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label check>{ProjectStatus}</Label>
                <Field name="type" as="select" className="form-control form-select">
                  <option value={Hourly}>{Hourly}</option>
                  <option value={FixPrice}>{FixPrice}</option>
                </Field>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label>{Priority}</Label>
                <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-control form-select">
                  <option value={Low}>{Low}</option>
                  <option value={Medium}>{Medium}</option>
                  <option value={High}>{High}</option>
                  <option value={Urgent}>{Urgent}</option>
                </Field>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <FormGroup>
                <Label check>Antal personal</Label>
                <Field name="progress" className="form-control" type="number" placeholder={ProjectProgressPlaceholder} />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup className="d-flex flex-column align-items-stretch">
                <Label check>{StartingDate}</Label>
                <DatePicker className="datepicker-here form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup className="d-flex flex-column align-items-stretch">
                <Label check>{EndingDate}</Label>
                <DatePicker className="datepicker-here form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label check>{EnterSomeDetails}</Label>
                <Field name="description" as="textarea" className="form-control" rows={3} />
                
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="text-end">
                <Button type="submit" color="success" className="me-3">Lägg till</Button>
                <Link className="btn btn-danger" href={`/${i18LangStatus}}/project/project_list`}>Avbryt</Link>
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewProjectForm;
