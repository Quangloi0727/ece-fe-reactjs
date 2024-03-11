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
import ImportFileCsv from './modal/import-file/import-file-csv';
import { Button } from '../buttons/buttons';
import { getListUser } from '../../redux/manage-account-user/actionCreator';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants';
import { getListFile } from '../../redux/import-file/actionCreator';

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
  const [searchMulti, setSearchMulti] = useState('');

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
        dispatch(getListUser(page, pageSize, searchMulti));
      }
    }, 500);
    return () => clearTimeout(delayedDispatch);
  }, [page, pageSize, searchMulti, dispatch]);

  const handleSearch = (e) => {
    const { value } = e.currentTarget;
    setSearchMulti(value);
    setPage(DEFAULT_PAGE);
    setPageSize(DEFAULT_PAGE_SIZE);
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
    dispatch(getListFile(page, pageSize));
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
            {t('Thêm người truy cập')}
          </Button>
          <AddUserForm showOrHideModal={showOrHideModal} hideModal={hideModal} />
        </div>
        <div className="min-w-[100px]">
          <Button onClick={showModalImportFile} style={{ fontWeight: 'normal' }} size="default" type="light" outlined>
            <UilFileImport />
            {t('Import')}
          </Button>
          <ImportFileCsv showOrHideModalImportFile={showOrHideModalImportFile} hideModal={hideModal} />
        </div>
        <div className="min-w-[100px]">
          <Button onClick={showModalDeleteUser} style={{ fontWeight: 'normal' }} size="default" type="light" outlined>
            <UilTrashAlt />
            {t('Xóa hàng loạt')}
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
            onChange={handleSearch}
            className="h-10 text-[13px] text-body dark:text-white60  dark:bg-white10 border-normal dark:border-white10 rounded-[6px]"
            placeholder="Tìm kiếm theo tên đăng nhập"
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
        rowKey={(el) => el.name.key}
        columns={columns}
        dataSource={tableData}
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
