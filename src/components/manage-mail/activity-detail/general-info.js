import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { GlobalUtilityStyle } from '../../../container/styled';

function GeneralInfo({ dataInfo }) {
  return (
    <GlobalUtilityStyle>
      {dataInfo?.map((rowData, index) => (
        <Row gutter={[16, 16]} className="row-general-info" key={index}>
          <Col className="truncate" span={8}>
            {rowData.name}
          </Col>
          <Col span={16}>{rowData.content}</Col>
        </Row>
      ))}
    </GlobalUtilityStyle>
  );
}
GeneralInfo.propTypes = {
  dataInfo: PropTypes.any,
};
export default GeneralInfo;
