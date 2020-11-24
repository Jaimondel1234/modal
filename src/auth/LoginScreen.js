import React from "react";
import { useForm } from "../hooks/useForm";
import {
  FlexStyle,
  PanelStyle,
  ButtonStyle,
  TextStyle,
  InputStyle,
} from "../styles/core";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { authLogin } from "../actions/auth";

/** Style of input of login */
const LoginInputStyle = styled(InputStyle)`
  border-radius: 7px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  max-width: 400px;
  padding: 12px;
`;

/*
  Component that displays the login screen
*/
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "admin@gmail.com",
    password: "admin",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authLogin(email, password));
    localStorage.setItem("user", JSON.stringify({ email, password }));
  };

  return (
    <PanelStyle bg='#1E90FF' color='#ffff' borderRadius={10}>
      <TextStyle
        fontSize='60px'
        fontWeight='bold'
        textShadow='2px 2px 4px #000000'
        textAlign='center'
        pb='20px'
        pt='25vh'
      >
        Login
      </TextStyle>

      <FlexStyle
        as='form'
        alignItems='center'
        justifyContent='space-between'
        flexDirection='column'
        onSubmit={handleLogin}
      >
        <LoginInputStyle
          type='text'
          placeholder='Your email'
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <LoginInputStyle
          type='password'
          placeholder='Your password'
          name='password'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />
        <ButtonStyle
          p='12px'
          fontSize='25px'
          fontWeight='bold'
          maxWidth='400px'
          letterSpacing='3px'
          lineHeight='40px'
          type='submit'
        >
          Send
        </ButtonStyle>
      </FlexStyle>
    </PanelStyle>
  );
};
