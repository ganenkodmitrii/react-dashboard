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
import { plusIcon, deleteIcon } from 'resources';
import {
  FormRepeaterContext,
  formItem,
  FormRepeaterProvider,
} from '../../../context/FormRepeaterContext';
import { Fields } from '../../../types/common';
import { useContext } from 'react';

const FormPage = () => {
  const { state, add, remove } = useContext(FormRepeaterContext);

  const [form] = useForm();

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
                {state.map((item, index) => (
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
                        onClick={() => remove(index)}
                        disabled={state.length === 1 ? true : false}
                        className="delete-button"
                      >
                        <span className="box-text-button delete-text-button">
                          <Icon className="delete-button" component={deleteIcon} />
                          <span className="text-button">Delete</span>
                        </span>
                      </Button>
                    </Col>

                    <div className="form-line" />
                  </Row>
                ))}
              </Form>

              <Button onClick={() => add(formItem)} type="primary">
                <span className="box-text-button">
                  <Icon component={plusIcon} />
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

export default () => (
  <FormRepeaterProvider>
    <FormPage />
  </FormRepeaterProvider>
);
