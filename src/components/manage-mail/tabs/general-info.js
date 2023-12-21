import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { GlobalUtilityStyle } from '../../../container/styled';

function GeneralInfo({ dataInfo }) {
  return (
    <GlobalUtilityStyle>
      {dataInfo?.map((el, index) => (
        <Row gutter={10} key={index}>
          <Col xs={24} style={{ marginLeft: '30px' }}>
            <div className="content-activity-detail">
              <Row>
                <Col span={6} className="text-[13px]">
                  <p> {el.name} </p>
                </Col>
                <Col span={18} className="text-[13px] ">
                  <p>
                    {el.key === 'caseId' ? (
                      <Link to={`/list-email/caseid/${el.content}`} style={{ textDecoration: 'underline' }}>
                        {el.content}
                      </Link>
                    ) : (
                      el.content
                    )}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      ))}
    </GlobalUtilityStyle>
  );
}

GeneralInfo.propTypes = {
  dataInfo: PropTypes.any,
};
export default GeneralInfo;
