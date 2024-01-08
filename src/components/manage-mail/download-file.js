import { LinkOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../buttons/buttons';
import { DataService } from '../../config/dataService/dataService';
import { openNotificationWithIcon } from '../notifications/notification';

function DownLoadFile({ value }) {
  const downloadFile = async (idFile) => {
    const response = await DataService.get(`/email-attachment/${idFile}`);
    const urlResponse = response?.data?.data?.url;
    const fileName = response?.data?.data?.fileName;
    if (response.status !== 200 || !urlResponse) {
      return openNotificationWithIcon('error', 'Thất bại !', 'Vui lòng kiểm tra lại !');
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', urlResponse, true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      if (xhr.status === 200) {
        const url = window.URL.createObjectURL(new Blob([xhr.response]));

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    xhr.send();
  };

  return (
    <Button
      className="ant-button-filename truncate"
      type="primary"
      onClick={() => downloadFile(value?.emailAttachmentId)}
    >
      <LinkOutlined /> {value?.attachment?.fileName}({value?.attachment?.attachmentSize} KB)
    </Button>
  );
}

DownLoadFile.propTypes = {
  value: PropTypes.any,
};
export default DownLoadFile;
