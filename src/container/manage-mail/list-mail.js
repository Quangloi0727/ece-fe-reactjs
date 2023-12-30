/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from '../../components/dropdown/dropdown';
import DataListEmail from '../../components/manage-mail/list-email';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import withAdminLayout from '../../layout/withAdminLayout';
import { PREFIX_CUSTOMIZE_TABLE, ACTIVITY_SUB_STATUS, ACTIVITY_MODE, CONDITION_LIST_EMAIL_TO } from '../../constants';
import { Button } from '../../components/buttons/buttons';
import { NavAuth } from '../../components/utilities/auth-info/auth-info-style';

function ListEmail() {
  const { t } = useTranslation();

  const { tableData, totalData, customizeTableData } = useSelector((states) => {
    return {
      tableData: states.dataTableEmail.tableData,
      totalData: states.dataTableEmail.totalData,
      customizeTableData: states.customizeTable.config,
    };
  });

  const [configColumn, setConfigColumn] = useState(customizeTableData);

  useEffect(() => {
    const newConfigs = [
      {
        title: 'Activity ID',
        dataIndex: 'activityId',
        key: 'activityID',
        align: 'left',
        fixed: 'left',
      },
    ];
    customizeTableData.forEach((item) => {
      if (item.isChecked === true) {
        return newConfigs.push({
          title: <span>{t(`${PREFIX_CUSTOMIZE_TABLE}${item.key}`)}</span>,
          dataIndex: item.key,
          key: item.key,
          align: 'left',
        });
      }
    });
    setConfigColumn(newConfigs);
  }, [customizeTableData]);
  const tableDataSource = [];
  if (tableData?.length > 0) {
    tableData.map((item) => {
      const {
        activityId,
        subject,
        user,
        createdOn,
        activitySubStatus,
        caseId,
        queue,
        numAttachments,
        activityPriority,
        email,
        activityMode,
      } = item;
      const to = (
        <NavAuth>
          {email?.emailAddressTo.length > CONDITION_LIST_EMAIL_TO &&
            email?.emailAddressTo.map((rowData, index) => {
              return (
                <Link to="#" key={index}>
                  <span className="text-[13px]">{rowData?.emailAddress}</span>
                </Link>
              );
            })}
        </NavAuth>
      );
      return tableDataSource.push({
        activityId: (
          <Link
            to={`/manage-email/activity/${activityId}`}
            key={activityId}
            style={{ textDecoration: 'underline', fontSize: '13px' }}
          >
            {activityId}
          </Link>
        ),
        subject: (
          <span className="text-body dark:text-white60 text-[13px] " title={subject} key={subject}>
            {subject}
          </span>
        ),
        assignedTo: (
          <span className="text-body dark:text-white60 text-[13px]" key={user?.userName}>
            {user?.userName}
          </span>
        ),
        createdOn: (
          <span className="text-body dark:text-white60 text-[13px] " key={createdOn}>
            {moment(createdOn).format('DD/MM/YYYY HH:mm A')}
          </span>
        ),
        subStatus: (
          <Button
            size="default"
            className={
              ACTIVITY_SUB_STATUS.DONE.includes(activitySubStatus)
                ? 'bg-success border-solid border-1 border-success text-white dark:text-white87 text-[13px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]'
                : 'bg-danger border-solid border-1 border-danger text-white dark:text-white87 text-[13px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]'
            }
            key={activitySubStatus}
          >
            {ACTIVITY_SUB_STATUS.DONE.includes(activitySubStatus) ? 'Completed - Done' : 'Assigned - In Process'}
          </Button>
        ),
        caseId: (
          <Link
            to={`/manage-email/case/${caseId}`}
            style={{ textDecoration: 'underline', fontSize: '13px' }}
            key={caseId}
          >
            {caseId}
          </Link>
        ),
        queueName: (
          <span className="text-body text-[13px]" key={queue?.queueName}>
            {queue?.queueName}
          </span>
        ),
        file: (
          <span className="text-body text-[13px]" key={numAttachments}>
            {numAttachments > 0 ? 'Có' : 'Không'}
          </span>
        ),
        priority: (
          <span className="text-body text-[13px]" key={activityPriority}>
            {activityPriority}
          </span>
        ),
        from: (
          <span className="text-body  text-[13px]" key={email?.fromEmailAddress}>
            {email?.fromEmailAddress}
          </span>
        ),

        to:
          email?.emailAddressTo.length > CONDITION_LIST_EMAIL_TO ? (
            <Dropdown
              content={to}
              trigger="click"
              placement="bottom"
              className="text-[13px]"
              getPopupContainer={(trigger) => trigger.parentNode}
            >
              <span className="text-[13px]">
                <Row>
                  <Col span={23}>{email?.emailAddressTo.length} email</Col>
                  <Col span={1}>
                    <DownOutlined />
                  </Col>
                </Row>
              </span>
            </Dropdown>
          ) : (
            <span className="text-[13px]" key={email?.emailAddressTo[0].emailAddress}>
              {email?.emailAddressTo[0].emailAddress}
            </span>
          ),
        direction: (
          <span className="text-body text-[13px]" key={activityMode}>
            {activityMode === ACTIVITY_MODE.INBOUND
              ? 'Mail nhận'
              : activityMode === ACTIVITY_MODE.OUTBOUND
              ? 'Mail gửi'
              : ''}
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
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <GlobalUtilityStyle>
          <Row gutter={15}>
            <Col xs={24} className="mb-[25px]">
              <PaginationStyle>
                <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                  <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b ">
                    <Heading as="h4" className="text-[25px] font-medium mb-0">
                      {t('lookUpEmail')}
                    </Heading>
                  </div>
                  <div className="p-[25px]">
                    <DataListEmail tableData={tableDataSource} totalData={totalData} columns={configColumn} />
                  </div>
                </div>
              </PaginationStyle>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </>
  );
}

export default withAdminLayout(ListEmail);
