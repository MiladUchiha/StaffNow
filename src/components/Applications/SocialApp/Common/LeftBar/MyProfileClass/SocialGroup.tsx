import { ImagePath } from "@/Constant";
import { SocialGroupData } from "@/Data/Application/SocialApp";
import { UncontrolledTooltip } from "reactstrap";
import Image from "next/image";
const SocialGroup = () => {
  return (
    <ul className="justify-content-center">
      {SocialGroupData.map((data, index) => (
        <li className="d-inline-block" key={index}>
          <Image className="img-40 rounded-circle" src={`${ImagePath}/user/${data.imageName}`} alt="Img" id={`UncontrolledTooltipExample-${index}`}/>
          <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample-${index}`}>
            {data.userName}
          </UncontrolledTooltip>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
