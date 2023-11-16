/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { Col, Form, Input, Modal, Row, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { CSS } from '@dnd-kit/utilities';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../buttons/buttons';
import { settingTableData } from '../../redux/configTable/actionCreator';

function ConfigTable({ visible, onOk, onCancel }) {
  const [formSetting] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch) {
      dispatch(settingTableData());
    }
  }, [dispatch]);
  const { checkList } = useSelector((states) => {
    return {
      checkList: states.dataSettingTable,
    };
  });
  const handleCancel = () => {
    onCancel();
    formSetting.resetFields();
  };

  const [state, setState] = useState({
    visible,
    modalType: 'primary',
    dataSource: checkList,
  });
  const { dataSource } = state;
  const [checkedBoxes, setCheckedBoxes] = useState(checkList);
  const handleReset = () => {
    // onCancel();
    setState({ ...state, dataSource: checkList });
  };
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        ...state,
        visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  const handelChangeCheckbox = (key) => {
    const temp = [...checkedBoxes];
    const index = temp.findIndex((x) => x.key === key);
    if (index === -1) return;
    temp[index].isChecked = !temp[index].isChecked;
    setCheckedBoxes(temp);
  };
  const handleSubmit = () => {
    console.log(JSON.stringify(checkedBoxes));
  };
  function SortRowCheckBox(value) {
    const checkBox = value.value;
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({
      id: checkBox,
    });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <Form.Item key={checkBox.key}>
        <Row ref={setNodeRef} style={style} {...attributes}>
          <Col span={2}>
            <Input
              type="checkbox"
              className="checkbox-list"
              // key={checkBox.key}
              checked={checkBox.isChecked}
              onChange={() => {
                handelChangeCheckbox(checkBox.key);
              }}
            />
          </Col>
          <Col span={21}>
            <div className="settingTable">{checkBox.name}</div>
          </Col>
          <Col span={1}>
            <div className="ant-table-cell drag-visible">
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: 'none',
                  cursor: 'move',
                }}
                {...listeners}
              />
            </div>
          </Col>
        </Row>
      </Form.Item>
    );
  }
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      // eslint-disable-next-line no-shadow
      const activeIndex = dataSource.findIndex((item) => item.key === active.id.key);
      // eslint-disable-next-line no-shadow
      const overIndex = dataSource.findIndex((item) => item.key === over.id.key);
      const newData = arrayMove(dataSource, activeIndex, overIndex);

      setState({ ...state, dataSource: newData });
      setCheckedBoxes(newData);
    }
  }
  const handleAllCheckBox = (event) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // eslint-disable-next-line no-restricted-syntax
    for (const checkbox of checkboxes) {
      checkbox.checked = event;
    }
    const temp = [...checkedBoxes];
    // eslint-disable-next-line array-callback-return
    temp.map((t) => {
      t.isChecked = event;
    });
    setCheckedBoxes(temp);
  };

  return (
    <Modal
      type={state.modalType}
      title="Tùy chỉnh bảng Tra cứu Email"
      open={state.visible}
      footer={[
        <div
          style={{
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            style={{
              textAlign: 'left',
            }}
            htmlType="submit"
            size="default"
            type="primary"
            key="submit"
            className="px-5 text-sm font-semibold button-filter-delete"
            onClick={handleReset}
          >
            Phục hồi mặc định
          </Button>
          <Space size="small">
            <Button
              htmlType="submit"
              size="default"
              type="primary"
              key="submit"
              className="px-5 text-sm font-semibold button-filter-cancel"
              onClick={handleCancel}
            >
              Hủy
            </Button>
            <Button
              htmlType="submit"
              size="default"
              type="primary"
              key="submit"
              onClick={handleSubmit}
              className="px-5 text-sm font-semibold h-11 button-filter-search"
            >
              Lưu
            </Button>
          </Space>
        </div>,
      ]}
      onCancel={handleCancel}
      width={600}
    >
      <DndContext onDragEnd={handleDragEnd}>
        <div className="bg-white dark:bg-white10 m-0 p-0 rounded-10 relative">
          <div className="px-1.5">
            <Form form={formSetting} name="contact" onFinish={onOk}>
              <Form.Item name="fieldA">
                <Row>
                  <Col span={2}>
                    <Input
                      type="checkbox"
                      onChange={(e) => {
                        handleAllCheckBox(e.target.checked);
                      }}
                      className="checkbox-list"
                    />
                  </Col>
                  <Col span={22}>Chọn tất cả</Col>
                </Row>
              </Form.Item>
              <SortableContext items={dataSource} strategy={rectSortingStrategy}>
                {/* eslint-disable-next-line no-shadow */}
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
ConfigTable.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  onOk: propTypes.func.isRequired,
};
export default ConfigTable;
