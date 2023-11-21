import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Auth0Lock } from 'auth0-lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthFormWrap } from './style';
import { auth0options } from '../../../../config/auth0';
import { login } from '../../../../redux/authentication/actionCreator';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(
    (values) => {
      dispatch(login(values, () => history('/admin')));
    },
    [history, dispatch],
  );

  lock.on('authenticated', (authResult) => {
    lock.getUserInfo(authResult.accessToken, (error) => {
      if (error) {
        return;
      }

      handleSubmit();
      lock.hide();
    });
  });

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">TÀI KHOẢN </h2>
            <h4 className="sub_title">Đăng nhập hệ thống tra cứu Email </h4>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item name="email" rules={[{ message: 'Vui lòng nhập username !', required: true }]} label="">
                <Input placeholder="Nhập username ..." prefix={<FontAwesomeIcon icon={faUser} />} />
              </Form.Item>
              <Form.Item name="password" rules={[{ message: 'Vui lòng nhập password !', required: true }]} label="">
                <Input.Password placeholder="Nhập mật khẩu ..." prefix={<FontAwesomeIcon icon={faLock} />} />
              </Form.Item>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Đăng nhập'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignIn;
