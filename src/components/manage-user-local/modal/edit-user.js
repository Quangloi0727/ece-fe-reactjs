import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Modal, Space, Select } from 'antd';
import propTypes from 'prop-types';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { handleEditDataUser } from '../../../redux/manage-user-local/user/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import {
  USER,
  PREFIX_FORM_MANAGE_USER,
  TITLE_FORM_MANAGE_USER,
  LABEL_FORM_MANAGE_USER,
  PLACEHOLDER_FORM_MANAGE_USER,
} from '../../../constants';

const { Option } = Select;

function EditUserForm({ showOrHideModalEditForm, hideModal, idEdit }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTypeChange = (value) => {
    if (value === USER.KEY_TYPE_LOCAL) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const { dataUser } = useSelector((states) => {
    return {
      dataUser: states.getUser.user,
    };
  });

  const [form] = Form.useForm();

  const handleHideModel = () => {
    const { username, type, role, password } = dataUser;
    form.setFieldsValue({
      username,
      type,
      role:
        role === USER.KEY_ROLE_ADMIN
          ? [USER.KEY_ROLE_ADMIN]
          : role === USER.KEY_ROLE_USER
          ? [USER.KEY_ROLE_USER]
          : [USER.KEY_ROLE_ADMIN, USER.KEY_ROLE_USER],
      password,
    });
    hideModal();
    setPasswordVisible(false);
  };
  useEffect(() => {
    if (dataUser) {
      const { username, type, role, password } = dataUser;
      form.setFieldsValue({
        username,
        type,
        role:
          role === USER.KEY_ROLE_ADMIN
            ? [USER.KEY_ROLE_ADMIN]
            : role === USER.KEY_ROLE_USER
            ? [USER.KEY_ROLE_USER]
            : [USER.KEY_ROLE_ADMIN, USER.KEY_ROLE_USER],
        password,
      });
      setShowPassword(form.getFieldValue('type') === USER.KEY_TYPE_LOCAL);
    }
  }, [dataUser, form]);

  const handleSendDataForm = () => {
    const formData = form.getFieldsValue();
    if (formData.role.includes(USER.KEY_ROLE_USER) && formData.role.includes(USER.KEY_ROLE_ADMIN)) {
      formData.role = USER.KEY_ROLE_ALL;
    } else {
      const role = formData.role[0];
      formData.role = role;
    }
    dispatch(
      handleEditDataUser(
        idEdit,
        formData,
        () => {
          hideModal();
          openNotificationWithIcon('success', 'Update thành công !');
          setTimeout(() => {
            window.location.reload(true);
          }, 1000);
        },
        (err) => {
          openNotificationWithIcon('error', 'Lưu thất bại !', err.message);
        },
      ),
    );
  };

  return (
    <Modal
      forceRender
      title={
        <strong style={{ fontWeight: '700' }}>
          {t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.ADDNEWUSER}`)}
        </strong>
      }
      open={showOrHideModalEditForm}
      onCancel={hideModal}
      maskClosable={false}
      footer={false}
    >
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray :text-white60 text-[13px] rounded-10 relative h-full">
        <div className="text-[13px]">
          <Form layout="vertical" form={form} ref={formRef} colon={false} className="form-add">
            <Form.Item
              key="username"
              name="username"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.USERNAME}`)}
              rules={[
                {
                  required: true,
                  message: 'Đây là trường bắt buộc',
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
                  message: 'Đây là trường bắt buộc',
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

            {showPassword && (
              <Form.Item
                key="password"
                name="password"
                label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.PASSWORD}`)}
                rules={[
                  {
                    required: true,
                    message: 'Đây là trường bắt buộc',
                  },
                ]}
              >
                <Input.Password
                  placeholder={t(`${PREFIX_FORM_MANAGE_USER}${PLACEHOLDER_FORM_MANAGE_USER.PASSWORD}`)}
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>
            )}

            <Form.Item
              key="role"
              name="role"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.ROLE}`)}
              rules={[
                {
                  required: true,
                  message: 'Đây là trường bắt buộc',
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
                  <Button type="primary" danger ghost onClick={handleHideModel}>
                    <span className="button-formadd items-center">
                      <CloseOutlined style={{ marginRight: '4px' }} /> Hủy
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
                      disabled={!!form.getFieldsError().filter(({ errors }) => errors.length).length}
                    >
                      <span className="button-formadd items-center">
                        <SearchOutlined style={{ marginRight: '4px' }} />
                        Lưu
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
EditUserForm.propTypes = {
  showOrHideModalEditForm: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
  idEdit: propTypes.string,
};

export default EditUserForm;
