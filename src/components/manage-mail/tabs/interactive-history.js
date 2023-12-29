import React from 'react';
import { Col, Row } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { GlobalUtilityStyle } from '../../../container/styled';

function InteractiveHistory({ dataHistory }) {
  console.log(dataHistory);
  return (
    <GlobalUtilityStyle className="mr-[30px]">
      {dataHistory?.map((el, index) => (
        <Row gutter={15} key={index}>
          <Col xs={24} style={{ marginLeft: '30px' }}>
            <div className="content-activity-detail">
              <Row className="text-[13px]">
                <Col span={6}>{moment(el.eventDate).format('MM/DD/YYYY HH:mm:ss A')}</Col>
                <Col span={6}>
                  {' '}
                  <span>{el?.user?.firstName} </span>
                  {el?.user?.lastName}
                </Col>
                <Col span={12}>{el.objectOperation}</Col>
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
