import { Col, DatePicker, Form, Input, Modal, Row, Select, Space } from 'antd';
import { CloseOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '../buttons/buttons';

function FilterTable({ filterVisible, onOk, onCancel }) {
  const [formFilter] = Form.useForm();
  const [state, setState] = useState({
    filterVisible,
    modalType: 'primary',
  });
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        ...state,
        filterVisible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [filterVisible]);
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];
  const handleReset = () => {
    formFilter.resetFields();
  };
  return (
    <Modal
      type={state.modalType}
      title="Bộ lọc Email"
      open={state.filterVisible}
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
            <DeleteOutlined /> Xóa bộ lọc
          </Button>
          <Space size="small">
            <Button
              htmlType="submit"
              size="default"
              type="primary"
              key="submit"
              className="px-5 text-sm font-semibold button-filter-cancel"
              onClick={onCancel}
            >
              <CloseOutlined /> Hủy
            </Button>
            <Button
              htmlType="submit"
              size="default"
              type="primary"
              key="submit"
              className="px-5 text-sm font-semibold h-11 button-filter-search"
              onClick={onOk}
            >
              <SearchOutlined /> Tìm kiếm
            </Button>
          </Space>
        </div>,
      ]}
      onCancel={onCancel}
      width={800}
    >
      <div className="px-1.5">
        <Form form={formFilter} name="contact">
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  label="Case ID"
                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    label="Activity ID"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={7}>
                <div className="gutter-box">
                  <Form.Item
                    name="caseid"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Input placeholder="Nhập case id" />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Form.Item
                    name="checkCaseid"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select options={options} placeholder="Trùng khớp" />
                  </Form.Item>
                </div>
              </Col>

              <Col className="gutter-row" span={7}>
                <div className="gutter-box">
                  <Form.Item
                    name="activityID"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Input placeholder="Nhập activity id" />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Form.Item
                    name="checkActivtiID"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select options={options} placeholder="Trùng khớp" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  label="Subject"
                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    label="From"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={7}>
                <div className="gutter-box">
                  <Form.Item
                    name="subject"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Input placeholder="Nhập subject" />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Form.Item
                    name="checkSubject"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select options={options} placeholder="Trùng khớp" />
                  </Form.Item>
                </div>
              </Col>

              <Col className="gutter-row" span={7}>
                <div className="gutter-box">
                  <Form.Item
                    name="from"
                    rules={[{ message: 'Please input your email!', type: 'email' }]}
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Input placeholder="Nhập email" />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Form.Item
                    name="checkFrom"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select options={options} placeholder="Trùng khớp" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  label="To"
                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    label="Assigned To"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={7}>
                <div className="gutter-box">
                  <Form.Item
                    name="to"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Input placeholder="Nhập email" />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div className="gutter-box">
                  <Form.Item
                    name="checkTo"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select options={options} placeholder="Trùng khớp" />
                  </Form.Item>
                </div>
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="assignedto"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      placeholder="Chọn assigned to"
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  label="Create On"
                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    label="Queue name"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="createOn"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <DatePicker
                      size="small"
                      style={{
                        width: '100%',
                      }}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="queueName"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      placeholder="Chọn queue name"
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  label="Substatus"
                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    label="Priority"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="substatus"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      placeholder="Chọn status"
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="priority"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      placeholder="Chọn priority"
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  label="File đính kèm"
                  className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    label="Hướng email"
                    className="mb-[26px] [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="grid-style-gutter">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="file"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      placeholder="Chọn có/không"
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Form.Item
                    name="huongemail"
                    className="mb-[0px] !important [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div]:text-start dark:[&>.ant-form-item-row>div>label]:text-white87 [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md"
                  >
                    <Select
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      placeholder="Chọn hướng email"
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
FilterTable.propTypes = {
  filterVisible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  onOk: propTypes.func.isRequired,
};
export default FilterTable;
