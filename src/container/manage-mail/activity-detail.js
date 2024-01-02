import { Col, Row, Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import TabPane from 'antd/es/tabs/TabPane';
import { useDispatch, useSelector } from 'react-redux';
import { Resize, ResizeHorizon } from 'react-resize-layout';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import { activityDetailData } from '../../redux/manage-mail/activity-detail/actionCreator';
import withAdminLayout from '../../layout/withAdminLayout';
import ContentActivity from '../../components/manage-mail/content-activity-detail';
import GeneralInfoActivity from '../../components/manage-mail/tabs/general-info-activity';
import Note from '../../components/manage-mail/tabs/note';
import HistoryActivity from '../../components/manage-mail/tabs/interactive-history';
import { ACTIVITY_DETAIL_TAB } from '../../constants';

function ActivityDetail() {
  const { activityId } = useParams();
  const componentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(ACTIVITY_DETAIL_TAB.GENERAL_INFO);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(activityDetailData(activityId));
  }, [activityId]);

  const { data } = useSelector((states) => {
    return {
      data: states.dataActivityDetail.data,
    };
  });
  const { notes, historyActivity } = data;

  const items = [
    {
      key: ACTIVITY_DETAIL_TAB.GENERAL_INFO,
      label: `${t('generalInformation')}`,
      children: <GeneralInfoActivity dataInfo={data} />,
    },
    {
      key: ACTIVITY_DETAIL_TAB.NOTE,
      label: `${t('note')}`,
      children: <Note data={notes} />,
    },
    {
      key: ACTIVITY_DETAIL_TAB.ACTIVITY_HISTORY,
      label: `${t('interactiveHistory')}`,
      children: <HistoryActivity dataHistory={historyActivity} />,
    },
  ];

  const handleTabChange = (atk) => {
    setActiveTab(atk);
  };

  const printContentToPdf = useReactToPrint({
    content: () => componentRef.current,
  });

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
                    <Heading className="text-lg font-medium mb-0">
                      <Link to="/list-email" className="bg-white">
                        <LeftOutlined style={{ verticalAlign: 'baseline' }} /> {t('goBackPreviousScreen')}
                      </Link>
                    </Heading>
                  </div>
                  <div className="p-[25px]" style={{ minHeight: '600px' }}>
                    <div className="flex items-center w-full mt-5 mb-[25px] md:flex-col gap-[15px]">
                      <Resize handleWidth="3px">
                        <ResizeHorizon width="65%" className="resize-activity-left">
                          <ContentActivity value={data} handlePrint={printContentToPdf} ref={componentRef} />
                        </ResizeHorizon>
                        <ResizeHorizon className="resize-activity-right">
                          <Tabs
                            style={{
                              overflowY: 'scroll',
                              overflowX: 'hidden',
                              height: '600px',
                            }}
                            defaultActiveKey={ACTIVITY_DETAIL_TAB.GENERAL_INFO}
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

export default withAdminLayout(ActivityDetail);
