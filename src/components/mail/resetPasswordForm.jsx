"use client";
import { useState } from 'react'
import { resetPassword } from '../../lib/resetPassword';
import { toast } from "sonner"
import Link from "next/link";

import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ResetPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = async () => {
        event.preventDefault();
        const message = await resetPassword(email);
        toast.success(message);
        setMessage(message);
        
    }

  return (
    <Container fluid className="p-0">
    <Row>
      <Col sm="12">
        <div className="login-card login-dark">
          <div>
            <div>
            
            </div>
            <div className="login-main">
              <Form className="theme-form" onSubmit={handleSubmit}>
                <h4>Bytt ditt lösenord</h4>
                <FormGroup>
                  <Label className="col-form-label">Email</Label>
                  <div className="position-relative">
                    <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" required placeholder="Ditt email" autoComplete='email' />
                   
                  </div>
                </FormGroup>
               
                <FormGroup className="mb-0">
                  <Button block color="primary" className="w-100">Skicka mejl</Button>
                </FormGroup>
                <p className="mt-4 mb-0">Har inga konto?<Link className="ms-2" href={`/`}>Hem</Link>                  </p>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default ResetPasswordForm