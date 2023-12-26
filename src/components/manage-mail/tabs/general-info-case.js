import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import moment from 'moment';
import { GlobalUtilityStyle } from '../../../container/styled';

function GeneralInfoCase({ dataInfo }) {
  return (
    <GlobalUtilityStyle className="mr-[30px]">
      <Row gutter={5}>
        <Col xs={24} style={{ marginLeft: '30px' }}>
          <div className="content-activity-detail">
            <Row>
              <Col span={8} className="text-[13px]">
                <p> Case ID </p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Case Status </p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.caseStatus}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Original Source</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.originalSource}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Owner</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.owner}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Severity</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.severity}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due on</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{moment(dataInfo?.[0]?.case?.dueDate).format('DD-MM-YYYY HH:mm A')}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due at</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Description</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.description}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Description Of Solution</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.solutionDescription}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Related Cases</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Classifications</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.[0]?.case?.caseId}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </GlobalUtilityStyle>
  );
}

GeneralInfoCase.propTypes = {
  dataInfo: PropTypes.any,
};
export default GeneralInfoCase;
