import { Row, Col, Tag, Space, Dropdown } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, PaginationStyle } from '../styled';
import { tableReadData } from '../../redux/data-filter/actionCreator';
import DataTable from '../../components/table/DataTable';
import Heading from '../../components/heading/heading';

function DataTables() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      dispatch(tableReadData());
    }
  }, [dispatch]);

  const { TableData } = useSelector((states) => {
    return {
      TableData: states.dataTable.tableData,
    };
  });

  const tableDataScource = [];
  if (TableData.length >= 0) {
    TableData.map((item) => {
      const {
        ActivityID,
        Subject,
        AssignedTo,
        CreateOn,
        Substatus,
        CaseID,
        QueueName,
        File,
        Priority,
        From,
        to,
        HuongEmail,
      } = item;
      return tableDataScource.push({
        ActivityID: (
          <>
            <Heading as="h4" className="mb-[5px] text-dark dark:text-white87 text-[15px] ">
              <Link to={`/admin/pages/detail/${ActivityID}`} className="text-dark dark:text-white87">
                {ActivityID}
              </Link>
            </Heading>
          </>
        ),
        Subject: <div className="text-body dark:text-white60 text-[15px] h-[25px] font-medium ">{Subject}</div>,
        AssignedTo: <span className="text-body dark:text-white60 text-[15px] font-medium">{AssignedTo}</span>,
        CreateOn: <span className="text-body dark:text-white60 text-[15px] font-medium">{CreateOn}</span>,
        Substatus: (
          <Tag
            className={`inline-flex items-center justify-center bg-${Substatus}-transparent text-${Substatus} min-h-[30px] px-3 text-xs font-medium rounded-[15px]`}
          >
            {Substatus}
          </Tag>
        ),
        CaseID: <a className="text-body dark:text-white60 text-[15px] font-medium">{CaseID}</a>,
        QueueName: <span className="text-body dark:text-white60 text-[15px] font-medium">{QueueName}</span>,
        File: <span className="text-body dark:text-white60 text-[15px] font-medium">{File}</span>,
        Priority: <span className="text-body dark:text-white60 text-[15px] font-medium">{Priority}</span>,
        From: <span className="text-body dark:text-white60 text-[15px] font-medium">{From}</span>,
        To:
          to.length >= 2 ? (
            <Dropdown
              menu={{
                items: to,
              }}
            >
              <Space>
                {to.length} email
                <DownOutlined />
              </Space>
            </Dropdown>
          ) : (
            <span className="text-body dark:text-white60 text-[15px] font-medium">{to[0].label}</span>
          ),
        HuongEmail: <span className="text-body dark:text-white60 text-[15px] font-medium">{HuongEmail}</span>,
      });
    });
  }
  // console.log(tableDataScource);
  const dataTableColumn = [
    {
      title: 'Activity ID',
      dataIndex: 'ActivityID',
      key: 'ActivityID',
      fixed: 'left',
    },
    {
      title: 'Subject',
      dataIndex: 'Subject',
      key: 'Subject',
      width: 150,
    },
    {
      title: 'Assigned To',
      dataIndex: 'AssignedTo',
      key: 'AssignedTo',
      width: 150,
    },
    {
      title: 'Create On',
      dataIndex: 'CreateOn',
      key: 'CreateOn',
      width: 150,
    },
    {
      title: 'Substatus',
      dataIndex: 'Substatus',
      key: 'Substatus',
      width: 150,
    },
    {
      title: 'Case ID',
      dataIndex: 'CaseID',
      key: 'CaseID',
      width: 150,
    },
    {
      title: 'Queue Name',
      dataIndex: 'QueueName',
      key: 'QueueName',
      width: 150,
    },
    {
      title: 'File đính kèm',
      dataIndex: 'File',
      key: 'File',
      width: 150,
    },
    {
      title: 'Priority',
      dataIndex: 'Priority',
      key: 'Priority',
      width: 150,
    },
    {
      title: 'From',
      dataIndex: 'From',
      key: 'From',
      width: 150,
    },
    {
      title: 'To',
      dataIndex: 'To',
      key: 'to',
      width: 150,
    },
    {
      title: 'Hướng Email',
      dataIndex: 'HuongEmail',
      key: 'HuongEmail',
      width: 150,
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tra cứu Email" />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <PaginationStyle>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="p-[25px]">
                  <DataTable
                    filterOption
                    filterOnchange
                    tableData={tableDataScource}
                    columns={dataTableColumn}
                    rowSelection={false}
                    scroll={{
                      x: 1500,
                      y: 240,
                    }}
                  />
                </div>
              </div>
            </PaginationStyle>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DataTables;
