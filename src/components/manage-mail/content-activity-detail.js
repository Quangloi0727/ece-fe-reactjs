import React, { forwardRef } from 'react';
import { PrinterOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import DownLoadFile from './download-file';
import { Button } from '../buttons/buttons';
import { GlobalUtilityStyle } from '../../container/styled';

const ContentActivity = forwardRef(({ value, handlePrint }, ref) => {
  const printInvoice = () => {
    handlePrint();
  };
  const { mailSend, to, subject, files, content } = value;
  return (
    <GlobalUtilityStyle ref={ref}>
      <Row gutter={15}>
        <Col xs={24} style={{ marginLeft: '30px' }}>
          <div className="content-activity-detail">
            <Row>
              <Col span={2}>From:</Col>
              <Col span={17}>{mailSend}</Col>
              <Col span={5} style={{ textAlign: 'center' }}>
                <Button
                  size="default"
                  shape="round"
                  type="default"
                  className="inline-flex items-center bg-regularBG dark:bg-regularBGdark h-11 gap-x-1.5 px-[25px] text-body dark:text-white60 text-sm font-semibold border border-regular dark:border-white10"
                  onClick={printInvoice}
                >
                  <PrinterOutlined />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={2}>To:</Col>
              <Col span={20}>{to}</Col>
            </Row>
            <Row>
              <Col span={2}>Subject:</Col>
              <Col span={15}>{subject}</Col>
              <Col span={7} style={{ textAlign: 'center' }}>
                Create On:17//11/2023 08:40 AM
              </Col>
            </Row>
            <Row gutter={[16, 16]} className="row-general-info">
              {files && files.length
                ? files.map((file, index) => (
                    <Col className="gutter-row" key={index}>
                      <DownLoadFile key={index} index={index} value={file} />
                    </Col>
                  ))
                : ''}
            </Row>
          </div>
        </Col>
      </Row>
    </GlobalUtilityStyle>
  );
});

ContentActivity.propTypes = {
  value: PropTypes.any,
  handlePrint: PropTypes.func,
};
export default ContentActivity;
