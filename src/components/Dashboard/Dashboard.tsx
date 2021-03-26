import Layout from "../Layout/Layout";
import { Container, Row, Col, } from "@ebs-integrator/react-ebs-ui";
import CartPrize from "../CartPrize/CartPrize";
import Congrats from "../Congrats/Congrats";
import Cart from "../Cart/Cart";
import CartEmployee from "../CartEmployee/CartEmployee";
import CartMeetUp from '../CartMeetUp/CartMeetUp'
import CartProfile from "../CartProfile/CartProfile";

const Dashboard = () => {
    return (
        <Layout >
            <Container className="">
                <Row className="mb-16">
                    <h1 className="dashboard-title">Advance Card</h1>
                </Row>
                <Row className="mb-16" >
                    <Col size={7}>
                        <Congrats />
                    </Col>
                    <Col size={5}>
                        <CartPrize />
                    </Col>
                </Row>
                <Row className="mb-16">
                    <Col size={4}>
                        <Cart>
                            <CartEmployee />
                        </Cart>
                    </Col>
                    <Col size={4}>
                        <Cart>
                            <CartMeetUp />
                        </Cart>
                    </Col>
                    <Col size={4}>
                        <Cart>
                            <CartProfile />
                        </Cart>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}
export default Dashboard;
