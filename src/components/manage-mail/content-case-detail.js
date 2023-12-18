import React, { forwardRef } from 'react';
import { Col, Row, Upload } from 'antd';
import PropTypes from 'prop-types';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import FontAwesome from 'react-fontawesome';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
import UilBell from '@iconscout/react-unicons/icons/uil-bell';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import { Link, NavLink } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../container/styled';
import Heading from '../heading/heading';

function ContentCase({ value }) {
  const { mailSend, to, subject, files, contentActivity } = value;

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
                        <FontAwesome name="mail-reply" style={{ position: 'relative', bottom: '15px', right: '6px' }} />
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
};
export default ContentCase;
