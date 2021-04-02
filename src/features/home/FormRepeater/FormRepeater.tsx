import Layout from '../../../components/Layout/Layout';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Icon,
  useForm,
} from '@ebs-integrator/react-ebs-ui';
import { plusAdd, xDelete } from '../../../resources/index';
import { FormRepeaterContext, formItem, Fields } from '../../../context/FormRepeaterContext';
import { useContext } from 'react';

const FormRepeater = () => {
  const { formState, addCard, deleteCard } = useContext(FormRepeaterContext);

  const [form] = useForm();
  // console.log(formState);
  // console.log(addCard);
  // console.log(deleteCard);
  return (
    <Layout>
      <Container>
        <Row className="mb-16">
          <h1>Form Repeater</h1>
        </Row>
        <Row className="mb-16">
          <Col size={12}>
            <div className="box-form">
              <h2>Repeating Forms</h2>

              <Form form={form} className="form-repeater">
                {formState.map((item, index) => (
                  <Row key={index}>
                    {Object.keys(item).map((name, idx) => (
                      <Col key={idx}>
                        <Form.Field name={name} label={Fields[name as keyof typeof Fields]}>
                          <Input size="large" />
                        </Form.Field>
                      </Col>
                    ))}
                    <Col>
                      <Button
                        onClick={() => deleteCard(index)}
                        disabled={formState.length === 1 ? true : false}
                        size="medium"
                        className="delete-button"
                      >
                        <span className="box-text-button delete-text-button">
                          <Icon className="delete-button" component={xDelete} />
                          <span className="text-button">Delete</span>
                        </span>
                      </Button>
                    </Col>

                    <div className="form-line"></div>
                  </Row>
                ))}
              </Form>

              <Button onClick={() => addCard(formItem)} type="primary">
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
