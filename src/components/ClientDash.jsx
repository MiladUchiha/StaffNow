"use client"
import Link from "next/link";
import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import Particles from "./Particles";
import ProjectListContainer from "./Applications/Project/ProjectList";
import Image from "next/image";


const WebsiteDesign = ({ user, mission, type }) => {

  return (
    <>
      <div className=" sm:p-10 p-4">

    
      <Particles />
      <Card className=" designer-card bg-header-background">
        
  <CardBody >
 
    <div>
      <div className="d-flex align-items-center gap-2 p-4">
        <div className="flex-shrink-0">
          <Image width={60} height={60} src={`/assets/image.png`} alt="user" />
        </div>
     
        <div className="flex-grow-1">
          <Link href={`/ecommerce/product_page`}>
            <h5>{user.name}</h5>
          </Link>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="p-4">
      
        <p><strong>Företag:</strong> {user.companyName}</p>
        <p><strong>Org.nr.:</strong> {user.organizationNumber}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Beskrivning:</strong> {user.description}</p>
        <p><strong>Branch:</strong></p>
        <ul>
          {user.branches.map((branch, index) => (
            <li key={index}>-{branch}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className=" flex justify-end">
        <Button className={`btn btn-primary`} key={2} color="transparent">
          Redigera
        </Button>
      </div>
    
  </CardBody>
</Card>
        <ProjectListContainer mission={mission} type={type} user={user} />
      </div>
    </>
  );
};

export default WebsiteDesign;