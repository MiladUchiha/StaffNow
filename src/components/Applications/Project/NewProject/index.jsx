"use client"
import React from "react";
import { Card, CardBody, Container, FormFeedback } from "reactstrap";
import axios from "axios"
import { toast } from 'sonner'
import {  useAppSelector } from "../../../../Redux/Hooks";
import { CountryDataList, jobs} from "../../../../Data/Form&Table/Form";
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
import * as Yup from "yup";


const NewProjectContainer = ({user}) => {
 
  const [submitErrors, setSubmitErrors ] = useState(false)
  const [title, setTitle] = useState("");
  const [jobTitle, setJobTitle] = useState("")
  const [payway, setPayway] = useState("Timlön");
  const [priority, setPriority] = useState("Låg");
  const [antalPersonal, setAntalPersonal] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(user?.id);
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const router = useRouter();

  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const initialValues = {
    title,
    jobTitle,
    payway,
    priority,
    antalPersonal,
    area,
    description,
    startDate,
    endDate
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format dates as year/month/day
    const  formattedStartDate =  [startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate()].join('/');
    const formattedEndDate = [endDate.getFullYear(), endDate.getMonth() + 1, endDate.getDate()].join('/');
    const formattedArea = area[0];
    const formattedJobTitle = jobTitle[0];

  
    await axios.post("/api/missions", {
      title,
      jobTitle: formattedJobTitle,
      payway,
      priority,
      antalPersonal,
      area: formattedArea,
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
              <Formik  initialValues={initialValues} >
                {({ values, errors, handleBlur, handleChange}) => (
                  <Form className="theme-form" onSubmit={handleSubmit} >
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label check>Projekts titel</Label>
                          <Field
                            
                            value={title}

                            onBlur={handleBlur}
                       onChange={(e) => { setTitle(e.target.value), handleChange(e) }}
                      className={`form-control ${submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`}`}
                            type="text" name="title"  placeholder="Projekts namn *" />
                        {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label check>Jobb titel</Label>
                          <Typeahead
                          
                            selected={jobTitle}
                            onBlur={handleBlur}
                            onChange={(selected) => {
                              // Check if there is at least one selected item and update accordingly
                              
                                setJobTitle(selected);
                                handleChange;
                              
                            }}
                            options={jobs} placeholder="Jobb kategorier" id="PreFetch"   className={`form-control ${submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`}`}/>
                        {errors.jobTitle && <FormFeedback>{errors.jobTitle}</FormFeedback>}

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="4">
                        <FormGroup>
                          <Label check>Projekts område</Label>


                          <Typeahead
                            onBlur={handleBlur}
                            selected={area}
                            onChange={(selected) => {
                              // Check if there is at least one selected item and update accordingly
                              
                                setArea(selected);
                                handleChange;
                              
                            }}
                            options={CountryDataList}
                            placeholder="Plats *"
                            id="PreFetch"
                            className={`form-control ${submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`}`}
                          />
                        {errors.area && <FormFeedback>{errors.area}</FormFeedback>}


                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Label check>Betalt alternativ</Label>
                          <Field
                          
                            value={payway}
                            
                            onChange={(e) => setPayway(e.target.value)}
                            className={`form-control form-select `}
                            
                            as="select" >

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
                           
                            onChange={(e) =>  setPriority(e.target.value)}
                            className={`form-control form-select`}
                            
                            as="select" placeholder={PriorityPlaceholder} >
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
                            
                            onBlur={handleBlur}
                            onChange={(e) => { setAntalPersonal(e.target.value), handleChange }}
                            className={`form-control ${submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`}`}
                            type="number" placeholder={ProjectProgressPlaceholder} />
                        {errors.antalPersonal && <FormFeedback>{errors.antalPersonal}</FormFeedback>}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup className="d-flex flex-column align-items-stretch">
                          <Label check>{StartingDate}</Label>
                          <DatePicker
                          onBlur={handleBlur}
                      onChange={(date) => setStartDate(date)}
                      className={`form-control datepicker-here `}       
                            selected={startDate}  />
                       
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup className="d-flex flex-column align-items-stretch">
                          <Label check>{EndingDate}</Label>
                          <DatePicker
                          onBlur={handleBlur}
                      onChange={(date) => setEndDate(date)}
                      className={`form-control datepicker-here`}
                          selected={endDate}  />
                        
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label check>{EnterSomeDetails}</Label>
                          <Field
                          
                            value={description}
                            
                            onBlur={handleBlur}
                            onChange={(e) => { setDescription(e.target.value), handleChange(e) }}
                            className={`form-control ${submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`}`}
                            as="textarea"  rows={3} />
                            {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                             


                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div className="text-end">
                          <Button onClick={()=> setSubmitErrors(true)} type="submit" color="success" className="me-3">Lägg till</Button>
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
