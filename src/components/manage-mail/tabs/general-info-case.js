import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../../container/styled';
import { CASE_STATUS_TYPE, CASE_SEVERITY_TYPE } from '../../../constants/index';

function GeneralInfoCase({ dataInfo }) {
  function HandleCaseStatus(data) {
    const handleCaseStatus = () => {
      switch (data?.data) {
        case CASE_STATUS_TYPE.OPEN:
          return <p>Open</p>;
        case CASE_STATUS_TYPE.CLOSED:
          return <p>Closed</p>;
        case CASE_STATUS_TYPE.ReadyToBeClosed:
          return <p>Ready to be closed</p>;
        default:
          return null;
      }
    };
    return <div>{handleCaseStatus()}</div>;
  }

  function HandleCaseSeverity(data) {
    const handleCaseSeverity = () => {
      switch (data?.data) {
        case CASE_SEVERITY_TYPE.URGENT:
          return <p>Urgent</p>;
        case CASE_SEVERITY_TYPE.HIGH:
          return <p>High</p>;
        case CASE_SEVERITY_TYPE.MEDIUM:
          return <p>Medium</p>;
        case CASE_SEVERITY_TYPE.LOW:
          return <p>Low</p>;
        default:
          return null;
      }
    };
    return <div>{handleCaseSeverity()}</div>;
  }
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
                <p>{dataInfo?.caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Case Status </p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <HandleCaseStatus data={dataInfo?.case?.caseStatus} />
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Original Source</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.case?.originalSource}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Owner</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.case?.owner}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Severity</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <HandleCaseSeverity data={dataInfo?.case?.severity} />
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due on</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{moment(dataInfo?.case?.dueDate).format('MM-DD-YYYY')}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due at</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{moment(dataInfo?.case?.dueDate).format('HH:mm A')}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Description</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.case?.description}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Description Of Solution</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.case?.solutionDescription}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Related Cases</p>
              </Col>
              <Col span={16} className="text-[13px]" style={{ display: 'flex' }}>
                {dataInfo?.case?.caseAss.map((caseAss, index) => {
                  return (
                    <GlobalUtilityStyle key={index}>
                      <Link to="#" key={index} style={{ paddingRight: '10px' }}>
                        {caseAss.caseGroupId}
                      </Link>
                    </GlobalUtilityStyle>
                  );
                })}
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Classifications</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dataInfo?.case?.caseId}</p>
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
