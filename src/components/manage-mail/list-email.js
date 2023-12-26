import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { Input, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, SettingOutlined } from '@ant-design/icons';
import FilterAdvance from './modal/filter-advance';
import CustomizeTable from './modal/customize-table';
import { tableReadData } from '../../redux/manage-mail/list-mail/actionCreator';
import { Button } from '../buttons/buttons';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants';

function DataListEmail({ tableData, columns, totalData }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [state, setState] = useState({
    showOrHideModalFilter: false,
    showOrHideModalCustomizeTable: false,
  });
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [searchMulti, setSearchMulti] = useState('');
  const [filterAdvance, setFilterAdvance] = useState({});
  const { showOrHideModalFilter, showOrHideModalCustomizeTable } = state;

  useEffect(() => {
    if (dispatch) {
      dispatch(tableReadData(page, pageSize, searchMulti, filterAdvance));
    }
  }, [page, pageSize, searchMulti, filterAdvance]);

  const handleSearch = (e) => {
    const { value } = e.currentTarget;
    setSearchMulti(value);
    setPage(DEFAULT_PAGE);
    setPageSize(DEFAULT_PAGE_SIZE);
  };

  const showModalFilter = () => {
    setState({
      ...state,
      showOrHideModalFilter: true,
    });
  };

  const showModalCustomizeTable = () => {
    setState({
      ...state,
      showOrHideModalCustomizeTable: true,
    });
  };

  const hideModal = () => {
    setState({
      ...state,
      showOrHideModalFilter: false,
      showOrHideModalCustomizeTable: false,
    });
  };

  const handleChangePage = (current, pageSizeChange) => {
    setPage(current);
    setPageSize(pageSizeChange);
  };

  const formDataFilterAdvance = (values) => {
    setFilterAdvance(values);
  };

  const prefix = <UilSearch className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-light dark:text-white60" />;
  return (
    <>
      <div className="flex items-center w-full md:flex-col">
        <div className="min-w-[120px]">
          <Button onClick={showModalFilter} style={{ fontWeight: 'normal' }} size="default" type="light" outlined>
            <FilterOutlined />
            {t('filter')}
          </Button>
          <FilterAdvance
            showOrHideModalFilter={showOrHideModalFilter}
            hideModal={hideModal}
            formDataFilterAdvance={formDataFilterAdvance}
          />
        </div>
        <div className="min-w-[100px]">
          <Button
            onClick={showModalCustomizeTable}
            style={{ fontWeight: 'normal' }}
            size="default"
            type="light"
            outlined
          >
            <SettingOutlined />
            {t('customizeTable')}
          </Button>
          <CustomizeTable showOrHideModalCustomizeTable={showOrHideModalCustomizeTable} hideModal={hideModal} />
        </div>
      </div>

      <div className="flex items-center  w-full mt-5 mb-[25px] md:flex-col gap-[15px]">
        <div className="min-w-[500px]">
          <Input
            onChange={handleSearch}
            className="h-10 text-[13px] text-body dark:text-white60 bg-white dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
            placeholder="Tìm kiếm theo activity id, case id, from to, subject,..."
            prefix={prefix}
          />
        </div>
      </div>

      <div className="table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-td-border-none ant-pagination-custom-style ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none dark-border-row">
        <Table
          pagination={{
            showSizeChanger: true,
            total: totalData,
            onChange: handleChangePage,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
          dataSource={tableData}
          columns={columns}
          rowKey={(el) => el.activityId.key}
          scroll={{
            y: 500,
            x: 1500,
          }}
        />
      </div>
    </>
  );
}

DataListEmail.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
  totalData: PropTypes.number,
};

export default DataListEmail;
