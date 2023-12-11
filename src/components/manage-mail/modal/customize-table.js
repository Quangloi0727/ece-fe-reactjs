import React from 'react';
import { Modal, Space } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../buttons/buttons';

function CustomizeTable({ showOrHideModalCustomizeTable, hideModal }) {
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      const activeIndex = dataSource.findIndex((item) => item.key === active.id.key);
      const overIndex = dataSource.findIndex((item) => item.key === over.id.key);
      const newData = arrayMove(dataSource, activeIndex, overIndex);
      setState({ ...state, dataSource: newData });
    }
  }
  return (
    <Modal
      title="Tùy chỉnh bảng Tra cứu Email"
      open={showOrHideModalCustomizeTable}
      footer={[
        <div
          style={{
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button size="default" key="resetFilter" className="px-5 text-sm font-semibold button-reset">
            Phục hồi mặc định
          </Button>
          <Space size="small">
            <Button key="cancelFilter" className="px-5 text-sm font-semibold button-filter-cancel" onClick={hideModal}>
              Hủy
            </Button>
            <Button htmlType="submit" key="submitFilter" className="px-5 text-sm font-semibold h-11">
              Lưu
            </Button>
          </Space>
        </div>,
      ]}
      width={600}
    >
      <DndContext onDragEnd={handleDragEnd}>
        <div className="bg-white dark:bg-white10 m-0 p-0 rounded-10 relative" key="kfgk">
          <div className="px-1.5">
            <Form form={formSetting} name="contact" onFinish={onOk}>
              <Form.Item key="checkboxAll">
                <Row>
                  <Col span={2}>
                    <Input type="checkbox" />
                  </Col>
                  <Col span={22}>{t(`${translationPrefix}selectAll`)}</Col>
                </Row>
              </Form.Item>
              <Form.Item name="fileA" key="checkBox">
                <Row>
                  <Col span={2} />
                  <Col span={22}>{t(`${translationPrefix}activityId`)}</Col>
                </Row>
              </Form.Item>
              <SortableContext items={dataSource} strategy={rectSortingStrategy}>
                {dataSource.map((value, index) => (
                  <SortRowCheckBox key={index} index={index} value={value} />
                ))}
              </SortableContext>
            </Form>
          </div>
        </div>
      </DndContext>
    </Modal>
  );
}

CustomizeTable.propTypes = {
  showOrHideModalCustomizeTable: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
};

export default CustomizeTable;
