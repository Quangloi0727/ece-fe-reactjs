import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Modal, Space, Select } from 'antd';
import propTypes from 'prop-types';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { handleSendDataUser } from '../../../redux/manage-user-local/user/actionCreator';
import { getListUser } from '../../../redux/manage-user-local/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import {
  USER,
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  PREFIX_FORM_MANAGE_USER,
  LABEL_FORM_MANAGE_USER,
  TITLE_FORM_MANAGE_USER,
  PLACEHOLDER_FORM_MANAGE_USER,
  NAME_FORM_MANAGE_USER,
  BUTTON_MODAL_MANAGE_USER,
  MESSAGE_RULE_INPUT,
  ERROR_LOGIN,
  MESSAGE_NOTIFICATION,
} from '../../../constants';

const { Option } = Select;

function AddUserForm({ showOrHideModal, hideModal }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [selectedType, setSelectedType] = useState(null);
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };
  useEffect(() => {
    setClientReady(true);
  }, []);
  const handleHideModal = () => {
    hideModal();
    form.resetFields();
    setSelectedType(form.getFieldValue(NAME_FORM_MANAGE_USER.TYPE));
  };

  useEffect(() => {
    if (form.getFieldValue(NAME_FORM_MANAGE_USER.TYPE) === USER.KEY_TYPE_SSO) {
      form.setFieldValue(NAME_FORM_MANAGE_USER.PASSWORD, null);
    }
  }, [selectedType, form]);

  const handleSendDataForm = () => {
    const formData = formRef.current.getFieldsValue();
    formData.role = formData.role.length === 2 ? USER.KEY_ROLE_ALL : formData.role[0];
    dispatch(
      handleSendDataUser(
        formData,
        () => {
          hideModal();
          openNotificationWithIcon('success', t(`${MESSAGE_NOTIFICATION.ADD_SUCCESS}`));
          form.resetFields();
          dispatch(getListUser(DEFAULT_PAGE, DEFAULT_PAGE_SIZE, ''));
        },
        (err) => {
          openNotificationWithIcon('error', t(`${MESSAGE_NOTIFICATION.ADD_FAIL}`), t(`${ERROR_LOGIN}${err.message}`));
        },
      ),
    );
  };
  return (
    <Modal
      title={
        <strong style={{ fontWeight: '700' }}>
          {t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.ADDNEWUSER}`)}
        </strong>
      }
      forceRender
      open={showOrHideModal}
      onCancel={hideModal}
      maskClosable={false}
      zIndex="1000"
      footer={false}
    >
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray :text-white60 text-[13px] rounded-10 relative h-full">
        <div className="text-[13px]">
          <Form layout="vertical" form={form} ref={formRef} className="form-add" requiredMark={false}>
            <Form.Item
              key="username"
              name="username"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.USERNAME}`)}
              colon={false}
              rules={[
                {
                  required: true,
                  message: t(`${PREFIX_FORM_MANAGE_USER}${MESSAGE_RULE_INPUT}`),
                },
              ]}
            >
              <Input
                placeholder={t(`${PREFIX_FORM_MANAGE_USER}${PLACEHOLDER_FORM_MANAGE_USER.USERNAME}`)}
                maxLength={50}
              />
            </Form.Item>

            <Form.Item
              key="type"
              name="type"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.TYPEACCOUNT}`)}
              rules={[
                {
                  required: true,
                  message: t(`${PREFIX_FORM_MANAGE_USER}${MESSAGE_RULE_INPUT}`),
                },
              ]}
            >
              <Select
                className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[38px] [&>div>div>div>span]:items-center [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60"
                placeholder={t(`${PREFIX_FORM_MANAGE_USER}${PLACEHOLDER_FORM_MANAGE_USER.TYPEACCOUNT}`)}
                onChange={handleTypeChange}
              >
                <Option value={USER.KEY_TYPE_LOCAL}>Local</Option>
                <Option value={USER.KEY_TYPE_SSO}>SSO</Option>
              </Select>
            </Form.Item>

            {selectedType === USER.KEY_TYPE_LOCAL && (
              <Form.Item
                key="password"
                name="password"
                label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.PASSWORD}`)}
                rules={[
                  {
                    required: true,
                    message: t(`${PREFIX_FORM_MANAGE_USER}${MESSAGE_RULE_INPUT}`),
                  },
                ]}
              >
                <Input.Password placeholder={t(`${PREFIX_FORM_MANAGE_USER}${PLACEHOLDER_FORM_MANAGE_USER.PASSWORD}`)} />
              </Form.Item>
            )}

            <Form.Item
              key="role"
              name="role"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.ROLE}`)}
              rules={[
                {
                  required: true,
                  message: t(`${PREFIX_FORM_MANAGE_USER}${MESSAGE_RULE_INPUT}`),
                },
              ]}
            >
              <Select
                className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[38px] [&>div>div>div>span]:items-center [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60"
                placeholder={t(`${PREFIX_FORM_MANAGE_USER}${PLACEHOLDER_FORM_MANAGE_USER.ROLE}`)}
                mode="multiple"
              >
                <Option value={USER.KEY_ROLE_ADMIN}>Admin</Option>
                <Option value={USER.KEY_ROLE_USER}>User</Option>
              </Select>
            </Form.Item>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
              }}
              key="footerModalAddVistor"
            >
              <Space size="small">
                <Form.Item>
                  <Button type="primary" danger ghost onClick={handleHideModal}>
                    <span className="button-formadd items-center">
                      <CloseOutlined style={{ marginRight: '4px' }} />
                      {t(`${PREFIX_FORM_MANAGE_USER}${BUTTON_MODAL_MANAGE_USER.CANCEL}`)}
                    </span>
                  </Button>
                </Form.Item>
                <Form.Item shouldUpdate>
                  {() => (
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={() => {
                        handleSendDataForm();
                      }}
                      disabled={
                        !clientReady ||
                        !form.isFieldsTouched(true) ||
                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                      }
                    >
                      <span className="button-formadd items-center">
                        <SearchOutlined style={{ marginRight: '4px' }} />
                        {t(`${PREFIX_FORM_MANAGE_USER}${BUTTON_MODAL_MANAGE_USER.SAVE}`)}
                      </span>
                    </Button>
                  )}
                </Form.Item>
              </Space>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}
AddUserForm.propTypes = {
  showOrHideModal: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
};

export default AddUserForm;
