import { useAppSelector } from "../../../../Redux/Hooks";
import { Card, CardBody, Row, TabContent, TabPane } from "reactstrap";
import { CommonProjectListCard } from "../Common/CommonProjectListCard";

const ProjectListTabContent = ({ mission, type, user }) => {
  const { activeTab, createdFormData } = useAppSelector((state) => state.project);

  return (
    <Card>
      <CardBody>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              {mission.map((item, i) => (
                <CommonProjectListCard item={item} user={user} key={i} type={type} />
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            {type === "uppdraggivare" ? (
              <>
              {
                mission
                  .filter((item) => !item.done)
                  .map((item, i) => (
                    <CommonProjectListCard item={item} user={user} key={i} type={type} />
                  ))
              }
              </>
            ):(
              <>
              {
                mission
                  .filter((item) => !user.acceptedMissionId.includes(item.id))
                  .map((item, i) => (
                    <CommonProjectListCard item={item} user={user} key={i} type={type} />
                  ))
              }
              </>)
            }
            
            
              
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            {type === "uppdraggivare" ? (
              <>
              {
                mission
                  .filter((item) => item.done)
                  .map((item, i) => (
                    <CommonProjectListCard item={item} user={user} key={i} type={type} />
                  ))
              }
              </>
            ):(
              <>
              {
                mission
                  .filter((item) => user.acceptedMissionId.includes(item.id))
                  .map((item, i) => (
                    <CommonProjectListCard item={item} user={user} key={i} type={type} />
                  ))
              }
              </>)
            }
            
            </Row>
          </TabPane>
        </TabContent>




      </CardBody>
    </Card>
  );
};

export default ProjectListTabContent;
