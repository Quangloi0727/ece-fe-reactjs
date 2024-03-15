/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import moment from 'moment';
import DataListUser from '../../components/manage-user-local/list-user';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import withAdminLayout from '../../layout/withAdminLayout';
import DetailUserForm from '../../components/manage-user-local/modal/detail-user';
import EditUserForm from '../../components/manage-user-local/modal/edit-user';
import DeleteUserForm from '../../components/manage-user-local/modal/delete-user';
import { getUser } from '../../redux/manage-user-local/user/actionCreator';
import {
  PREFIX_FORM_MANAGE_USER,
  TITLE_FORM_MANAGE_USER,
  TOOLTIP_FORM_MANAGE_USER,
  USER,
  TOTALDATA,
} from '../../constants/index';

function ListUser() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [state, setState] = useState({
    idEdit: null,
    nameDelete: null,
    idUser: null,
    keyModalDetail: null,
    showOrHideModalEditForm: false,
    showOrHideModalDetailUser: false,
    showOrHideModalDeleteUser: false,
  });

  const { showOrHideModalEditForm, showOrHideModalDetailUser, showOrHideModalDeleteUser, idUser, idEdit, nameDelete } =
    state;

  const showModalEditUser = (id) => {
    setState({
      ...state,
      showOrHideModalEditForm: true,
      idEdit: id,
    });
    dispatch(getUser(id));
  };
  const showModalDetailUser = (id) => {
    setState({
      ...state,
      showOrHideModalDetailUser: true,
    });
    dispatch(getUser(id));
  };

  const hideModal = () => {
    setState({
      ...state,
      showOrHideModalEditForm: false,
      showOrHideModalDetailUser: false,
      showOrHideModalDeleteUser: false,
    });
  };

  const showModalDeleteUser = (id, name) => {
    setState({
      ...state,
      showOrHideModalDeleteUser: true,
      idUser: id,
      nameDelete: name,
    });
  };

  const { dataUser, totalData, dataUserColumn } = useSelector((states) => {
    return {
      dataUser: states.listDataUser.dataUser,
      totalData: states.listDataUser.totalData,
      dataUserColumn: states.listDataUser.dataUserColumn,
    };
  });
  const tableUserSource = [];
  if (dataUser && dataUser.length) {
    dataUser.map((item, index) => {
      const { id, username, type, role, updatedAt, createdByInfo } = item;
      return tableUserSource.push({
        id: (
          <span className="text-start dark:text-white60 text-[13px] " title={id} key={`${id}-${index}`}>
            {id}
          </span>
        ),
        username: (
          <span className="text-start dark:text-white60 text-[13px] " title={username} key={`${username}-${index}`}>
            {username}
          </span>
        ),
        action: (
          <div className="items-center w-full md:flex-col">
            <Tooltip title={t(`${PREFIX_FORM_MANAGE_USER}${TOOLTIP_FORM_MANAGE_USER.DETAIL}`)}>
              <Button
                className="border-none bg-none"
                onClick={() => showModalDetailUser(id)}
                style={{ fontWeight: 'normal' }}
                size="default"
                type="light"
              >
                <UilEye className="w-4 text-light-extra dark:text-white60" />
              </Button>
            </Tooltip>

            <Tooltip title={t(`${PREFIX_FORM_MANAGE_USER}${TOOLTIP_FORM_MANAGE_USER.EDIT}`)}>
              <Button
                className="border-none bg-none"
                onClick={() => showModalEditUser(id)}
                style={{ fontWeight: 'normal' }}
                size="default"
                type="light"
              >
                <UilEdit className="w-4 text-light-extra dark:text-white60" />
              </Button>
            </Tooltip>

            <Tooltip title={t(`${PREFIX_FORM_MANAGE_USER}${TOOLTIP_FORM_MANAGE_USER.DELETE}`)}>
              <Button
                className="border-none bg-none"
                onClick={() => showModalDeleteUser(id, username)}
                style={{ fontWeight: 'normal' }}
                size="default"
                type="light"
              >
                <UilTrash className="w-4 text-light-extra dark:text-white60" />
              </Button>
            </Tooltip>
          </div>
        ),
        type: (
          <span className="text-start dark:text-white60 text-[13px] " key={`${type}-${index}`}>
            {type === USER.KEY_TYPE_SSO ? USER.SSO : USER.LOCAL}
          </span>
        ),
        role: (
          <span className=" text-start dark:text-white60 text-[13px]" key={`${role}-${index}`}>
            {role === USER.KEY_ROLE_ADMIN ? USER.ADMIN : role === USER.KEY_ROLE_USER ? USER.USER : USER.ALL}
          </span>
        ),
        creator: (
          <span className=" text-start dark:text-white60 text-[13px]" key={`${createdByInfo?.id}-${index}`}>
            {createdByInfo?.username}
          </span>
        ),
        dateCreate: (
          <span className=" text-start dark:text-white60 text-[13px]" key={`${updatedAt}-${index}`}>
            {moment(updatedAt).format('DD/MM/YYYY HH:mm:ss ')}
          </span>
        ),
      });
    });
  }

  return (
    <>
      <PageHeader
        title="Dashboard"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px]  lg:min-h-[580px] flex-1 h-auto  xl:px-[15px] pb-[30px] bg-transparent">
        <GlobalUtilityStyle>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <PaginationStyle>
                <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b ">
                    <Heading as="h4" className="text-[25px] font-medium mb-0">
                      {t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.MANAGEUSER}`)}
                    </Heading>
                  </div>
                  <div className="p-[30px] text-left">
                    <DataListUser tableData={tableUserSource} columns={dataUserColumn} totalData={totalData} />
                    <div className="text-left pb-[25px]" style={{ paddingLeft: 20 }}>
                      {t(`${PREFIX_FORM_MANAGE_USER}${TOTALDATA}`)}
                      {totalData}
                    </div>
                  </div>
                  <DetailUserForm showOrHideModalDetailUser={showOrHideModalDetailUser} hideModal={hideModal} />
                  <EditUserForm
                    showOrHideModalEditForm={showOrHideModalEditForm}
                    hideModal={hideModal}
                    idEdit={idEdit}
                  />
                  <DeleteUserForm
                    showOrHideModalDeleteUser={showOrHideModalDeleteUser}
                    hideModal={hideModal}
                    typeRemove
                    idUser={idUser}
                    nameDelete={nameDelete}
                  />
                </div>
              </PaginationStyle>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </>
  );
}

export default withAdminLayout(ListUser);
