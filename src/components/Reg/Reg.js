
import React, { useCallback, useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";
import "./Reg.css";
import { Form, Tooltip, Input, Checkbox, Button, notification } from "antd";
import axios from 'axios';


 
export const Reg = (props) => {
    console.log(props);
    const [email, setEmail] = useState("");
    const [emailValidate, setEmailValidate] = useState(false);
  
    const [password, setPassword] = useState("");
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordValidate, setConfirmPasswordValidate] = useState(false)


    const [showError, setShowError] = useState(true);

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

    const confirmPasswordChangeCallback = useCallback(
      (e) => {
        if (e.target) {
          setConfirmPassword(e.target.value);
          setConfirmPasswordValidate(confirmPasswordValidateHandler(e.target.value));
        }
      },
      [confirmPassword]
    )
  
    const confirmPasswordValidateHandler = (value) => {
      if (value === password){
        return true;
      } else {
        return false;
      }
    }

    const regCallback = () => {
      if(!confirmPasswordValidate){
        notification['error']({
          message: 'Пароли не совпадают',
        });
      }
      if(passwordValidate && emailValidate && confirmPasswordValidate) {
        setShowError(true);
        props.reg(email, password);
      }
    };
  
    const handleEmailValidate = (value) => {
      return /^[a-z._\-0-9]+@[a-z]+\.[a-z]{2,20}$/.test(value);
    };
    
    const handlePasswordValidate = (value) => {
      return /^(?=.*[a-z])(?=.*[A-Z]).{8,24}$/.test(value);
    }
    
    const showEror = () => {
      setShowError(false);
      notification['error']({
        message: props.error,
      });
    }

    if(props.pageStatus === "LOADING") {
      return <Loader />
    } else {
      if(props.pageStatus === "ERROR" && showError) {
        showEror();
      }
      return (
        <div className="container container_comp_reg">
          <Form className="login-form">
            <h1>Регистрация</h1>
            <Form.Item>
                <Input
                  placeholder="E-Mail"
                  onChange={handleEmailChangeCallback}
                  style={{borderColor: `${emailValidate == true ? 'green': 'red'}`}}
                />
            </Form.Item>
            <Form.Item>
                <Tooltip placement="rightTop" title="Используйте латинский алфавит длинной от 8 до 24 символов">
                  <Input.Password
                    type="password"
                    onChange={handlePasswordChangeCallback}
                    style={{borderColor: `${passwordValidate == true ? 'green': 'red'}`}}
                    placeholder="Password"
                    />
                  </Tooltip>
            </Form.Item>
            <Form.Item>
                <Tooltip placement="rightTop" title="Используйте латинский алфавит длинной от 8 до 24 символов">
                  <Input.Password
                    type="password"
                    onChange={confirmPasswordChangeCallback}
                    style={{borderColor: `${confirmPasswordValidate == true ? 'green': 'red'}`}}
                    placeholder="Confirm Password"
                  />
                </Tooltip>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={regCallback}
              >
                Создатть аккаунт!
              </Button>
                Есть аккаунт?<a href="/auth">Авторизироваться</a>
            </Form.Item>
          </Form>
        </div>
    );
    }
  };
  