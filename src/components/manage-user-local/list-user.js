import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Table, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import { UilFileImport } from '@iconscout/react-unicons';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import AddUserForm from './modal/add-user';
import DeleteUserForm from './modal/delete-user';
import ImportFileExcel from './modal/import-file/import-file-csv';
import { Button } from '../buttons/buttons';
import { getListUser } from '../../redux/manage-user-local/actionCreator';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  PREFIX_FORM_MANAGE_USER,
  TITLE_FORM_MANAGE_USER,
  SEARCH_MANAGE_USER,
} from '../../constants';
import { getListFile } from '../../redux/manage-user-local/import-file/actionCreator';

function DataListUser({ tableData, columns, totalData }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [state, setState] = useState({
    showOrHideModal: false,
    showOrHideModalDeleteUser: false,
    showOrHideModalImportFile: false,
    selectedIds: [],
  });
  const { showOrHideModal, showOrHideModalDeleteUser, showOrHideModalImportFile, selectedIds } = state;

  const showModalDeleteUser = () => {
    setState({
      ...state,
      showOrHideModalDeleteUser: true,
    });
  };
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [search, setSearch] = useState('');

  const showModalImportFile = () => {
    setState({
      ...state,
      showOrHideModalImportFile: true,
    });
    dispatch(getListFile(page, pageSize));
  };

  useEffect(() => {
    const delayedDispatch = setTimeout(() => {
      if (dispatch) {
        dispatch(getListUser(page, pageSize, search));
      }
    }, 500);
    return () => clearTimeout(delayedDispatch);
  }, [page, pageSize, search, dispatch]);

  const handleSearch = (e) => {
    const { value } = e.currentTarget;
    setSearch(value);
    setPage(DEFAULT_PAGE);
    setPageSize(DEFAULT_PAGE_SIZE);
    dispatch(getListUser(page, pageSize, search));
  };

  const handleChangePage = (current, pageSizeChange) => {
    setPage(current);
    setPageSize(pageSizeChange);
  };

  const showModalAddUser = () => {
    setState({
      ...state,
      showOrHideModal: true,
    });
  };

  const hideModal = () => {
    setState({
      ...state,
      showOrHideModal: false,
      showOrHideModalDeleteUser: false,
      showOrHideModalImportFile: false,
    });
  };

  const [selectionType] = useState('checkbox');

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const newSelectedIds = [];
      selectedRows.forEach((rowKey) => {
        if (!newSelectedIds.includes(rowKey.id.key)) {
          newSelectedIds.push(rowKey.id.key);
        }
      });
      setState({ ...state, selectedIds: newSelectedIds });
    },
  };

  const prefix = <UilSearch className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-light dark:text-white60" />;
  return (
    <div>
      <div className="flex items-center w-full md:flex-col">
        <div className="min-w-[120px]">
          <Button onClick={showModalAddUser} size="default" type="light" style={{ fontWeight: 'normal' }} outlined>
            <PlusOutlined />
            {t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.ADDNEWUSER}`)}
          </Button>
          <AddUserForm showOrHideModal={showOrHideModal} hideModal={hideModal} />
        </div>
        <div className="min-w-[100px]">
          <Button onClick={showModalImportFile} style={{ fontWeight: 'normal' }} size="default" type="light" outlined>
            <UilFileImport />
            {t('Import')}
          </Button>
          <ImportFileExcel showOrHideModalImportFile={showOrHideModalImportFile} hideModal={hideModal} />
        </div>
        <div className="min-w-[100px]">
          <Button
            disabled={selectedIds.length === 0}
            onClick={showModalDeleteUser}
            style={{ fontWeight: 'normal' }}
            size="default"
            type="light"
            outlined
          >
            <UilTrashAlt />
            {t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.DELETEMANYUSER}`)}
          </Button>
          <DeleteUserForm
            showOrHideModalDeleteUser={showOrHideModalDeleteUser}
            hideModal={hideModal}
            typeRemove={false}
            selectedIds={selectedIds}
          />
        </div>
      </div>

      <div className="flex items-center  w-full mt-5 mb-[25px] md:flex-col gap-[15px]">
        <div className="min-w-[500px]">
          <Input
            onPressEnter={handleSearch}
            className="h-10 text-[13px] text-body dark:text-white60  dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
            placeholder={t(`${PREFIX_FORM_MANAGE_USER}${SEARCH_MANAGE_USER}`)}
            prefix={prefix}
          />
        </div>
      </div>
      <Table
        pagination={{
          total: totalData,
          showSizeChanger: true,
          onChange: handleChangePage,
          style: { fontSize: 13, justifyContent: 'center' },
        }}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey={(el) => el.username.key}
        columns={columns}
        dataSource={tableData}
        scroll={{
          y: 500,
        }}
      />
    </div>
  );
}

DataListUser.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
  totalData: PropTypes.number,
};

export default DataListUser;
