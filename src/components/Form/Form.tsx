import React from 'react';
import { question, facebook, github, mail, twitter } from '../../resources/index';
import {
  Form as Box,
  Icon,
  Input,
  Checkbox,
  Button,
  Space
} from '@ebs-integrator/react-ebs-ui';

const Form = () => {
  return (
    <div className="form">
      <Box>
        <h1 className="form-title">
          Welcome to ...!<span className="greeting">👋</span>
        </h1>
        <p className="form-text">
          Please sign-in to your account and start the adventure
        </p>
        <div className="exemple">
          <Icon className="example-question" component={question} />
          <p className="exemple-text">
            Admin:
            <span className="exemple-email">admin@demo.com | admin</span>
          </p>

          <p className="exemple-text">
            Clint:
            <span className="exemple-email">clent@demo.com | client</span>
          </p>
        </div>
        <Box.Field name="Email" label="Email">
          <Input type="email" placeholder="admin@demo.com" />
        </Box.Field>

        <Box.Field
          name="Password"
          label="Password"
        >
          <Input suffix={<Icon type="eye" />} type="text" placeholder="1234" />
        </Box.Field>


        <Box.Field>
          <Checkbox text="Remember me" />
        </Box.Field>

        <Button className="full-width" type="primary">Sign in</Button>
        <div className="text__box">
          <p className="text__box-info">New on our platform?<a className="text__box-link" href="#example">Create an account</a></p>
        </div>

        <p className="textwithline">or</p>


        <Space className="icons__list" justify='center' >
          <a className="icons__list-link fill-facebook" href="#example">
            <Icon className="fill-icon" component={facebook} />
          </a>
          <a className="icons__list-link fill-twitter" href="#example">
            <Icon className="fill-icon" component={twitter} />
          </a>
          <a className="icons__list-link fill-mail" href="#example">
            <Icon className="fill-icon" component={mail} />
          </a>
          <a className="icons__list-link fill-github" href="#example">
            <Icon className="fill-icon" component={github} />
          </a>
        </Space>

      </Box>

    </div>
  );
};
export default Form;