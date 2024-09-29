  import React, { useState } from 'react'
  import { Link, useNavigate } from 'react-router-dom'
  import { ToastContainer } from 'react-toastify';
  import { handleError, handleSuccess } from '../utils';
  import styled, { css } from 'styled-components';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

  const LoginContainer = styled.div`
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const LoginBox = styled.div`
    background-color: #0e1b56;
    padding: 2rem;
    border-radius: 8px;
    width: 300px;
  `;

  const Title = styled.h1`
    color: white;
    text-align: center;
  `;

  const Input = styled.input`
    width: 83%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 4px;
  `;

  const Button = styled.button`
    width: 100%;
    padding: 0.5rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;

  const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: #0e1b56
  `;

  const SocialIcon = styled.span`
    margin: 0 0.5rem;
    cursor: pointer;
    color: #666;
  `;

  const ForgotPasswordText = styled.span`
    color: #fff;
  `;

  function Login() {

    const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      const copyLoginInfo = { ...loginInfo };
      copyLoginInfo[name] = value;
      setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      const { email, password } = loginInfo;
      if (!email || !password) {
        return handleError('email and password are required')
      }
      try {
        const url = `http://localhost:8080/auth/login`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const { success, message, jwtToken, name, error } = result;
        if (success) {
          handleSuccess(message);
          localStorage.setItem('token', jwtToken);
          localStorage.setItem('loggedInUser', name);
          setTimeout(() => {
            navigate('/home')
          }, 1000)
        } else if (error) {
          const details = error?.details[0].message;
          handleError(details);
        } else if (!success) {
          handleError(message);
        }
        console.log(result);
      } catch (err) {
        handleError(err);
      }
    }

    return (
      <LoginContainer>
        <LoginBox>
          <Title>LOGIN</Title>
          <p>Please enter your login and password!</p>
          <form onSubmit={handleLogin}>
            <Input type="email" name="email" placeholder="Email" value={loginInfo.email} onChange={handleChange} />
            <Input type="password" name="password" placeholder="Password" value={loginInfo.password} onChange={handleChange} />
            <ForgotPasswordText><a href="/forgotpass">Forgot password?</a></ForgotPasswordText>
            <Button type="submit">LOGIN</Button>
          </form>
          <SocialLogin>
            <SocialIcon><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
            <SocialIcon><FontAwesomeIcon icon={faTwitter} /></SocialIcon>
            <SocialIcon><FontAwesomeIcon icon={faGoogle} /></SocialIcon>
          </SocialLogin>
          <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
          <ToastContainer />
        </LoginBox>
      </LoginContainer>
    )
  }

  export default Login;