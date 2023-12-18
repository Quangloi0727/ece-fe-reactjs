import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { MailOutlined } from '@ant-design/icons';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../container/styled';

function ContentCase({ value, onContentCase }) {
  const { mailSend, to, subject, activityId, queueName, key } = value;
  const handleChangeContentCaseKey = (keyCase) => {
    onContentCase(keyCase);
  };
  return (
    <GlobalUtilityStyle>
      <Row gutter={15}>
        <Col xs={24} style={{ marginLeft: '30px' }}>
          <div className="p-[25px]">
            <Row gutter={16}>
              <Col sm={22} xs={24}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] dark:border-white10 border-1 rounded-6 relative">
                  <div className="p-[25px]">
                    <Row>
                      <Col span={2}>
                        <MailOutlined style={{ fontSize: '25px' }} />
                        <FontAwesome
                          name="mail-reply"
                          style={{
                            position: 'relative',
                            bottom: '15px',
                            right: '6px',
                          }}
                        />
                      </Col>
                      <Col span={22} onClick={() => handleChangeContentCaseKey(key)}>
                        <p>
                          <Link to="/manage-email/case/990" style={{ textDecoration: 'underline' }}>
                            {activityId}
                          </Link>{' '}
                          {mailSend}
                        </p>
                        <p>To : {to}</p>
                        <p>Re : {subject}</p>
                        <Row>
                          <Col span={10}>{queueName}</Col>
                          <Col span={5}>Create On:</Col>
                          <Col span={9}>17/11/2023 08:40 AM</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </GlobalUtilityStyle>
  );
}

ContentCase.propTypes = {
  value: PropTypes.any,
  onContentCase: PropTypes.func,
};
export default ContentCase;
