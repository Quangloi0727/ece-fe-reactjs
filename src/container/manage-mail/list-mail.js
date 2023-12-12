/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import DataListEmail from '../../components/manage-mail/list-email';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import { tableReadData } from '../../redux/manage-mail/list-mail/actionCreator';
import withAdminLayout from '../../layout/withAdminLayout';
import { PREFIX_CUSTOMIZE_TABLE } from '../../constants';

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
    const newConfigs = [{ title: 'Activity ID', dataIndex: 'activityId', key: 'activityID', align: 'center' }];
    customizeTableData.forEach((item) => {
      if (item.isChecked === true) {
        return newConfigs.push({
          title: <span>{t(`${PREFIX_CUSTOMIZE_TABLE}${item.key}`)}</span>,
          dataIndex: item.key,
          key: item.key,
          align: 'center',
        });
      }
    });
    setConfigColumn(newConfigs);
  }, [customizeTableData]);

  const tableDataSource = [];

  if (tableData.length > 0) {
    tableData.map((item) => {
      const { id, name, country, company, position, status, date } = item;
      return tableDataSource.push({
        id: <span className="text-body dark:text-white60 text-[15px] font-medium" key={id}>{`#${id}`}</span>,
        user: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={name}>
            {name}
          </span>
        ),
        country: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={country}>
            {country}
          </span>
        ),
        company: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={company}>
            {company}
          </span>
        ),
        position: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={position}>
            {position}
          </span>
        ),
        date: (
          <span className="text-body dark:text-white60 text-[15px] font-medium" key={date}>
            {date}
          </span>
        ),
        status: (
          <span
            className={`inline-flex items-center justify-center bg-${status}-transparent text-${status} min-h-[24px] px-3 text-xs font-medium rounded-[15px]`}
            key={status}
          >
            {status}
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
                    <DataListEmail
                      filterOption
                      filterOnchange
                      tableData={tableDataSource}
                      columns={configColumn}
                      rowSelection={false}
                    />
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
