"use client"
import { CreateAccount, DontHaveAccount, EmailAddressLogIn, FacebookIcon, ForgotPassword, ImagePath, LinkedInIcon, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount, TwitterIcon } from "../../../../Constant";
import { validationSchema } from "../../../../Data/Pages";
import { useAppSelector } from "../../../../Redux/Hooks";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { toast } from "sonner";
import Image from "next/image";

export default function LoginForm({ password, logoClass, validation }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const router = useRouter()
  const submitHandler = async (e) => {

    
  
    signIn('credentials',
      {
        ...data, redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error)
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Logged in successfully!')
          router.push('/dashboard')
          router.refresh('dashboard',)
        }
      })
   
  };

  return (
    <div>
      <div>
        <Link className={` logo ${logoClass ? logoClass : " "} flex`} href={`/`} >
          <Image className="img-fluid for-light" src={`logo.png`} width={100} height={100} alt="looginpage" />
          <span className="ml-2 text-3xl font-bold tracking-wide text-gray-800">StaffNow</span>

        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submitHandler} validationSchema={validation && validationSchema}>
          {() => (
            <Form className="theme-form">
              <h4>{SignInToAccount}</h4>
              <p>Skriv ditt email och lösenord</p>
              <FormGroup className="mb-0">
                <Label className="col-form-label">{EmailAddressLogIn}</Label>
                <Field
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="form-control" name="email" type="text" placeholder="Exempel@gmail.com" required />
                <ErrorMessage name="email" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="mb-0">
                <Label className="col-form-label">{Password}</Label>
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

                {password && (<Link className="link" href={`/${i18LangStatus}/others/authentication/forgetpassword`}>{ForgotPassword}?</Link>)}
                <div className="text-end mt-3"><Button type="submit" color="primary" block className="w-100">{SignIn}</Button></div>
              </FormGroup>

              <Link className="ms-2" href={`/auth/reset-password`}>Glömt lösenord?</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
