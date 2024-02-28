
import { Col } from "reactstrap";
import { ImagePath } from "../../../../Constant";
import Image from "next/image";
const SearchNotFoundClass  = ({word}) => {
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center p-5">
        <Image className="img-100 mb-4" width={50} height={50} src={`${ImagePath}/other-images/sad4.gif`} alt="" />
          <p>{`Sorry, Not Found Any ${word}`}</p>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;
