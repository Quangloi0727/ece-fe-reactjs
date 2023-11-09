import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Tooltip, notification } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Auth0Lock } from 'auth0-lock';
import { AuthFormWrap } from './style';
import { login } from '../../../../redux/authentication/actionCreator';
import { auth0options } from '../../../../config/auth0';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const errors = useSelector((state) => state.auth.error);
  const [form] = Form.useForm();
  // const [state, setState] = useState('');
  const lock = new Auth0Lock(clientId, domain, auth0options);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: <p>{errors}</p>,
    });
  };
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
            <h2 className="ninjadash-authentication-top__title">TÀI KHOẢN</h2>
            <h4 className="ninjadash-authentication-top__title_extra">Đăng nhập hệ thống tra cứu email</h4>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="email"
                initialValue="ninjadash@dm.com"
                rules={[{ message: 'Please input your username or Email!', required: true }]}
              >
                <Input
                  placeholder="Enter your username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  suffix={
                    <Tooltip title="Extra information">
                      <InfoCircleOutlined
                        style={{
                          color: 'rgba(0,0,0,.45)',
                        }}
                      />
                    </Tooltip>
                  }
                />
              </Form.Item>
              <Form.Item name="password" initialValue="123456">
                <Input.Password placeholder="Nhập mật khẩu..." />
              </Form.Item>
              <Form.Item>
                <Input value={isLoading} />
                <Input value={errors} />
              </Form.Item>
              <Form.Item>
                <Button
                  className="btn-signin bg-danger hover:bg-hbr-danger dark:bg-white10 dark:hover:bg-hbr-danger border-solid border-1 border-danger hover:border-hbr-danger text-white dark:text-white60 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                  htmlType="submit"
                  type="primary"
                  size="large"
                  onClick={() => {
                    if (!isLoading) openNotificationWithIcon('error');
                  }}
                >
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
