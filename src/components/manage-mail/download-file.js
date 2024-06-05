import { LinkOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../buttons/buttons';
import { DataService } from '../../config/dataService/dataService';
import { openNotificationWithIcon } from '../notifications/notification';

function DownLoadFile({ value }) {
  const downloadFile = async (idFile) => {
    const response = await DataService.get(`/email-attachment/${idFile}`);
    if (response.status !== 200 || (response.data && response.data.data === null)) {
      return openNotificationWithIcon('error', 'Thất bại !', 'Vui lòng kiểm tra lại !');
    }
    const { contentBase64, fileName, contentType } = response.data.data;
    const link = document.createElement('a');
    link.href = `data:${contentType};base64, ${contentBase64}`;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="ant-button-filename truncate"
      type="primary"
      onClick={() => downloadFile(value?.emailAttachmentId)}
      style={{ fontSize: 13, fontWeight: 400 }}
    >
      <LinkOutlined /> {value?.attachment?.fileName}({value?.attachment?.attachmentSize} KB)
    </Button>
  );
}

DownLoadFile.propTypes = {
  value: PropTypes.any,
};
export default DownLoadFile;
