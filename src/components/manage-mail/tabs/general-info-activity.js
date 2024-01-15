import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import moment from 'moment/moment';
import { GlobalUtilityStyle } from '../../../container/styled';

function GeneralInfoActivity({ dataInfo }) {
  const { activityId, caseId, activityPriority, contactPoint, department, user, dueDate, customer } = dataInfo;
  return (
    <GlobalUtilityStyle className="mr-[30px]">
      <Row gutter={10}>
        <Col xs={24} style={{ marginLeft: '30px' }}>
          <div className="content-activity-detail">
            <Row>
              <Col span={8} className="text-[13px]">
                <p> Activity ID</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{activityId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Priority</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{activityPriority}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Case ID </p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <Link to={`/manage-email/case/${caseId}`}>{caseId}</Link>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Assigned to </p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>
                  <span>{user?.firstName} </span>
                  {user?.lastName}
                </p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Contact Point</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{contactPoint?.emailAddress}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Department name</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{department?.departmentName}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due on</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{moment(dueDate).format('DD-MM-YYYY')}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due at</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{moment(dueDate).format('HH:mm A')}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Classification</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{customer?.classification}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </GlobalUtilityStyle>
  );
}

GeneralInfoActivity.propTypes = {
  dataInfo: PropTypes.any,
};
export default GeneralInfoActivity;
