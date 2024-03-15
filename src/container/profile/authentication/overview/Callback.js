import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Row, Col } from 'antd';
import { AuthFormWrap } from './style';
import { verifyCallback } from '../../../../redux/authentication/actionCreator';
import { openNotificationWithIcon } from '../../../../components/notifications/notification';

function Callback() {
  const [params] = useSearchParams();
  const code = params.get('code');
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    const logOutADFS = window.open(process.env.REACT_APP_URL_ADFS_LOGOUT, '_blank');
    dispatch(
      verifyCallback(
        code,
        () => history('/list-email'),
        (message) => {
          openNotificationWithIcon('error', 'Tài khoản không có quyền truy cập !', message);
          setTimeout(() => {
            logOutADFS.close();
            history('/login');
          }, 1000);
        },
      ),
    );
  }, []);
  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <Form name="forgotPass" layout="vertical">
            <div className="ninjadash-authentication-top">
              <h2 className="ninjadash-authentication-top__title">Verifying, please wait a moment !</h2>
            </div>
          </Form>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default Callback;
