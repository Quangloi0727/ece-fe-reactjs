import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { GlobalUtilityStyle } from '../../../container/styled';
import { CASE_STATUS, CASE_SEVERITY } from '../../../constants/index';
import { HandleDataDisPlay } from '../../../libs/common';

function GeneralInfoCase({ dataInfo }) {
  const {
    caseId,
    caseStatus,
    originalSource,
    owner,
    severity,
    dueDate,
    description,
    solutionDescription,
    caseAss,
    customer,
  } = dataInfo;

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
                <p>{caseId}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Case Status </p>
              </Col>
              <Col span={16} className="text-[13px] ">
                {HandleDataDisPlay(caseStatus, CASE_STATUS)}
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Original Source</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{originalSource}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Owner</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{owner}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Severity</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                {HandleDataDisPlay(severity, CASE_SEVERITY)}
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due on</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dueDate !== null ? moment(dueDate).format('DD-MM-YYYY') : ''}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p> Due at</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{dueDate !== null ? moment(dueDate).format('HH:mm A') : ''}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Description</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{description}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Description Of Solution</p>
              </Col>
              <Col span={16} className="text-[13px] ">
                <p>{solutionDescription}</p>
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Related Cases</p>
              </Col>
              <Col span={16} className="text-[13px]" style={{ display: 'flex' }}>
                {caseAss && caseAss.length
                  ? caseAss.map((ca, index) => {
                      return (
                        <GlobalUtilityStyle key={index}>
                          <Link to="#" key={index} style={{ paddingRight: '10px' }}>
                            {ca.caseGroupId}
                          </Link>
                        </GlobalUtilityStyle>
                      );
                    })
                  : ''}
              </Col>
            </Row>

            <Row>
              <Col span={8} className="text-[13px]">
                <p>Classifications</p>
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

GeneralInfoCase.propTypes = {
  dataInfo: PropTypes.any,
};
export default GeneralInfoCase;
