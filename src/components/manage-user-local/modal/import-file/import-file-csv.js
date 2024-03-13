import React, { useRef, useState } from 'react';
import { Form, Button, Modal, Space, Upload, Row, Col } from 'antd';
import propTypes from 'prop-types';
import {
  CloseOutlined,
  CloudUploadOutlined,
  DownloadOutlined,
  PaperClipOutlined,
  InfoCircleFilled,
  CheckOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import TableImport from './table-import';
import { PaginationStyle, GlobalUtilityStyle } from '../../../../container/styled';
import { openNotificationWithIcon } from '../../../notifications/notification';
import { downloadTemplateExcel, importExcel } from '../../../../redux/manage-user-local/import-file/actionCreator';

function ImportFileExcel({ showOrHideModalImportFile, hideModal }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const [checkExistFile, setCheckExistFile] = useState(false);
  const [fileLists, setFileLists] = useState([]);

  const { dataFile, totalData, dataFileColumn } = useSelector((states) => {
    return {
      dataFile: states.dataListFile.dataFile,
      totalData: states.dataListFile.totalData,
      dataFileColumn: states.dataListFile.dataFileColumn,
    };
  });

  const handleImportExcel = (fileList) => {
    const file = fileList[0];
    const formData = new FormData();
    formData.append('file', file.originFileObj);
    dispatch(
      importExcel(
        formData,
        () => {
          hideModal();
          openNotificationWithIcon('success', 'Lưu thành công !');
          window.location.reload(true);
        },
        (err) => {
          openNotificationWithIcon('error', 'Lưu thất bại !', err.message);
        },
      ),
    );
  };

  const handleChangeUpload = (info) => {
    setCheckExistFile(true);
    setFileLists([...info.fileList]);
  };
  const removeFile = () => {
    setFileLists([]);
    setCheckExistFile(false);
    return Upload.LIST_IGNORE;
  };
  const downloadExcelFile = () => {
    dispatch(downloadTemplateExcel());
  };

  const tableFileData = [];
  if (dataFile && dataFile.length) {
    dataFile.map((item) => {
      const { id, fileName, quantityRecord, date } = item;
      return tableFileData.push({
        id: (
          <span className="text-start dark:text-white60 text-[13px] " title={id} key={id}>
            {id}
          </span>
        ),
        fileName: (
          <span className="text-start dark:text-white60 text-[13px] " title={fileName} key={fileName}>
            {fileName}
          </span>
        ),
        quantityRecord: (
          <span className="text-start dark:text-white60 text-[13px] " key={quantityRecord}>
            {quantityRecord}
          </span>
        ),
        updatedAt: (
          <span className=" text-start dark:text-white60 text-[13px]" key={date}>
            {moment(date).format('DD-MM-YYYY HH:mm:ss ')}
          </span>
        ),
      });
    });
  }

  return (
    <Modal
      title={<strong style={{ fontWeight: '700' }}>Import người truy cập</strong>}
      open={showOrHideModalImportFile}
      onCancel={hideModal}
      maskClosable={false}
      zIndex="1000"
      width={700}
      footer={[
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
          }}
          key="footerModalAddVistor"
        >
          <Space size="small">
            <Button
              type="primary"
              key="cancelAddVistor"
              className="px-5 text-[13px] font-semibold button-filter-cancel h-10"
              onClick={hideModal}
            >
              <span className="button-formadd items-center">
                <CloseOutlined style={{ marginRight: '4px' }} /> Đóng
              </span>
            </Button>
          </Space>
        </div>,
      ]}
    >
      <main className="text-[13px]">
        <Button onClick={() => downloadExcelFile()} type="primary" size="middle">
          <span className="button-formadd items-center text-[13px]">
            <DownloadOutlined style={{ marginRight: '4px' }} />
            Tải file mẫu
          </span>
        </Button>
        <GlobalUtilityStyle>
          <div className="pt-[10px] button-formadd items-center text-[13px]">
            {' '}
            <PaperClipOutlined style={{ marginRight: '4px' }} />
            Tệp người truy cập <InfoCircleFilled style={{ marginLeft: '4px' }} />
            {checkExistFile ? (
              <div className="button-formadd">
                {' '}
                <CheckOutlined
                  style={{ margin: '0px 4px 0px 4px' }}
                  onClick={() => handleImportExcel(fileLists)}
                />{' '}
                <CloseOutlined onClick={() => removeFile()} />{' '}
              </div>
            ) : (
              ''
            )}
          </div>
        </GlobalUtilityStyle>
        <div style={{ textAlign: 'center' }}>
          <Form layout="vertical" ref={formRef} colon={false} className="form-add">
            <Form.Item>
              <Upload
                fileList={fileLists}
                className="text-left"
                maxCount={1}
                onChange={handleChangeUpload}
                beforeUpload={() => {
                  return false;
                }}
              >
                <button
                  style={{
                    border: 0,
                    background: 'none',
                  }}
                  type="button"
                >
                  <div
                    className="button-formadd items-center text-[13px]"
                    style={{
                      marginTop: 8,
                      color: 'blue',
                    }}
                  >
                    <CloudUploadOutlined style={{ marginRight: '5px' }} /> Duyệt từ máy tính
                  </div>
                </button>
              </Upload>
            </Form.Item>
          </Form>
        </div>
        <GlobalUtilityStyle>
          <Row gutter={15}>
            <Col xs={24} className="">
              <PaginationStyle>
                <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className=" text-left">
                    <TableImport tableData={tableFileData} columns={dataFileColumn} totalData={totalData} />
                  </div>
                </div>
              </PaginationStyle>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </main>
    </Modal>
  );
}
ImportFileExcel.propTypes = {
  showOrHideModalImportFile: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
};
export default ImportFileExcel;
