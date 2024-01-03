import React, { forwardRef } from 'react';
import { PrinterOutlined } from '@ant-design/icons';
import { Col, Empty, Row } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import DownLoadFile from './download-file';
import { Button } from '../buttons/buttons';
import { GlobalUtilityStyle } from '../../container/styled';

const ContentActivity = forwardRef(({ value, handlePrint, checkNullTab }, ref) => {
  const printContentToPdf = () => {
    handlePrint();
  };
  const { subject, emailData, createdOn, email } = value;
  return !checkNullTab ? (
    <GlobalUtilityStyle ref={ref}>
      <Row gutter={15} className="text-[13px]">
        <Col xs={24} style={{ marginLeft: '30px' }}>
          <div className="content-activity-detail">
            <Row>
              <Col span={2}>From:</Col>
              <Col span={17}>{email?.fromEmailAddress}</Col>
              <Col span={5} style={{ textAlign: 'center' }}>
                <Button
                  size="default"
                  shape="round"
                  type="default"
                  className="inline-flex items-center bg-regularBG dark:bg-regularBGdark h-11 gap-x-1.5 px-[25px] text-body dark:text-white60 text-sm font-semibold border border-regular dark:border-white10"
                  onClick={printContentToPdf}
                >
                  <PrinterOutlined />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={2}>To:</Col>
              <Col span={20} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {email?.emailAddressTo.map((el, index) => {
                  return <span key={index}>{el.emailAddress},</span>;
                })}
              </Col>
            </Row>
            <Row>
              <Col span={2}>Subject:</Col>
              <Col span={12}>{subject}</Col>
              <Col span={3}>Create On:</Col>
              <Col span={7}>{moment(createdOn).format('DD-MM-YYYY HH:mm A')}</Col>
            </Row>
            <Row gutter={[16, 16]} className="row-general-info buttonFile">
              {email?.emailAttachmentLink && email?.emailAttachmentLink.length
                ? email?.emailAttachmentLink.map((file, index) => (
                    <Col key={index}>
                      <DownLoadFile key={index} index={index} value={file} />
                    </Col>
                  ))
                : ''}
            </Row>
            <div style={{ paddingTop: '20px' }}>
              <GlobalUtilityStyle dangerouslySetInnerHTML={{ __html: emailData?.content }} />
            </div>
          </div>
        </Col>
      </Row>
    </GlobalUtilityStyle>
  ) : (
    <Empty />
  );
});

ContentActivity.propTypes = {
  value: PropTypes.any,
  handlePrint: PropTypes.func,
  checkNullTab: PropTypes.bool,
};
export default ContentActivity;
