import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { GlobalUtilityStyle } from '../../../container/styled';

function HistoryActivity({ dataHistory }) {
  return (
    <GlobalUtilityStyle>
      {dataHistory?.map((rowData, index) => (
        <Row className="history-activity-row" key={index}>
          <Col span={8}>
            <div className="history-activity-col truncate">{rowData.time}</div>
          </Col>
          <Col span={8}>
            <div className="history-activity-col">{rowData.nameInfo}</div>
          </Col>
          <Col span={8}>
            <div className="history-activity-col truncate">{rowData.action}</div>
          </Col>
        </Row>
      ))}
    </GlobalUtilityStyle>
  );
}

HistoryActivity.propTypes = {
  dataHistory: PropTypes.any,
};
export default HistoryActivity;
