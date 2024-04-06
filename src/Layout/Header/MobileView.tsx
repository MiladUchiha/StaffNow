import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Col } from "reactstrap";
import Image from "next/image";

export const MobileView = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Col className="header-logo-wrapper col-auto">
      <div className="logo-wrapper">
        <Link href={`/${i18LangStatus}/sample_page`}>
          <Image className="img-fluid for-light" width={40} height={40} src={`${ImagePath}/logo/logo.png`} alt="" />
          <Image className="img-fluid for-dark" width={40} height={40} src={`${ImagePath}/logo/logo_light.png`} alt="" />
        </Link>
      </div>
    </Col>
  );
};
