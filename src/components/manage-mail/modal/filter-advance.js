import { Col, DatePicker, Form, Input, Modal, Row, Select, Space } from 'antd';
import { CloseOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '../../buttons/buttons';
import { FIELD_TYPE, PREFIX_FILTER_ADVANCE, LOCAL_STORAGE_VARIABLE } from '../../../constants/index';
import { setItem } from '../../../utility/localStorageControl';

function FilterAdvance({ showOrHideModalFilter, hideModal }) {
  const { RangePicker } = DatePicker;
  const { t } = useTranslation();
  const { configFilterAdvance } = useSelector((states) => {
    return {
      configFilterAdvance: states.configFilterAdvance.config,
    };
  });

  const formRef = useRef(null);

  const handleFilterAdvance = () => {
    const formData = formRef.current.getFieldsValue();
    const { createOn } = formData;
    if (createOn) {
      const formattedDateRange = createOn.map((date) => moment(date).format('DD/MM/YYYY HH:mm'));
      formData.createOn = formattedDateRange;
    }
    setItem(LOCAL_STORAGE_VARIABLE.FILTER_ADVANCE);
  };

  const handleResetForm = () => {
    formRef.current.resetFields();
  };

  const rangePresets = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(-1, 'days'), moment().subtract(-1, 'days')],
    'Tuần này': [moment().day(1), moment().day(7)],
    'Tuần trước': [moment().day(-7), moment().day(0)],
    'Tháng này': [moment().startOf('months'), moment().endOf('months')],
    'Tháng trước': [moment().subtract(1, 'months').startOf('months'), moment().subtract(1, 'months').endOf('months')],
    'Qúy này': [moment().startOf('quarters'), moment().endOf('quarters')],
    'Qúy trước': [moment().subtract(3, 'months').startOf('quarters'), moment().subtract(3, 'months').endOf('quarters')],
  };

  function ElementFilterAdvance(listElement) {
    const { element } = listElement;
    const { fieldType, key, option, placeholder, placeholderCondition, conditionOption, conditionValue } = element;
    const renderCurrentSelection = () => {
      switch (fieldType) {
        case FIELD_TYPE.TEXT:
          return (
            <div>
              <Form.Item label={t(`${PREFIX_FILTER_ADVANCE}${key}`)} key={`label${key}`} />
              <Row className="mt-[-20px]">
                <Col className="gutter-row" span={14}>
                  <div className="gutter-box">
                    <Form.Item name={key} key={key}>
                      <Input placeholder={placeholder} />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row" span={1} />
                <Col className="gutter-row" span={9}>
                  <div className="gutter-box">
                    <Form.Item key={`condition${key}`} name={`condition${key}`} initialValue={conditionValue}>
                      <Select options={conditionOption} placeholder={placeholderCondition} />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </div>
          );
        case FIELD_TYPE.SELECT:
          return (
            <div>
              <Form.Item label={t(`${PREFIX_FILTER_ADVANCE}${key}`)} key={`label${key}`} />
              <Row className="mt-[-20px]">
                <Col className="gutter-row" span={24}>
                  <div className="gutter-box">
                    <Form.Item key={key} name={key}>
                      <Select
                        style={{
                          width: '100%',
                        }}
                        options={option}
                        placeholder={placeholder}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </div>
          );
        case FIELD_TYPE.DATE:
          return (
            <div>
              <Form.Item label={t(`${PREFIX_FILTER_ADVANCE}${key}`)} key={`label${key}`} />
              <Row className="mt-[-20px]">
                <Col className="gutter-row" span={24}>
                  <div className="gutter-box">
                    <Form.Item name={key} key={key}>
                      <RangePicker
                        size="small"
                        style={{
                          width: '100%',
                        }}
                        format="DD/MM/yyyy HH:mm"
                        ranges={rangePresets}
                        showTime={{ format: 'HH:mm' }}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </div>
          );
        default:
          return null;
      }
    };
    return <div> {renderCurrentSelection()}</div>;
  }
  return (
    <Modal
      closable={false}
      title="Bộ lọc Email"
      open={showOrHideModalFilter}
      footer={[
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          key="footerModalFilterAdvance"
        >
          <Button
            type="danger"
            key="resetFilter"
            className="px-5 text-sm font-semibold button-reset h-10"
            onClick={handleResetForm}
          >
            <DeleteOutlined /> Xóa bộ lọc
          </Button>
          <Space size="small">
            <Button
              type="extra-light"
              key="cancelFilter"
              className="px-5 text-sm font-semibold button-filter-cancel h-10"
              onClick={hideModal}
            >
              <CloseOutlined /> Hủy
            </Button>
            <Button
              type="info"
              key="submitFilter"
              className="px-5 text-sm font-semibold h-10 button-filter-search"
              onClick={handleFilterAdvance}
            >
              <SearchOutlined /> Tìm kiếm
            </Button>
          </Space>
        </div>,
      ]}
      width={800}
    >
      <div>
        <Form name="filterAdvance" ref={formRef}>
          <Row gutter={16}>
            {configFilterAdvance.map((el, index) => (
              <Col className="gutter-row" span={12} key={index}>
                <ElementFilterAdvance element={el} key={el.key} />
              </Col>
            ))}
          </Row>
        </Form>
      </div>
    </Modal>
  );
}

FilterAdvance.propTypes = {
  showOrHideModalFilter: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
};

export default FilterAdvance;
