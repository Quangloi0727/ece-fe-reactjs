import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { Input, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, SettingOutlined } from '@ant-design/icons';
import FilterAdvance from './modal/filter-advance';
import CustomizeTable from './modal/customize-table';
import { tableReadData } from '../../redux/manage-mail/list-mail/actionCreator';
import { Button } from '../buttons/buttons';
import { getItem } from '../../utility/localStorageControl';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, LOCAL_STORAGE_VARIABLE } from '../../constants';
import { Loading } from '../../container/profile/authentication/overview/Loading';

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
  const [filterAdvance, setFilterAdvance] = useState(getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE) || {});
  const { showOrHideModalFilter, showOrHideModalCustomizeTable } = state;

  useEffect(() => {
    const delayedDispatch = setTimeout(() => {
      if (dispatch) {
        dispatch(tableReadData(page, pageSize, searchMulti, filterAdvance));
      }
    }, 500);
    return () => clearTimeout(delayedDispatch);
  }, [page, pageSize, searchMulti, filterAdvance, dispatch]);

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

  const { isLoading } = useSelector((getState) => {
    return {
      isLoading: getState.dataTableEmail.loading,
    };
  });

  const prefix = <UilSearch className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-light dark:text-white60" />;
  return (
    <>
      <Loading show={isLoading} />
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
            className="h-10 text-[13px] text-body dark:text-white60  dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
            placeholder={t('placeholderSearch')}
            prefix={prefix}
          />
        </div>
      </div>

      <div className="">
        <Table
          pagination={{
            showSizeChanger: true,
            total: totalData,
            onChange: handleChangePage,
            style: { fontSize: 13, justifyContent: 'center' },
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
