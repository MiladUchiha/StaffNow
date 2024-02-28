import { Card, CardBody, CardFooter, CardHeader, Col, Container } from "reactstrap";
import Link from "next/link";

 const EmailSent = () => {
    return (
        <Container fluid className="m-auto d-flex justify-content-center align-items-center vh-100 login-card ">
          <Col xl="4">
            <Card className="height-equal">
              <CardHeader className="bg-secondary">
                <h4>E-post verifikation</h4>
              </CardHeader>
              <CardBody>
                <h5 className="pb-2"></h5>
                <p className="mb-0">
                  Vi har skickat ett verifikation länk till den angivna e-post address. Vänligen tryck på länken.
                </p>
                <p>Kolla även i din skräp</p>
              </CardBody>
              <CardFooter>
                <Link href="/login" className="btn btn-primary">Tillbaka till inloggning</Link>
              </CardFooter>
            </Card>
          </Col>
        </Container>
    );
    };
    export default EmailSent;