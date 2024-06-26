import { Href, ImagePath, Logout } from "@/Constant";
import { UserProfileData } from "@/Data/Layout";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "react-feather";
import Image from "next/image";

export const Profile = () => {
  const router = useRouter();
  const LogOutUser = () => {
    Cookies.remove("mofi_token");
    router.push("/auth/login");
  };

  return (
    <li className="profile-nav onhover-dropdown px-0 py-0">
      <div className="d-flex profile-media align-items-center">
        <Image width={40} height={40} className="img-30" src={`${ImagePath}/dashboard/profile.png`} alt="" />
        <div className="flex-grow-1">
          <span>Alen Miller</span>
          <p className="mb-0 font-outfit">
            UI Designer<i className="fa fa-angle-down"></i>
          </p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {UserProfileData.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.icon}<span>{item.title} </span></Link>
          </li>
        ))}
        <li onClick={LogOutUser}><Link href={Href}scroll={false} ><LogOut /><span>{Logout} </span></Link></li>
      </ul>
    </li>
  );
};
