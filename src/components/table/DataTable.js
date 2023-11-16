import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { Form, Input, Pagination, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FilterOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from '../buttons/buttons';
import ConfigTable from '../configTable/configTable';
import FilterTable from '../configTable/filterTable';

function DataTable({ filterOption, filterOnchange, rowSelection, tableData, columns }) {
  const [formFilter] = Form.useForm();
  const [formSetting] = Form.useForm();
  const prefix = <UilSearch className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-light dark:text-white60" />;
  const [state, setState] = useState({
    filterVisible: false,
    editVisible: false,
    modalType: 'primary',
  });
  const { editVisible, filterVisible } = state;
  const showModalFilter = () => {
    setState({
      ...state,
      filterVisible: true,
    });
  };
  const showModalSetting = () => {
    setState({
      ...state,
      editVisible: true,
    });
  };
  const onCancel = () => {
    setState({
      ...state,
      editVisible: false,
      filterVisible: false,
    });
  };

  const handleOk = () => {
    onCancel();
    formFilter.resetFields();
    formSetting.resetFields();
  };
  return (
    <>
      <div className="flex items-center justify-center w-full bg-red mt-5 mb-[25px] md:flex-col md:justify-center gap-[15px]">
        <div className="inline-flex items-center w-full filter ">
          <Button onClick={showModalFilter} size="default" type="primary" key="1">
            <FilterOutlined />
            Bộ lọc
          </Button>
          <FilterTable filterVisible={filterVisible} onCancel={onCancel} onOk={handleOk} />
          <Button onClick={showModalSetting} size="default" type="primary" key="2">
            <SettingOutlined />
            Tùy chỉnh bảng
          </Button>
          <ConfigTable onCancel={onCancel} onOk={handleOk} visible={editVisible} />
        </div>
      </div>
      {filterOption ? (
        <div className="flex items-center justify-center w-full mt-5 mb-[25px] md:flex-col md:justify-center gap-[15px]">
          {!filterOnchange ? (
            <div className="inline-flex items-center flex-wrap w-full gap-[20px] md:justify-center">
              <div className="inline-flex items-center">
                <Input
                  className="h-10 text-body dark:text-white60 bg-white dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
                  size="default"
                  placeholder="Tìm kiếm theo activity id,case id,from to,subject,..."
                  prefix={prefix}
                />
              </div>
            </div>
          ) : (
            <div className="inline-flex items-center flex-wrap w-full gap-[20px] md:justify-center">
              <div className="inline-flex items-center">
                <Input
                  addonBefore={<SearchOutlined />}
                  placeholder="Tìm kiếm theo activity id,case id,from to,subject,..."
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        ''
      )}

      <div className="table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-td-border-none ant-pagination-custom-style ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none dark-border-row">
        {rowSelection ? (
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            dataSource={tableData}
            columns={columns}
          />
        ) : (
          <div>
            <Table dataSource={tableData} pagination={false} columns={columns} />
            <Pagination showSizeChanger defaultCurrent={3} total={tableData.length} />
          </div>
        )}
      </div>
    </>
  );
}

DataTable.propTypes = {
  filterOption: PropTypes.bool,
  filterOnchange: PropTypes.bool,
  rowSelection: PropTypes.bool,
  tableData: PropTypes.array,
  columns: PropTypes.array,
};
export default DataTable;
