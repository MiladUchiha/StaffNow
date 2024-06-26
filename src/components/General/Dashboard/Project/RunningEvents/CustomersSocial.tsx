import { ImagePath } from "@/Constant";
import Image from "next/image";
const CustomersSocial = () => {
  const imgData = [1, 2, 3];
  
  return (
    <div className="flex-shrink-0">
      <div className="customers social-group">
        <ul className="simple-list">
          {imgData.map((data, i) => (
            <li className="d-inline-block" key={i}>
              <Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/dashboard-2/user/${data}.png`} alt="user" />
            </li>
          ))}
          <li className="d-inline-block">
            <p className="bg-light rounded-circle">5+</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomersSocial;
