import React, { useRef, useState } from 'react';
import { Form, Button, Modal, Space, Upload, Row, Col, message } from 'antd';
import propTypes from 'prop-types';
import ExcelJS from 'exceljs';
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
import { handleSendDataUser } from '../../../../redux/user/actionCreator';
import { openNotificationWithIcon } from '../../../notifications/notification';
import { CONDITION_UPLOAD_FILE, STATUS_REMOVE_FILE_EXCEL } from '../../../../constants';
import { addFile } from '../../../../redux/import-file/actionCreator';
import { downloadExcelFile } from '../../../../libs/common';

function ImportFileCsv({ showOrHideModalImportFile, hideModal }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [state, setState] = useState({
    users: [],
  });
  const [checkExistFile, setCheckExistFile] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);
  const { users } = state;
  const { dataFile, totalData, dataFileColumn } = useSelector((states) => {
    return {
      dataFile: states.dataListFile.dataFile,
      totalData: states.dataListFile.totalData,
      dataFileColumn: states.dataListFile.dataFileColumn,
    };
  });
  const beforeUpload = (file) => {
    if (!CONDITION_UPLOAD_FILE.includes(file.type)) {
      message.error('Only Excel files (.xlsx , .xls or .csv) are allowed.');
      return Upload.LIST_IGNORE;
    }
    return Upload.LIST_IGNORE;
  };

  const handleReadExcel = async (excelFile) => {
    if (excelFile.status === STATUS_REMOVE_FILE_EXCEL) {
      setCheckExistFile(false);
      return;
    }
    const reader = new FileReader();

    reader.onload = async (event) => {
      const fileArrayBuffer = event.target.result;
      const workbook = new ExcelJS.Workbook();

      try {
        await workbook.xlsx.load(fileArrayBuffer);

        const worksheet = workbook.getWorksheet(1);

        const listUserFormExcel = [];
        worksheet.eachRow((row, rowNumber) => {
          if (rowNumber !== 1) {
            const rowData = row.values.map((cell) => (cell ? cell.toString() : null));
            const dataUser = {
              name: rowData[1],
              type: rowData[2],
              role: rowData[3],
              password: rowData[4],
              owner: rowData[5],
            };
            listUserFormExcel.push(dataUser);
          }
        });
        setState({
          ...state,
          users: listUserFormExcel,
        });
      } catch (error) {
        message.error('Error reading Excel file:', error);
      }
    };
    reader.readAsArrayBuffer(excelFile);
  };

  const handleChangeUpload = (info) => {
    setFileUpload(info.file.name);
    handleReadExcel(info.file);
    setCheckExistFile(true);
    setFileList([...info.fileList]);
  };
  const handleSendData = (data) => {
    dispatch(
      handleSendDataUser(
        data,
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
    hideModal();
  };
  const handleSendFile = () => {
    const files = {
      nameFile: fileUpload,
      quantityRecord: users.length,
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    dispatch(addFile(files));
  };
  const validtateBeforeSend = () => {
    if (users.length > 0) {
      handleSendData(users);
      handleSendFile();
    } else {
      message.error('No upload file null or file not in (.xlsx , .xls or .csv) !');
    }
  };
  const removeFile = () => {
    setFileList([]);
    setCheckExistFile(false);
    return Upload.LIST_IGNORE;
  };

  const tableFileData = [];
  if (dataFile && dataFile.length) {
    dataFile.map((item) => {
      const { id, nameFile, quantityRecord, date } = item;
      return tableFileData.push({
        id: (
          <span className="text-start dark:text-white60 text-[13px] " title={id} key={id}>
            {id}
          </span>
        ),
        nameFile: (
          <span className="text-start dark:text-white60 text-[13px] " title={nameFile} key={nameFile}>
            {nameFile}
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
      width={600}
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
                <CheckOutlined style={{ margin: '0px 4px 0px 4px' }} onClick={() => validtateBeforeSend()} />{' '}
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
                fileList={fileList}
                className="text-left"
                maxCount={1}
                onChange={handleChangeUpload}
                beforeUpload={(e) => {
                  beforeUpload(e);
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
            <Col xs={24} className="mb-[25px]">
              <PaginationStyle>
                <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="p-[25px] text-left">
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
ImportFileCsv.propTypes = {
  showOrHideModalImportFile: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
};
export default ImportFileCsv;
