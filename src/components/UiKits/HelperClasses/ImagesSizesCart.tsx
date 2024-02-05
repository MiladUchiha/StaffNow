import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, ImagesSizes } from "@/Constant";
import { ImageDatas, ImagesDetails } from "@/Data/Uikits/helperclass";
import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
const ImagesSizesCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ImagesSizes} span={ImageDatas} headClass="card-no-border pb-0" />
        <CardBody>
          <div className="gradient-border gap-3">
            <Image className="img-30 img-h-30" src={`${ImagePath}/blog/comment.jpg`} alt="img-size-10" />
            {ImagesDetails.map((item, index) => (
              <Image className={`img-${item} img-h-${item}`} src={`${ImagePath}/blog/comment.jpg`} alt={`img-size-${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesSizesCart;
