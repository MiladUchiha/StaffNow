import { ImagePath } from "@/Constant";
import Image from "next/image";
const LiveMeetingBody = () => {
  const LiveMeetingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="live-metting">
      <Image className="img-fluid" src={`${ImagePath}/dashboard-4/metting/teacher.png`} alt="teacher" />
      <div className="star-img">
        <Image className="img-fluid" src={`${ImagePath}/dashboard-4/metting/chart.png`} alt="chart" />
        <Image className="img-fluid" src={`${ImagePath}/dashboard-4/metting/message.png`} alt="message" />
        {LiveMeetingData.map((data, i) => (
          <Image src={`${ImagePath}/dashboard-4/metting/${data}.png`} alt="metting" key={i} />
        ))}
      </div>
    </div>
  );
};

export default LiveMeetingBody;
