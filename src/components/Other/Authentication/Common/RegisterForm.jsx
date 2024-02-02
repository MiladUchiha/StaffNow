"use client"
import { Href, ImagePath,PrivacyPolicy } from "../../../../Constant";
import { useAppSelector } from "../../../../Redux/Hooks";
import { MultiWithHeaderData } from "../../../../Data/Form&Table/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const RegisterForm = ({ logoClass }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
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
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {

    setIsLoading(true);

    await axios.post('/api/userExists', { email: data.email }).then((res) => {
      res.data.exists ? (toast.error("User already exists")
        , setIsLoading(false)) :
        axios.post('/api/bemannasRegister', data).then(async (res) => {

          toast.success("Account created successfully");

        })

    })
  };
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div>
      <div>
        <Link className={`logo ${logoClass}`} href={`/`}>
          <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
          <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="looginpage" />
        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={{ name: "", companyName: "", organizationNumber: "", address: "", branches: [], email: "", description: "", password: "", }} onSubmit={handleSubmit}>
          {({ setFieldValue, values }) => (
            <Form className="theme-form">
              <h4>Skapa konto</h4>
              <p>Mata in ditt företags uppgifter för att skapa ett konto</p>
              <FormGroup>
                <Row className="g-2">
                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Ditt namn</Label>
                    <Field
                      value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="form-control" type="text" name="firstname" required placeholder="Förnamn och efternamn" />
                  </Col>

                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Företagsnamn</Label>
                    <Field
                      value={data.companyName} onChange={(e) => setData({ ...data, companyName: e.target.value })}
                      className="form-control" type="text" name="lastname" required placeholder="Företagsnamn" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="g-2">
                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Organisationsnummer</Label>
                    <Field
                      value={data.organizationNumber} onChange={(e) => setData({ ...data, organizationNumber: e.target.value })}
                      className="form-control" type="text" name="OrgNum" required placeholder="xxxxxx-xxxx" />
                  </Col>

                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Adress</Label>
                    <Field
                      value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })}
                      className="form-control" type="text" name="adress" required placeholder="Gata 3, 111 11 Sigtuna" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="g-2">
                  <Col sm="6">
                    <Label className="col-form-label">Email address</Label>
                    <Field
                      value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                      name="email" type="email" className="form-control" required placeholder="exempel@company.com" />

                  </Col>
                  <Col sm="6">
                    <Label className="col-form-label">Lösenord</Label>
                    <div className="position-relative">
                      <Field
                        value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                        className="form-control" name="password" type={show ? "text" : "password"} required placeholder="*********" />
                      <div className="show-hide" onClick={() => setShow(!show)}><span className={`${show ? "" : "show"}`}></span></div>
                    </div>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup >
                <Label className="pt-0 col-form-label">Branch/Brancher</Label>
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
                  id="multiple-typeahead" labelKey={"name"} multiple options={MultiWithHeaderData} placeholder="Välj mellan brancher" className="form-control" />
              </FormGroup>
              <FormGroup>
                <Label className="pt-0 col-form-label">Beskrivning</Label>
               
                <Input
                value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })}
                className={`form-control`} type={"textarea"} placeholder={"En kort beskrivning av ditt företag"} rows={4} />
              </FormGroup>
              <FormGroup className="mb-0">
                <div className="checkbox p-0">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" htmlFor="checkbox1">Håller med<Link className="ms-2" href={Href}>{PrivacyPolicy}</Link></Label>
                </div>
                <Button type="submit" block color="primary" className="w-100">Skapa konto</Button>
              </FormGroup>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
