import { useAppSelector } from "../../../../Redux/Hooks";
import { Card, CardBody, Row, TabContent, TabPane } from "reactstrap";
import { CommonProjectListCard } from "../Common/CommonProjectListCard";

const ProjectListTabContent = ({mission}) => {
  const { activeTab, createdFormData } = useAppSelector((state) => state.project);

  return (
    <Card>
      <CardBody>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              {mission.map((item, i) => (
                <CommonProjectListCard item={item} key={i} />
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {mission.filter((item) => !item.done).map((item, i) => (
                <CommonProjectListCard item={item} key={i} />
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              {mission.filter((item) => item.done).map((item, i) => (
                <CommonProjectListCard item={item} key={i} />
              ))}
            </Row>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};

export default ProjectListTabContent;
