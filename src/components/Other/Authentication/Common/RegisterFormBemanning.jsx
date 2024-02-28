"use client"
import { Href, ImagePath,PrivacyPolicy } from "../../../../Constant";
import { useAppSelector } from "../../../../Redux/Hooks";
import { MultiWithHeaderData, MultiWithHeaderData2 } from "../../../../Data/Form&Table/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row, FormFeedback } from "reactstrap";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as Yup from 'yup';
import { ro } from "date-fns/locale";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Lösenordet måste vara minst 8 tecken långt")
    .required("Lösenord krävs"),
  organizationNumber: Yup.string()
    .matches(/^\d{6}-\d{4}$/, "Fel format")
    .required("Organisationsnummer krävs"),
  address: Yup.string()
    .min(3, "Adressen måste vara minst 3 tecken lång")
    .required("Adress krävs"),
  email: Yup.string()
    .email("Ogiltig e-postadress")
    .required("E-postadress krävs"),
  name: Yup.string()
    .min(3, "Namnet måste vara minst 3 tecken långt")
    .required("Namn krävs"),
  companyName: Yup.string()
    .required("Företagsnamn krävs"),
  branches: Yup.array()
    .min(1, "Minst en branch måste väljas")
    .required("Branch krävs"),
  areas: Yup.array()
    .min(1, "Minst ett område måste väljas")
    .required("Område krävs"),
  description: Yup.string()
    .required("Beskrivning krävs")
    .max(500, "Beskrivningen får inte vara längre än 500 tecken"),
  crewNumber: Yup.number()
    .required("Antal personal krävs"),
  

  // Lägg till övriga fältvalideringar här
});

