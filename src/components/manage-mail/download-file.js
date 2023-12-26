import { LinkOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../buttons/buttons';
import { DataService } from '../../config/dataService/dataService';

function DownLoadFile({ value }) {
  const downloadFile = async (idFile) => {
    await DataService.downloadFile(`/email-attachment/${idFile}`).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${value?.attachment?.fileName}`);
      document.body.appendChild(link);
      link.click();
    });
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
