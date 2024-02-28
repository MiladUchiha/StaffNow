"use client"
import React from "react";
import { Card, CardBody, Container } from "reactstrap";
import axios from "axios"
import { toast } from 'sonner'
import {  useAppSelector } from "../../../../Redux/Hooks";
import { CountryDataList} from "../../../../Data/Form&Table/Form";
import { Formik, Form } from "formik";
import { Typeahead } from "react-bootstrap-typeahead";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "reactstrap";
import { EnterSomeDetails } from "../../../../Constant";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { Field } from "formik";
import { Medium,  StartingDate, EndingDate } from "../../../../Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ProjectStatus, ProjectProgress, ProjectProgressPlaceholder, FixPrice, Hourly, Priority, Low, High, Urgent, PriorityPlaceholder } from "../../../../Constant";

const NewProjectContainer = ({user}) => {
  
  const [title, setTitle] = useState("");
  const [jobTitle, setJobTitle] = useState("")
  const [payway, setPayway] = useState("");
  const [priority, setPriority] = useState("");
  const [antalPersonal, setAntalPersonal] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(user.id);
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const router = useRouter();

  const { i18LangStatus } = useAppSelector((state) => state.langSlice);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format dates as year/month/day
    const formattedStartDate = [startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate()].join('/');
    const formattedEndDate = [endDate.getFullYear(), endDate.getMonth() + 1, endDate.getDate()].join('/');
  
    await axios.post("/api/missions", {
      title,
      jobTitle,
      payway,
      priority,
      antalPersonal,
      area,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      description,
      userId
    }).then((res) => {
      console.log(res);
      toast.success("Uppdraget har lagts till!");
      router.refresh("/dashboard");
      router.push(`/dashboard`);

    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Formik>
                {() => (
                  <Form className="theme-form" onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label check>Projekts titel</Label>
                          <Field
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text" className="form-control" placeholder="Projekts namn *" />

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label check>Jobb titel</Label>
                          <Typeahead
                            selected={jobTitle}
                            onChange={(selected) => {
                              // Check if there is at least one selected item and update accordingly
                              
                                setJobTitle(selected);
                              
                            }}
                            options={CountryDataList} placeholder="Countries" id="PreFetch" />

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="4">
                        <FormGroup>
                          <Label check>Projekts område</Label>


                          <Typeahead
                            selected={area}
                            onChange={(selected) => {
                              // Check if there is at least one selected item and update accordingly
                              
                                setArea(selected);
                              
                            }}
                            options={CountryDataList}
                            placeholder="Plats *"
                            id="PreFetch"
                          />


                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Label check>Betalt alternativ</Label>
                          <Field
                            value={payway}
                            onChange={(e) => setPayway(e.target.value)}
                            as="select" className="form-control form-select">

                            <option value={Hourly}>{Hourly}</option>
                            <option value={FixPrice}>{FixPrice}</option>
                          </Field>
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Label>{Priority}</Label>
                          <Field
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            as="select" placeholder={PriorityPlaceholder} className="form-control form-select">
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
                          <Field
                            value={antalPersonal}
                            onChange={(e) => setAntalPersonal(e.target.value)}
                            className="form-control" type="number" placeholder={ProjectProgressPlaceholder} />
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup className="d-flex flex-column align-items-stretch">
                          <Label check>{StartingDate}</Label>
                          <DatePicker

                            className="datepicker-here form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
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
                          <Field
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea" className="form-control" rows={3} />

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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewProjectContainer;
