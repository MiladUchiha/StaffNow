import { ImagePath } from "@/Constant";
import { Col } from "reactstrap";
import Image from "next/image";
const RunningEventsImage = () => {
  return (
    <Col xs="6" className="running-events">
      <Image width={40} height={40} src={`${ImagePath}/dashboard-2/round.png`} alt="dashboard" />
      <div>
        <Image width={40} height={40} className="running-events-image" src={`${ImagePath}/dashboard-2/events-bg.png`} alt="dashboard"/>
      </div>
    </Col>
  );
};

export default RunningEventsImage;