export const RegisterForm = ({ logoClass }) => {
  const initialValues = {
    name: "",
    companyName: "",
    organizationNumber: "",
    address: "",
    branches: [], // State for branch selection
    email: "",
    password: "",
    description: "",
    crewNumber: "",
    areas: [],
    
    // State for service areas
  };
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [submitErrors, setSubmitErrors] = useState(false);
  const [data, setData] = useState({
    name: "",
    companyName: "",
    organizationNumber: "",
    address: "",
    branches: [], // State for branch selection
    crewNumber: "",
    areas: [], // State for service areas
    email: "",
    password: "",
    description: "",
   
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {

    setIsLoading(true);
    toast.message("Vänligen vänta...");

    await axios.post('/api/userExists', { email: data.email }).then((res) => {
      res.data.exists ? (toast.error("User already exists")
        , setIsLoading(false)) :
        axios.post('/api/bemanningsRegister', data).then(async (res) => {

          router.push("/email-sent");
          toast.success("Konto skapat");
          toast.success("Skickar vidare")

          

        })

    })
  };
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div>
      <div>
        <Link className={`logo ${logoClass}`} href={`/`}>
          <Image width={50} height={50} className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
          <Image width={50} height={50} className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="looginpage" />
        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ setFieldValue, values, errors, handleBlur, handleChange, }) => (
            <Form className="theme-form">
              <h4>Skapa konto</h4>
              <p>Mata in ditt företags uppgifter för att skapa ett konto</p>
              <FormGroup>
                <Row className="g-2">
                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Ditt namn</Label>
                    <Field
                      value={data.name} 
                      onBlur={handleBlur}
                       onChange={(e) => { setData({ ...data, name: e.target.value }), handleChange(e) }}
                      className={`form-control ${submitErrors && `${errors.name ? "is-invalid" : "is-valid"}`}`}
                       type="text" name="name"  placeholder="Förnamn och efternamn" />
                       {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
                  </Col>

                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Företagsnamn</Label>
                    <Field
                      value={data.companyName}
                      onBlur={handleBlur}
                       onChange={(e) => { setData({ ...data, companyName: e.target.value }), handleChange(e) }}
                      className={`form-control ${submitErrors && `${errors.companyName ? "is-invalid" : "is-valid"}`}`}
                      type="text" name="companyName" required placeholder="Företagsnamn" />
                      {errors.companyName && <FormFeedback>{errors.companyName}</FormFeedback>}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="g-2">
                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Organisationsnummer</Label>
                    <Field
                      value={data.organizationNumber}
                      onBlur={handleBlur}
                       onChange={(e) => { setData({ ...data, organizationNumber: e.target.value }), handleChange(e) }}
                      className={`form-control ${submitErrors && `${errors.organizationNumber ? "is-invalid" : "is-valid"}`}`}
                      type="text" name="organizationNumber" required placeholder="xxxxxx-xxxx" />
                      {errors.organizationNumber && <FormFeedback>{errors.organizationNumber}</FormFeedback>}
                  </Col>

                  <Col sm="6">
                    <Label className="pt-0 col-form-label">Adress</Label>
                    <Field
                      value={data.address} 
                      onBlur={handleBlur}
                       onChange={(e) => { setData({ ...data, address: e.target.value }), handleChange(e) }}
                      className={`form-control ${submitErrors && `${errors.address ? "is-invalid" : "is-valid"}`}`}
                       type="text" name="address" required placeholder="Gata 3, 111 11 Stockholm" />
                        {errors.address && <FormFeedback>{errors.address}</FormFeedback>}
                  </Col>
                </Row>
              </FormGroup>
              
              <FormGroup >
              <Row className="g-2">
                  <Col sm="6">
                  <Label className="pt-0 col-form-label">Branch/Brancher</Label>
                <Typeahead
                
                onBlur={handleBlur}
                  selected={data.branches.map(branch => ({ name: branch }))}
                  onChange={(selected) => {
                    handleChange
                    // Extract branch names from the selection
                    const branchNames = selected.map((item) => item.name);

                    // Update local component state
                    setData({ ...data, branches: branchNames });

                    // Update Formik state for the 'branches' field to store branch names
                    setFieldValue('branches', branchNames);
                  }}
                  id="multiple-typeahead" labelKey={"name"} multiple options={MultiWithHeaderData} placeholder="Välj mellan brancher" className={`form-control ${submitErrors && `${errors.address ? "is-invalid" : "is-valid"}`}`} />
                  {errors.branches && <FormFeedback>{errors.branches}</FormFeedback>}
                  </Col>

                  <Col sm="6">
                  <Label className="pt-0 col-form-label">Tjänste område</Label>
                <Typeahead
                onBlur={handleBlur}
                  selected={data.areas.map(area => ({ area: area }))}
                  onChange={(selected) => {
                    handleChange
                    // Extract branch names from the selection
                    const areaNames = selected.map((item) => item.area);

                    // Update local component state
                    setData({ ...data, areas: areaNames });


                    // Update Formik state for the 'branches' field to store branch names
                    setFieldValue('areas', areaNames);
                  }}
                  id="multiple-typeahead" labelKey={"area"} multiple options={MultiWithHeaderData2} placeholder="Vilka tjänste områdes" className={`form-control ${submitErrors && `${errors.address ? "is-invalid" : "is-valid"}`}`} />
                  {errors.areas && <FormFeedback>{errors.areas}</FormFeedback>}
                  </Col>
                </Row>
               
              </FormGroup>
              <FormGroup >
                <Label className="pt-0 col-form-label">Antal Personal</Label>
                <Field
                required
                  value={data.crewNumber}
                  onBlur={handleBlur}
                  onChange={(e) => { setData({ ...data, crewNumber: e.target.value }), handleChange(e) }}
                 className={`form-control ${submitErrors && `${errors.crewNumber ? "is-invalid" : "is-valid"}`}`}
                       type="number" name="crewNumber"  placeholder="Hur många personel har ni tillgänglig?" />
                        {errors.crewNumber && <FormFeedback>{errors.crewNumber}</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Row className="g-2">
                  <Col sm="6">
                    <Label className="col-form-label">Email address</Label>
                    <Field
                      value={data.email} 
                      onBlur={handleBlur}
                      onChange={(e) => { setData({ ...data, email: e.target.value }), handleChange(e) }}
                     className={`form-control ${submitErrors && `${errors.email ? "is-invalid" : "is-valid"}`}`}
                      name="email" type="email" required placeholder="exempel@company.com" />
                      {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
                  </Col>
                  <Col sm="6">
                    <Label className="col-form-label">Lösenord</Label>
                    <div className="position-relative">
                      <Field
                        value={data.password} 
                        onBlur={handleBlur}
                        onChange={(e) => { setData({ ...data, password: e.target.value }), handleChange(e) }}
                       className={`form-control ${submitErrors && `${errors.password ? "is-invalid" : "is-valid"}`}`}
                        name="password" type={show ? "text" : "password"}  placeholder="*********" />
                        {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
                      <div className="show-hide" onClick={() => setShow(!show)}><span className={`${show ? "" : "show"}`}></span></div>
                    </div>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Label check className="pt-0 col-form-label">Beskrivning</Label>

                <Input
                required                  value={data.description}
                  onBlur={handleBlur}
                  onChange={(e) => { setData({ ...data, description: e.target.value }), handleChange(e) }}
                  className={`form-control ${submitErrors && `${errors.description ? "is-invalid" : "is-valid"}`}`} type={"textarea"} name="description" placeholder={"En kort beskrivning av ditt företag"} rows={4} />
                {errors.description && <FormFeedback>{errors.description}</FormFeedback>}

              </FormGroup>
              <FormGroup className="mb-0">
                <div className="checkbox p-0">
                  <Input required onBlur={handleBlur} onChange={handleChange} name="policy" id="checkbox1" type="checkbox" />
                  <Label    className="text-muted" htmlFor="checkbox1">Håller med<Link className="ms-2" href={Href}>{PrivacyPolicy}</Link></Label>

                  {errors.policy && <FormFeedback>{errors.policy}</FormFeedback>}
                </div>
                <Button type="submit" disabled={isLoading} block color="primary" className="w-100">
                    {isLoading ? "Skapar konto..." : "Skapa konto"}

                </Button>
              </FormGroup>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
