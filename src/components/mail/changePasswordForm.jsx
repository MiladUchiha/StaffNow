"use client";
import React, { useState } from 'react'
import { changePassword } from '../../lib/changePassword';
import { toast } from "sonner"
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useRouter } from "next/navigation";

const ChangePasswordForm = ({resetPasswordToken}) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const handleSubmit = async () => {
        event.preventDefault();

        if(password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        const message = await changePassword(resetPasswordToken, password);
        toast.success(message);
        router.push('/login');
        setMessage(message);
    }

  return (
    <Container fluid className="p-0">
    <Row>
      <Col sm="12">
        <div className="login-card login-dark">
          <div>
            
            <div className="login-main">
              <Form className="theme-form" onSubmit={handleSubmit}>
                <h4>Skapa ditt lösenord</h4>
                <FormGroup>
                  <Label className="col-form-label">Nytt lösenord</Label>
                  <div className="position-relative">
                    <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={show ? "text" : "password"} required placeholder="*********" />
                    <div className="show-hide" onClick={() => setShow(!show)}><span className={`${show? "" : "show"}`} /></div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className="col-form-label">Skriv igen lösenordet</Label>
                  <Input
                  value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password" required placeholder="*********" />
                </FormGroup>
                <FormGroup className="mb-0">
                 
                  <Button block color="primary" className="w-100">Klar</Button>
                </FormGroup>

              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default ChangePasswordForm