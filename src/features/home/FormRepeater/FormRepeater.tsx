import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col, Form, Input, Button, Icon } from '@ebs-integrator/react-ebs-ui';
import { plusAdd, xDelete } from '../../../resources/index';
const FormRepeater = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col size={12}>
            <div className="box-form">
              <Form className="form-repeater">
                <Row>
                  <Col>
                    <Form.Field name="field1" label="Item Name">
                      <Input size="large" />
                    </Form.Field>
                  </Col>
                  <Col>
                    <Form.Field name="field2" label="Cost">
                      <Input size="large" />
                    </Form.Field>
                  </Col>
                  <Col>
                    <Form.Field name="field3" label="Quantity">
                      <Input size="large" />
                    </Form.Field>
                  </Col>
                  <Col>
                    <Form.Field name="field4" label="Price">
                      <Input size="large" />
                    </Form.Field>
                  </Col>
                  <Col>
                    <Button size="medium" className="delete-button">
                      <span className="box-text-button delete-text-button">
                        <Icon className="delete-button" component={xDelete} />
                        <span className="text-button">Delete</span>
                      </span>
                    </Button>
                  </Col>
                </Row>
                <div className="form-line"></div>
              </Form>
              <Button type="primary">
                <span className="box-text-button">
                  <Icon component={plusAdd} />
                  <span className="text-button">Add New</span>
                </span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default FormRepeater;
