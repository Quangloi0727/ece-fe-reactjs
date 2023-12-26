import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { LinkOutlined, MailOutlined } from '@ant-design/icons';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { GlobalUtilityStyle } from '../../container/styled';
import { ACTIVITY_MODE } from '../../constants';

function ContentCase({ value, changeContentCase }) {
  const { activityId, user, email, activityMode, queue, createdOn, subject } = value;
  const { emailAddressTo, fromEmailAddress, emailAttachmentLink } = email;
  const handleChangeContentCaseKey = (keyCase) => {
    changeContentCase(keyCase);
  };
  return (
    <GlobalUtilityStyle>
      <Row gutter={15}>
        <Col xs={24} style={{ marginLeft: '30px' }}>
          <div className="">
            <Row gutter={16}>
              <Col sm={22} xs={24}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] dark:border-white10 border-1 rounded-6 relative">
                  <div className="p-[25px]">
                    <Row className="text-[13px]">
                      <Col span={2}>
                        {activityMode === ACTIVITY_MODE.OUTBOUND ? (
                          <>
                            <MailOutlined style={{ fontSize: '25px' }} />
                            <FontAwesome
                              name="mail-reply"
                              style={{
                                position: 'relative',
                                top: '11px',
                                right: '31px',
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <MailOutlined style={{ fontSize: '25px' }} />
                            <FontAwesome name="download" style={{ position: 'relative', top: '10px' }} />
                          </>
                        )}
                      </Col>
                      <Col span={22} onClick={() => handleChangeContentCaseKey(activityId)}>
                        <Row>
                          <Col span={23}>
                            <p>
                              <Link to={`/manage-email/case/${activityId}`} style={{ textDecoration: 'underline' }}>
                                {activityId}
                              </Link>{' '}
                              {user?.userName}({fromEmailAddress})
                            </p>
                          </Col>
                          <Col span={1}>
                            {emailAttachmentLink && emailAttachmentLink.length ? <LinkOutlined /> : ''}
                          </Col>
                        </Row>
                        <p style={{ display: 'flex', flexWrap: 'wrap' }}>
                          To:
                          {emailAddressTo.map((el, index) => {
                            return <span key={index}>{el.emailAddress},</span>;
                          })}
                        </p>
                        <p>RE : {subject}</p>
                        <Row>
                          <Col span={14}>{queue?.queueName}</Col>
                          <Col span={3}>Create On:</Col>
                          <Col span={7}>{moment(createdOn).format('DD-MM-YYYY HH:mm A')}</Col>
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
  changeContentCase: PropTypes.func,
};
export default ContentCase;
