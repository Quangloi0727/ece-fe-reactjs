import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthFormWrap } from './style';
import { login } from '../../../../redux/authentication/actionCreator';
import { openNotificationWithIcon } from '../../../../components/notifications/notification';
import { USER } from '../../../../constants';

function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();

  const handleSubmit = useCallback(
    (values) => {
      dispatch(
        login(
          values,
          (role) => {
            if (role === USER.KEY_ROLE_USER || role === USER.KEY_ROLE_ALL) {
              history('/list-email');
            }
            if (role === USER.KEY_ROLE_ADMIN) {
              history('/manage-user-local');
            }
          },
          (err) => openNotificationWithIcon('error', 'Đăng nhập thất bại !', err.message),
        ),
      );
    },
    [history, dispatch],
  );

  const redirectPageLogin = () => {
    window.open(process.env.REACT_APP_URL_ADFS, '_blank');
  };

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
              <Form.Item
                name="username"
                rules={[{ message: 'Đây là trường bắt buộc !', required: true }]}
                label=""
                className="customizeInputLogin"
              >
                <Input placeholder="Nhập username ..." prefix={<FontAwesomeIcon icon={faUser} />} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ message: 'Đây là trường bắt buộc !', required: true }]}
                label=""
                className="customizeInputLogin"
              >
                <Input.Password placeholder="Nhập mật khẩu ..." prefix={<FontAwesomeIcon icon={faLock} />} />
              </Form.Item>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Đăng nhập'}
                </Button>
              </Form.Item>
              <p className="relative text-body dark:text-white60 -mt-2.5 mb-6 text-center text-13 font-medium before:absolute before:w-full before:h-px ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-1/2 before:z-10 before:bg-gray-200 dark:before:bg-white10">
                <span className="relative z-20 px-4 bg-white dark:bg-[#1b1d2a]">Or</span>
              </p>
              <Form.Item>
                <Button className="btn-signin-adfs" type="primary" size="large" onClick={redirectPageLogin}>
                  Đăng nhập bằng ADFS
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
