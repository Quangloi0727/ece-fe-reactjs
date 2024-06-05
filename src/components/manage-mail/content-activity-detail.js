import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { PrinterOutlined } from '@ant-design/icons';
import { Col, Empty, Row } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import DownLoadFile from './download-file';
import { Button } from '../buttons/buttons';
import { GlobalUtilityStyle } from '../../container/styled';
import { DataService } from '../../config/dataService/dataService';

const ContentActivity = forwardRef(({ value, handlePrint, checkNullTab }, ref) => {
  const printContentToPdf = () => {
    handlePrint();
  };
  const imgRef = useRef();
  const { subject, emailData, createdOn, email } = value;
  let contentNew =
    emailData && emailData.content
      ? emailData.content.replace(/@page WordSection1.*?div\.WordSection1\s*{.*?}/gs, '')
      : '';
  const [contentEmail, setContentEmail] = useState('');

  const handleImageBodyEmail = async () => {
    if (contentNew !== '') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(contentNew, 'text/html');
      const imgs = doc.querySelectorAll('img');
      if (!imgs) return;
      const imgArray = Array.from(imgs);
      if (!imgArray) return;
      const promises = imgArray.map(async (img) => {
        const src = img.getAttribute('src');
        const attachmemtId = src.match(/attachmentId=(\d+)/)?.[1];
        if (!attachmemtId) return;
        const attachment = await DataService.get(`/email-attachment/${attachmemtId}`);
        if (!attachment && !attachment.data && !attachment.data.data) return;
        const { contentBase64, contentType, fileName } = attachment.data.data;
        img.setAttribute('src', `data:${contentType};base64, ${contentBase64}`);
        img.setAttribute('id', fileName);
      });
      await Promise.all(promises);

      contentNew = doc.body.innerHTML;
      setContentEmail(doc.body.innerHTML);
    }
  };

  useEffect(() => {
    handleImageBodyEmail();
  }, [contentEmail]);

  useEffect(() => {
    if (!imgRef.current) return;
    const imgElements = imgRef.current.querySelectorAll('img');
    const downloadImage = async (event) => {
      const link = document.createElement('a');
      link.href = event.target.src;
      link.setAttribute('download', event.target.id);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    imgElements.forEach((img) => {
      img.addEventListener('click', downloadImage);
    });

    return () => {
      imgElements.forEach((img) => {
        img.removeEventListener('click', downloadImage);
      });
    };
  }, [contentEmail]);

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
                email.emailAttachmentLink.map((file, index) => (
                  <Col key={index}>
                    <DownLoadFile index={index} value={file} />
                  </Col>
                ))}
            </Row>
            <div style={{ paddingTop: '20px' }}>
              <div ref={imgRef} dangerouslySetInnerHTML={{ __html: contentEmail }} />
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
