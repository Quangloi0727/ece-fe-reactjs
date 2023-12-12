import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { Input, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, SettingOutlined } from '@ant-design/icons';
import FilterAdvance from './modal/filter-advance';
import CustomizeTable from './modal/customize-table';
import { dataLiveFilter } from '../../redux/manage-mail/list-mail/actionCreator';
import { Button } from '../buttons/buttons';

function DataListEmail({ tableData, columns }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [state, setState] = useState({
    showOrHideModalFilter: false,
    showOrHideModalCustomizeTable: false,
  });
  const { showOrHideModalFilter, showOrHideModalCustomizeTable } = state;

  const handleDataUser = (e) => {
    const { value } = e.currentTarget;
    dispatch(dataLiveFilter(value, 'name'));
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

  const prefix = <UilSearch className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-light dark:text-white60" />;
  return (
    <>
      <div className="flex items-center w-full md:flex-col">
        <div className="min-w-[120px]">
          <Button onClick={showModalFilter} size="default" type="light" outlined>
            <FilterOutlined />
            {t('filter')}
          </Button>
          <FilterAdvance showOrHideModalFilter={showOrHideModalFilter} hideModal={hideModal} />
        </div>
        <div className="min-w-[100px]">
          <Button onClick={showModalCustomizeTable} size="default" type="light" outlined>
            <SettingOutlined />
            {t('customizeTable')}
          </Button>
          <CustomizeTable showOrHideModalCustomizeTable={showOrHideModalCustomizeTable} hideModal={hideModal} />
        </div>
      </div>

      <div className="flex items-center  w-full mt-5 mb-[25px] md:flex-col gap-[15px]">
        <div className="min-w-[500px]">
          <Input
            onChange={handleDataUser}
            className="h-10 text-body dark:text-white60 bg-white dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
            placeholder="Tìm kiếm theo activity id,case id,from to,subject,..."
            prefix={prefix}
          />
        </div>
      </div>

      <div className="table-responsive hover-tr-none table-th-shape-none table-last-th-text-right table-th-border-none table-head-rounded table-td-border-none ant-pagination-custom-style ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none dark-border-row">
        <Table
          pagination={{ pageSize: 10, showSizeChanger: true }}
          dataSource={tableData}
          columns={columns}
          rowKey={(el) => el.id.key}
        />
      </div>
    </>
  );
}

DataListEmail.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
};

export default DataListEmail;
