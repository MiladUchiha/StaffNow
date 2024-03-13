"use client"
import { ImagePath, TaskCompleted } from "../Constant";
import { WebsiteDesignData } from "../Data/General/Widgets/General";
import { useAppSelector } from "../Redux/Hooks";
import Link from "next/link";
import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import DashboardCommonHeader from "./General/Dashboard/common/DashboardCommonHeader";
import WebsiteDesignRatting from "./General/Dashboard/Project/WebsiteDesign/WebsiteDesignRatting";
import ProjectListContainer from "./Applications/Project/ProjectList";
import Image from "next/image";
const WebsiteDesign = ({ user, mission, type }) => {

  return (
    <>
      <div className="p-10">
        <Card className=" ">
         
          <CardBody className="designer-card">
          <div>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image width={20} height={20} src={`/dashboard-2/user/`} alt="user" />
              </div>
              <div className="flex-grow-1">
                <Link href={`/ecommerce/product_page`}><h5>{user.name}</h5></Link>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="m-10 p-10 flex justify-end">
              <Button className={`btn btn-primary`} key={2} color="transparent">Redigera</Button>
              

            </div>
          </div>
        </CardBody>
        
          
        </Card>
        <ProjectListContainer mission={mission} type={type} user={user} />
      </div>
    </>
  );
};

export default WebsiteDesign;