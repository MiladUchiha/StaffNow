import { ImagePath } from "@/Constant";
import { BlodDataList } from "@/Data/Miscellaneous/Blog";
import { Card, Col } from "reactstrap";
import ListOfBlogWithoutDetails from "./ListOfBlogWithoutDetails";
import Image from "next/image";
const BlogWithoutDetails = () => {
  return (
    <>
      {BlodDataList.map((data, index) => (
        <Col md="6" xxl="3" className="box-col-3" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image className="img-fluid top-radius-blog rounded-top-3" src={`${ImagePath}/blog/${data}`} alt="blog" />
              <ListOfBlogWithoutDetails />
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
