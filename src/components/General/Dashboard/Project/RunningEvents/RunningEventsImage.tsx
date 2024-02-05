import { ImagePath } from "@/Constant";
import { Col } from "reactstrap";
import Image from "next/image";
const RunningEventsImage = () => {
  return (
    <Col xs="6" className="running-events">
      <Image src={`${ImagePath}/dashboard-2/round.png`} alt="dashboard" />
      <div>
        <Image className="running-events-image" src={`${ImagePath}/dashboard-2/events-bg.png`} alt="dashboard"/>
      </div>
    </Col>
  );
};

export default RunningEventsImage;
