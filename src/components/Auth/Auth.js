import React, { useCallback, useState, useEffect } from "react";
import "./Auth.css";
import { Form, Tooltip, Input, Checkbox, Button, notification } from "antd";
import axios from 'axios';
import {Reg} from '../Reg/Reg'
import { PageStatus } from '../../common/typings';
import { Loader } from '../Loader/Loader';

export const Auth = (props) => {
  console.log(props);
  const { login, pageStatus } = props;
  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState(false);

  const [showNotification, setShowNotification] = useState(true);

  const handleEmailChangeCallback = useCallback(
    (e) => {
      if (e.target) {
        setEmail(e.target.value);
        setEmailValidate(handleEmailValidate(e.target.value));
        console.log(emailValidate)
      }
    },
    [email]
  );

  const handlePasswordChangeCallback = useCallback(
    (e) => {
      if (e.target) {
        setPassword(e.target.value);
        setPasswordValidate(handlePasswordValidate(e.target.value));
        console.log(emailValidate)
      }
    },
    [password]
  );

  const loginCallback = () => {
    setShowNotification(true)
    props.login(email, password)
  };

  const handleEmailValidate = (value) => {
    return /^[a-z]+@[a-z]+\.[a-z]{2,}$/.test(value);
  };
  
  const handlePasswordValidate = (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(value);
  }

  if(props.pageStatus === PageStatus.ERROR && showNotification) {
    setShowNotification(false);
    notification['error']({
      message: 'Зарегистрируйтесь',
      description:
        props.error.error,
    });
  }

    
  if (props.pageStatus === PageStatus.LOADING) {
    return <Loader />
  } else {
    return (
      <div className="container container_comp_auth">
          <Form className="login-form">
            <h1>Авторизация</h1>
            <Form.Item>
                <Input
                  placeholder="E-Mail"
                  onChange={handleEmailChangeCallback}
                  style={{borderColor: `${emailValidate == true ? 'green': 'red'}`}}
                />
            </Form.Item>
            <Form.Item>
                <Input.Password
                  type="password"
                  onChange={handlePasswordChangeCallback}
                  style={{borderColor: `${passwordValidate == true ? 'green': 'red'}`}}
                  placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={loginCallback}
              >
                Log in
              </Button>
              Or <a href="/reg">register now!</a>
            </Form.Item>
          </Form>
        </div>
    );
  }

};
