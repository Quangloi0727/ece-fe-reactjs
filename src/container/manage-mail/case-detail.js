import { Col, Row, Tabs } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import TabPane from 'antd/es/tabs/TabPane';
import { useDispatch, useSelector } from 'react-redux';
import { Resize, ResizeHorizon } from 'react-resize-layout';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import { caseDetailData } from '../../redux/manage-mail/case-detail/actionCreator';
import withAdminLayout from '../../layout/withAdminLayout';
import ContentCase from '../../components/manage-mail/content-case-detail';
import Note from '../../components/manage-mail/tabs/note';
import ContentActivity from '../../components/manage-mail/content-activity-detail';
import { CASE_DETAIL_TAB } from '../../constants';
import GeneralInfoCase from '../../components/manage-mail/tabs/general-info-case';
import { activityDetailData } from '../../redux/manage-mail/activity-detail/actionCreator';

function CaseDetail() {
  const { caseId } = useParams();
  const componentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(CASE_DETAIL_TAB.GENERAL_INFO);
  const [checkNullTab, setCheckNullTab] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useNavigate();

  useEffect(() => {
    dispatch(caseDetailData(caseId));
  }, [caseId]);

  const { data, dataActivity } = useSelector((states) => {
    return {
      data: states.dataCaseDetail.data,
      dataActivity: states.dataActivityDetail.data,
    };
  });
  const printContentToPdf = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleChangeContentCase = (activityId) => {
    setActiveTab(CASE_DETAIL_TAB.CONTENT_ACTIVITY);
    dispatch(activityDetailData(activityId));
    setCheckNullTab(false);
  };
  const items = [
    {
      key: CASE_DETAIL_TAB.GENERAL_INFO,
      label: `${t('generalInformation')}`,
      children: <GeneralInfoCase dataInfo={data && data[0] && data[0].case ? data[0].case : []} />,
    },
    {
      key: CASE_DETAIL_TAB.CONTENT_ACTIVITY,
      label: `${t('activityContent')}`,
      children: (
        <ContentActivity
          value={dataActivity}
          checkNullTab={checkNullTab}
          handlePrint={printContentToPdf}
          ref={componentRef}
        />
      ),
    },
    {
      key: CASE_DETAIL_TAB.NOTE,
      label: `${t('note')}`,
      children: <Note data={data && data[0] && data[0].case && data[0].case.notes ? data[0].case.notes : []} />,
    },
  ];

  const handleTabChange = (atk) => {
    setActiveTab(atk);
    setCheckNullTab(true);
  };

  const backToPreviousPage = () => {
    history(-1);
  };

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
                      <Link className="bg-white" onClick={backToPreviousPage}>
                        <LeftOutlined style={{ verticalAlign: 'baseline' }} /> {t('goBackPreviousScreen')}
                      </Link>
                    </Heading>
                  </div>
                  <div className="p-[25px]" style={{ minHeight: '600px' }}>
                    <div className="flex items-center w-full mt-5 mb-[25px] md:flex-col gap-[15px]">
                      <Resize handleWidth="3px">
                        <ResizeHorizon width="45%" className="resize-left">
                          {data && data.length
                            ? data.map((value, index) => (
                                <ContentCase value={value} key={index} changeContentCase={handleChangeContentCase} />
                              ))
                            : ''}
                        </ResizeHorizon>
                        <ResizeHorizon className="resize-right">
                          <Tabs
                            style={{
                              overflowY: 'scroll',
                              overflowX: 'hidden',
                              height: '600px',
                            }}
                            defaultActiveKey={CASE_DETAIL_TAB.GENERAL_INFO}
                            activeKey={activeTab}
                            items={items}
                            onChange={handleTabChange}
                          >
                            {items.map((item) => (
                              <TabPane key={item.key} tab={item.label} />
                            ))}
                          </Tabs>
                        </ResizeHorizon>
                      </Resize>
                    </div>
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

export default withAdminLayout(CaseDetail);
