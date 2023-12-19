import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { MailOutlined } from '@ant-design/icons';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../container/styled';

function ContentCase({ value, changeContentCase }) {
  const { key } = value;
  const handleChangeContentCaseKey = (keyCase) => {
    changeContentCase(keyCase);
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
                            999
                          </Link>{' '}
                          Hải yến (chamsockhachhang@vpbank.comv.n)
                        </p>
                        <p>To : chamsockhachhang@vpbank.com</p>
                        <p>RE : v/v: Hỗ trợ app</p>
                        <p>queueName</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm={22} xs={24}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] dark:border-white10 border-1 rounded-6 relative">
                  <div className="p-[25px]">
                    <Row>
                      <Col span={2}>
                        <MailOutlined style={{ fontSize: '25px' }} />
                        <FontAwesome name="download" style={{ position: 'relative', top: '10px' }} />
                      </Col>
                      <Col span={22}>
                        <p>
                          <Link to="/manage-email/case/990" style={{ textDecoration: 'underline' }}>
                            999
                          </Link>{' '}
                          Hải yến (chamsockhachhang@vpbank.comv.n)
                        </p>
                        <p>To : chamsockhachhang@vpbank.com</p>
                        <p>RE : v/v: Hỗ trợ app</p>
                        <p>queueName</p>
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
  changeContentCase: PropTypes.func,
};
export default ContentCase;
