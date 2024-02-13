"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import {  FormGroup, Label, Col, Container, Row } from "reactstrap";
import ButtonEdit from "../../../Button";
import { toast } from "sonner";
import Image from "next/image";
import { set } from "date-fns";
const LoginSimpleContainer = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);


  const router = useRouter()
  const submitHandler = async (e) => {

    setLoading(true)
  
    signIn('credentials',
      {
        ...data, redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error)
          setLoading(false)
        }

        if (callback?.ok && !callback?.error) {
          
          toast.success('Du har loggat in!')
          router.push('/dashboard')
          router.refresh()
          router.refresh('dashboard',)
        }
      })
   
  };
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
          <div>
      <div>
        <Link className={` logo  flex`} href={`/`} >
          <Image className="img-fluid for-light" src={`/logo.png`} width={100} height={100} alt="looginpage" />
          <span className="ml-2 text-3xl font-bold tracking-wide text-gray-800">StaffNow</span>

        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submitHandler} >
          {() => (
            <Form className="theme-form">
              <h4>Logga in i ditt konto</h4>
              <p>Skriv ditt email och lösenord</p>
              <FormGroup className="mb-0">
                <Label className="col-form-label">Email Address</Label>
                <Field
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="form-control" name="email" type="text" placeholder="Exempel@gmail.com" required />
                <ErrorMessage name="email" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="mb-0">
                <Label className="col-form-label">Lösenord</Label>
                <div className="position-relative">
                  <Field
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="form-control" type={show ? "text" : "password"} name="password" required placeholder="*********" />
                  <div className="show-hide" onClick={() => setShow(!show)}><span className={`${show ? "" : "show"}`}> </span></div>
                </div>
                <ErrorMessage name="password" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="form-group mb-0">

                
                <div className="text-end mt-3">
                  
                  {loading ? (
                    <ButtonEdit action="Vänta..." color="primary" className="btn-block" />
                  ) : (
                    <ButtonEdit action="Logga in" color="primary" className="btn-block" />
                  )}
                  </div>
              </FormGroup>

              <Link className="ms-2" href={`/auth/reset-password`}>Glömt lösenord?</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSimpleContainer;
