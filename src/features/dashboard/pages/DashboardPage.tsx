import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col } from '@ebs-integrator/react-ebs-ui';
import CardPrize from '../CardPrize/CardPrize';
import Congrats from '../Congrats/Congrats';
import Card from '../../../components/Card/Card';
import CardEmployee from '../CardEmployee/CardEmployee';
import CardMeetUp from '../CardMeetUp/CardMeetUp';
import CardProfile from '../CardProfile/CardProfile';
import Timeline from '../../../components/Timeline/Timeline';
import { timelines } from '../../../data/TimelinesData';

const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <Row className="mb-16">
          <h1>Advance Card</h1>
        </Row>
        <Row className="mb-16">
          <Col size={7}>
            <Congrats />
          </Col>
          <Col size={5}>
            <CardPrize />
          </Col>
        </Row>
        <Row className="mb-16">
          <Col size={4}>
            <Card>
              <CardEmployee />
            </Card>
          </Col>
          <Col size={4}>
            <Card>
              <CardMeetUp />
            </Card>
          </Col>
          <Col size={4}>
            <Card>
              <CardProfile />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={4}>
            <Card>
              <div className="card-timeline">
                <h2 className="title-timeline">User Timeline</h2>
                <Timeline children={timelines.map(Timeline.Item)} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default DashboardPage;
