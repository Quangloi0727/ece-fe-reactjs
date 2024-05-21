import React, { forwardRef } from 'react';
import { PrinterOutlined } from '@ant-design/icons';
import { Col, Empty, Row } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import DownLoadFile from './download-file';
import { Button } from '../buttons/buttons';
import { GlobalUtilityStyle } from '../../container/styled';
import { getItem } from '../../utility/localStorageControl';
import { LOCAL_STORAGE_VARIABLE, SEARCH_ON_SYSTEM } from '../../constants/index';

const ContentActivity = forwardRef(({ value, handlePrint, checkNullTab }, ref) => {
  const printContentToPdf = () => {
    handlePrint();
  };
  const { subject, emailData, createdOn, email } = value;
  let contentNew =
    emailData && emailData.content
      ? emailData.content.replace(/@page WordSection1.*?div\.WordSection1\s*{.*?}/gs, '')
      : '';
  if (contentNew !== '') {
    // Tạo một DOMParser để phân tích chuỗi HTML thành một tài liệu DOM
    let baseURL = '';
    if (getItem(LOCAL_STORAGE_VARIABLE.SEARCH_ON_SYSTEM) === SEARCH_ON_SYSTEM.NEW) {
      baseURL = process.env.REACT_APP_URL_CISCO_NEW;
    } else {
      baseURL = process.env.REACT_APP_URL_CISCO_OLD;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(contentNew, 'text/html');

    // Lấy tất cả các thẻ img trong nội dung
    const imgs = doc.querySelectorAll('img');

    // Duyệt qua tất cả các thẻ img và kiểm tra thuộc tính src
    imgs.forEach(function (img) {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http://') && !src.startsWith('https://')) {
        img.setAttribute('src', baseURL + src);
      }
    });

    // Lấy lại nội dung HTML sau khi đã thay đổi
    contentNew = doc.body.innerHTML;
  }

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
                  return (
                    <span key={index}>
                      {el.emailAddress}
                      {index !== email.emailAddressTo.length - 1 && ','}
                    </span>
                  );
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
              {email?.emailAttachmentLink?.length > 0 &&
                email.emailAttachmentLink.map(
                  (file, index) =>
                    file.linkType === 0 && (
                      <Col key={index}>
                        <DownLoadFile index={index} value={file} />
                      </Col>
                    ),
                )}
            </Row>
            <div style={{ paddingTop: '20px' }}>
              <GlobalUtilityStyle dangerouslySetInnerHTML={{ __html: contentNew }} />
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
