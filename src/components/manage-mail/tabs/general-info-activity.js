import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { GlobalUtilityStyle } from '../../../container/styled';

function GeneralInfoActivity({ dataInfo }) {
  const { activityId, caseId, activityPriority, contactPointId, departmentId } = dataInfo;
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
                <Link to={`/manage-email/caseid/${caseId}`}>{caseId}</Link>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Contact Point</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{contactPointId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Department name</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{departmentId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due on</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due at</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Classification</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{caseId}</p>
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
