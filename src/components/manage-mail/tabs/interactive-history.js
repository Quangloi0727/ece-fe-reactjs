import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { GlobalUtilityStyle } from '../../../container/styled';

function InteractiveHistory({ dataHistory }) {
  return (
    <GlobalUtilityStyle>
      {dataHistory?.map((el, index) => (
        <Row gutter={15} key={index}>
          <Col xs={24} style={{ marginLeft: '30px' }}>
            <div className="content-activity-detail">
              <Row className="text-[13px]">
                <Col span={8}>{el.time}</Col>
                <Col span={4}>{el.nameInfo}</Col>
                <Col span={12}>{el.action}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      ))}
    </GlobalUtilityStyle>
  );
}

InteractiveHistory.propTypes = {
  dataHistory: PropTypes.any,
};
export default InteractiveHistory;
