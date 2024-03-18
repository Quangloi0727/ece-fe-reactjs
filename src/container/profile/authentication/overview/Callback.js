import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Row, Col } from 'antd';
import { AuthFormWrap } from './style';
import { verifyCallback } from '../../../../redux/authentication/actionCreator';
import { openNotificationWithIcon } from '../../../../components/notifications/notification';
import { USER } from '../../../../constants';

function Callback() {
  const [params] = useSearchParams();
  const code = params.get('code');
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    dispatch(
      verifyCallback(
        code,
        (role) => {
          if (role === USER.KEY_ROLE_USER || role === USER.KEY_ROLE_ALL) {
            history('/list-email');
          }
          if (role === USER.KEY_ROLE_ADMIN) {
            history('/manage-user-local');
          }
        },
        (message) => {
          const logOutADFS = window.open(process.env.REACT_APP_URL_ADFS_LOGOUT, '_blank');
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
