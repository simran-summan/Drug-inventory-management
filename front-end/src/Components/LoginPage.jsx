import React from 'react';
import Login ,{ Banner ,Title ,Welcome , Logo } from '@react-login-page/page3';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

const css = {
  '--login-bg': '#f3f2f2',
  '--login-color': '#333',
  '--login-logo': '#fff',
  '--login-inner-bg': '#fff',
  '--login-banner-bg': '#fbfbfb',
  '--login-input': '#333',
  '--login-input-icon': '#dddddd',
  '--login-input-bg': 'transparent',
  '--login-input-border': 'rgba(0, 0, 0, 0.13)',
  '--login-input-placeholder': '#999999',
  '--login-btn': '#fff',
  '--login-btn-bg': '#b08bf8',
  '--login-btn-bg-focus': '#b08bf8',
  '--login-btn-bg-hover': '#b08bf8',
  '--login-btn-bg-active': '#b08bf8',
};

const LoginPage = () => (
  <Login style={{ height: 480, ...css }}>
    <Banner style={{ backgroundImage: `url(https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg)` }} />
    <Title>Login.</Title>
    <Welcome>Welcome back!</Welcome>
    <Login.ButtonAfter>
  Don't have an account?<a href="#">Sign in</a>
</Login.ButtonAfter>
<Logo visible={false}>⚛️</Logo>
  </Login>
  
);

export default LoginPage;