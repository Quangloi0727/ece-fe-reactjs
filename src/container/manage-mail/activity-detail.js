import { Col, Row, Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import TabPane from 'antd/es/tabs/TabPane';
import { useDispatch, useSelector } from 'react-redux';
import { Resize, ResizeHorizon } from 'react-resize-layout';
import { Resizable, ResizableBox } from 'react-resizable';
import { useReactToPrint } from 'react-to-print';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PaginationStyle, GlobalUtilityStyle } from '../styled';
import { activityDetailData } from '../../redux/manage-mail/activity-detail/actionCreator';
import withAdminLayout from '../../layout/withAdminLayout';
import ContentActivity from '../../components/manage-mail/content-activity-detail';
// import GeneralInfo from '../../components/manage-mail/tabs/general-info';
// import Note from '../../components/manage-mail/tabs/note';
// import HistoryActivity from '../../components/manage-mail/tabs/interactive-history';
import { ACTIVITY_DETAIL_TAB } from '../../constants';

function ActivityDetail() {
  const { activityId } = useParams();
  const componentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(ACTIVITY_DETAIL_TAB.activeKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activityDetailData(activityId));
  }, [activityId]);

  const { data } = useSelector((states) => {
    return {
      data: states.dataActivityDetail.activityDetailData,
    };
  });
  //   const items = [
  //     {
  //       key: 'generalInfo',
  //       label: 'Thông tin chung',
  //       children: <GeneralInfo dataInfo={data?.activityInfo} />,
  //     },
  //     {
  //       key: 'note',
  //       label: 'Ghi chú',
  //       children: <Note dataNote={data?.activityNote} />,
  //     },
  //     {
  //       key: 'interactiveHistory',
  //       label: 'Lịch sử tương tác',
  //       children: <HistoryActivity dataHistory={data?.interactionHistory} />,
  //     },
  //   ];

  const handleTabChange = (atk) => {
    setActiveTab(atk);
  };

  const printContentToPdf = useReactToPrint({
    content: () => {
      console.log(1111, componentRef);
      console.log(2222, componentRef.current);
    },
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
                    <Heading as="h4" className="text-lg font-medium mb-0">
                      <Link to="/list-email" className="bg-white">
                        <LeftOutlined /> Quay về màn hình trước
                      </Link>
                    </Heading>
                  </div>
                  <div className="p-[25px]" style={{ minHeight: '500px' }}>
                    <div className="flex items-center w-full mt-5 mb-[25px] md:flex-col gap-[15px]">
                      <Resize handleWidth="3px">
                        <ResizeHorizon minWidth="30%" width="60%">
                          <ContentActivity value={data} handlePrint={printContentToPdf} />
                          <GlobalUtilityStyle dangerouslySetInnerHTML={{ __html: data?.contentActivity }} />
                        </ResizeHorizon>
                        <ResizeHorizon minWidth="30%">Horizon 2</ResizeHorizon>
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
