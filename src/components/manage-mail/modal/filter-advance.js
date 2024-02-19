import { Col, DatePicker, Form, Input, Modal, Row, Select, Space, Button } from 'antd';
import { CloseOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useRef, useEffect } from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FIELD_TYPE, LOCAL_STORAGE_VARIABLE, PREFIX_FILTER_ADVANCE } from '../../../constants/index';
import { getListUser } from '../../../redux/manage-user/list-user/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import { setItem, getItem, removeItem } from '../../../utility/localStorageControl';
import { getListQueue } from '../../../redux/manage-queue/list-queue/actionCreator';

function FilterAdvance({ showOrHideModalFilter, hideModal, formDataFilterAdvance }) {
  const { RangePicker } = DatePicker;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { configFilterAdvance, listUser, listQueue } = useSelector((states) => {
    return {
      configFilterAdvance: states.configFilterAdvance.config,
      listUser: states.dataListUser.data,
      listQueue: states.dataListQueue.data,
    };
  });

  if (getItem(LOCAL_STORAGE_VARIABLE.CUSTOMIZE_TABLE)) {
    getItem(LOCAL_STORAGE_VARIABLE.CUSTOMIZE_TABLE).forEach((item) => {
      const field = configFilterAdvance.find((f) => f.key === item.key);
      if (field) field.isShow = item.isChecked;
    });
  }

  const visibleFields = configFilterAdvance.filter((field) => field.isShow === true);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListQueue());
  }, []);

  const addOptionToSelect = (data, keyCompare, label, value, optionDefault) => {
    const changeKeyValue = data.map((el) => {
      return {
        label: el[label],
        value: el[value],
      };
    });
    configFilterAdvance.map((cf) => {
      if (cf.key === keyCompare) {
        if (optionDefault) {
          cf.option = [optionDefault, ...changeKeyValue];
        } else {
          cf.option = [...changeKeyValue];
        }
      }
      return cf;
    });
  };

  if (listUser && listUser.length) {
    addOptionToSelect(listUser, 'assignedTo', 'userName', 'userId', { label: 'System', value: 'system' });
  }
  if (listQueue && listQueue.length) {
    addOptionToSelect(listQueue, 'queueName', 'queueName', 'queueId');
  }

  const formRef = useRef(null);

  const handleFilterAdvance = () => {
    const formData = formRef.current.getFieldsValue();
    const { createOn } = formData;
    if (createOn) {
      const formattedDateRange = createOn.map((date) => moment(date).format('DD/MM/YYYY HH:mm'));
      formData.createOn = formattedDateRange;
    }
    setItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE, formData);
    formDataFilterAdvance(getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE) || formData);
    hideModal();
  };

  const formFields = getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE)
    ? Object.keys(getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE)).map((key) => ({
        name: key,
        value: getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE)[key],
      }))
    : undefined;

  const handleFromFields = (key) => {
    const field = formFields.find((f) => f.name === key);
    if (field && key === 'createOn') {
      return field.value.map((date) => moment(date, 'DD/MM/yyyy HH:mm'));
    }
    if (field && key !== 'createOn') {
      return field.value;
    }

    return undefined;
  };
  const handleResetForm = () => {
    removeItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE);
    openNotificationWithIcon('success', 'Xóa thành công !');
    window.location.reload(true);
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
    const {
      fieldType,
      key,
      option,
      placeholder,
      placeholderCondition,
      conditionOption,
      conditionValue,
      mode,
      conditionKey,
    } = element;
    const renderCurrentSelection = () => {
      switch (fieldType) {
        case FIELD_TYPE.TEXT:
          return (
            <div>
              <Form.Item
                label={<span style={{ fontSize: '13px' }}>{t(`${PREFIX_FILTER_ADVANCE}${key}`)}</span>}
                key={`label${key}`}
              />
              <Row className="mt-[-20px] text-[13px]">
                <Col className="gutter-row" span={14}>
                  <div className="gutter-box">
                    <Form.Item
                      name={key}
                      key={key}
                      initialValue={
                        getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE) ? handleFromFields(key) : undefined
                      }
                    >
                      <Input placeholder={placeholder} className="h-[36px] text-[13px]" />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row" span={1} />
                <Col className="gutter-row" span={9}>
                  <div className="gutter-box">
                    <Form.Item
                      key={conditionKey}
                      name={conditionKey}
                      initialValue={
                        getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE)
                          ? handleFromFields(conditionKey)
                          : conditionValue
                      }
                    >
                      <Select
                        className="text-[13px]"
                        options={conditionOption}
                        placeholder={placeholderCondition}
                        getPopupContainer={(trigger) => trigger.parentNode}
                        style={{ fontSize: '13px' }}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </div>
          );
        case FIELD_TYPE.SELECT:
          return (
            <div>
              <Form.Item
                label={<span style={{ fontSize: '13px' }}>{t(`${PREFIX_FILTER_ADVANCE}${key}`)}</span>}
                key={`label${key}`}
              />
              <Row className="mt-[-20px]">
                <Col className="gutter-row" span={24}>
                  <div className="gutter-box">
                    <Form.Item
                      key={key}
                      name={key}
                      initialValue={
                        getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE) ? handleFromFields(key) : undefined
                      }
                    >
                      <Select
                        className="text-[13px]"
                        options={option}
                        placeholder={placeholder}
                        mode={mode}
                        getPopupContainer={(trigger) => trigger.parentNode}
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
              <Form.Item
                label={<span style={{ fontSize: '13px' }}>{t(`${PREFIX_FILTER_ADVANCE}${key}`)}</span>}
                key={`label${key}`}
                colon={false}
              />
              <Row className="mt-[-20px]">
                <Col className="gutter-row" span={24}>
                  <div className="gutter-box">
                    <Form.Item
                      name={key}
                      key={key}
                      className="text-[13px]"
                      initialValue={
                        getItem(LOCAL_STORAGE_VARIABLE.DATA_FILTER_ADVENCE) ? handleFromFields(key) : undefined
                      }
                    >
                      <RangePicker
                        size="small"
                        format="DD/MM/yyyy HH:mm"
                        ranges={rangePresets}
                        showTime={{ format: 'HH:mm' }}
                        mode={mode}
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
      title={<strong style={{ fontWeight: '1000' }}>Bộ lọc Email</strong>}
      open={showOrHideModalFilter}
      onCancel={hideModal}
      maskClosable={false}
      footer={[
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          key="footerModalFilterAdvance"
        >
          <Button
            type="primary"
            ghost
            key="resetFilter"
            className="px-5 text-[13px] font-semibold button-reset h-10"
            onClick={handleResetForm}
          >
            <span className="flex items-center">
              <DeleteOutlined style={{ marginRight: '8px' }} /> Xóa bộ lọc
            </span>
          </Button>
          <Space size="small">
            <Button
              type="primary"
              danger
              ghost
              key="cancelFilter"
              className="px-5 text-[13px] font-semibold button-filter-cancel h-10"
              onClick={hideModal}
            >
              <span className="flex items-center">
                <CloseOutlined style={{ marginRight: '8px' }} /> Hủy
              </span>
            </Button>
            <Button
              type="primary"
              key="submitFilter"
              className="px-5 text-[13px] font-semibold h-10 button-filter-search"
              onClick={handleFilterAdvance}
            >
              <span className="flex items-center">
                <SearchOutlined style={{ marginRight: '8px' }} /> Tìm kiếm
              </span>
            </Button>
          </Space>
        </div>,
      ]}
      width={800}
    >
      <div className="  dark:bg-white10 m-0 p-0 rounded-10 relative modal-filter">
        <div className="px-1.5">
          <Form name="filterAdvance" ref={formRef} colon={false}>
            <Row gutter={16}>
              {visibleFields.map((el, index) => (
                <Col className="gutter-row" span={12} key={index}>
                  <ElementFilterAdvance element={el} key={el.key} />
                </Col>
              ))}
            </Row>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

FilterAdvance.propTypes = {
  showOrHideModalFilter: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
  formDataFilterAdvance: propTypes.func.isRequired,
};

export default FilterAdvance;
