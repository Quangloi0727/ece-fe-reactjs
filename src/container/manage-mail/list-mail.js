/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DataListEmail from '../../components/manage-mail/list-email';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import { tableReadData } from '../../redux/manage-mail/list-mail/actionCreator';
import withAdminLayout from '../../layout/withAdminLayout';
import { PREFIX_CUSTOMIZE_TABLE } from '../../constants';
import { Button } from '../../components/buttons/buttons';

function ListEmail() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(tableReadData());
    }
  }, [dispatch]);

  const { tableData, customizeTableData } = useSelector((states) => {
    return {
      tableData: states.dataTableEmail.tableData,
      customizeTableData: states.customizeTable.config,
    };
  });

  const [configColumn, setConfigColumn] = useState(customizeTableData);

  useEffect(() => {
    const newConfigs = [{ title: 'Activity ID', dataIndex: 'activityId', key: 'activityID', align: 'left' }];
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

  if (tableData.length > 0) {
    tableData.map((item) => {
      const {
        activityId,
        subject,
        assignedTo,
        createdOn,
        subStatus,
        caseId,
        queueName,
        file,
        priority,
        from,
        to,
        direction,
      } = item;
      return tableDataSource.push({
        activityId: (
          <Link to={`/manage-email/activity/${activityId}`} key={activityId} style={{ textDecoration: 'underline' }}>
            {activityId}
          </Link>
        ),
        subject: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" title={subject} key={subject}>
            {subject}
          </span>
        ),
        assignedTo: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={assignedTo}>
            {assignedTo}
          </span>
        ),
        createdOn: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={createdOn}>
            {moment(createdOn).format('DD/MM/YYYY HH:mm A')}
          </span>
        ),
        subStatus: (
          <Button
            size="default"
            className="bg-danger border-solid border-1 border-danger text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
            key={subStatus}
          >
            {subStatus}
          </Button>
        ),
        caseId: (
          <Link to={`/list-email/caseid/${caseId}`} style={{ textDecoration: 'underline' }} key={caseId}>
            {caseId}
          </Link>
        ),
        queueName: (
          <span className="text-body font-medium" key={queueName}>
            {queueName}
          </span>
        ),
        file: (
          <span className="text-body font-medium" key={file}>
            {file}
          </span>
        ),
        priority: (
          <span className="text-body font-medium" key={priority}>
            {priority}
          </span>
        ),
        from: (
          <span className="text-body  font-medium" key={from}>
            {from}
          </span>
        ),
        to: (
          <span className="text-body  font-medium" key={to}>
            {to}
          </span>
        ),
        direction: (
          <span className="text-body font-medium" key={direction}>
            {direction}
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
                    <Heading as="h4" className="text-lg font-medium mb-0">
                      Tra cứu Email
                    </Heading>
                  </div>
                  <div className="p-[25px]">
                    <DataListEmail filterOption filterOnchange tableData={tableDataSource} columns={configColumn} />
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
