import React from 'react';
import { Col, Row, Empty } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { GlobalUtilityStyle } from '../../../container/styled';
import { ACTIVITY_HISTORY } from '../../../constants/index';
import { HandleDataDisPlay } from '../../../libs/common';

function InteractiveHistory({ dataHistory, caseId, queue }) {
  return dataHistory && dataHistory.length ? (
    <GlobalUtilityStyle className="mr-[30px]">
      {dataHistory.map((el, index) => (
        <Row gutter={15} key={index}>
          <Col xs={24} style={{ marginLeft: '30px' }}>
            <div className="content-activity-detail">
              <Row className="text-[13px]">
                <Col span={8}>{moment(el.eventDate).format('DD-MM-YYYY HH:mm:ss A')}</Col>
                <Col span={6}>
                  {' '}
                  <span>{el?.user?.firstName} </span>
                  {el?.user?.lastName}
                </Col>
                <Col span={10}>{HandleDataDisPlay(el?.objectOperation, ACTIVITY_HISTORY, caseId, el?.user, queue)}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      ))}
    </GlobalUtilityStyle>
  ) : (
    <Empty />
  );
}

InteractiveHistory.propTypes = {
  dataHistory: PropTypes.any,
  caseId: PropTypes.number,
  queue: PropTypes.object,
};
export default InteractiveHistory;
