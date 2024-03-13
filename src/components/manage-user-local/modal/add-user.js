import React, { useState, useRef } from 'react';
import { Form, Input, Button, Modal, Space, Select } from 'antd';
import propTypes from 'prop-types';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { handleSendDataUser } from '../../../redux/manage-user-local/user/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import { USER } from '../../../constants';

const { Option } = Select;

function AddUserForm({ showOrHideModal, hideModal }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };
  const handleSendDataForm = () => {
    const formData = formRef.current.getFieldsValue();
    if (formData.role.includes(USER.KEY_ROLE_USER) && formData.role.includes(USER.KEY_ROLE_ADMIN)) {
      formData.role = USER.KEY_ROLE_ALL;
    }
    dispatch(
      handleSendDataUser(
        formData,
        () => {
          hideModal();
          openNotificationWithIcon('success', 'Thêm thành công !');
          window.location.reload(true);
        },
        (err) => {
          openNotificationWithIcon('error', 'Thêm thất bại !', err.message);
        },
      ),
    );
  };
  return (
    <Modal
      title={<strong style={{ fontWeight: '700' }}>Thêm mới người truy cập</strong>}
      open={showOrHideModal}
      onCancel={hideModal}
      maskClosable={false}
      zIndex="1000"
      footer={[
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
          }}
          key="footerModalAddVistor"
        >
          <Space size="small">
            <Button
              type="primary"
              danger
              ghost
              key="cancelAddVistor"
              className="px-5 text-[13px] font-semibold button-filter-cancel h-10"
              onClick={hideModal}
            >
              <span className="button-formadd items-center">
                <CloseOutlined style={{ marginRight: '4px' }} /> Hủy
              </span>
            </Button>
            <Button
              type="primary"
              key="submitAddVistor"
              className="px-5 text-[13px] font-semibold h-10 button-filter-search"
              onClick={() => {
                handleSendDataForm();
              }}
            >
              <span className="button-formadd items-center">
                <SearchOutlined style={{ marginRight: '4px' }} />
                Lưu
              </span>
            </Button>
          </Space>
        </div>,
      ]}
    >
      <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray :text-white60 text-[13px] rounded-10 relative h-full">
        <div className="text-[13px]">
          <Form layout="vertical" ref={formRef} colon={false} className="form-add">
            <Form.Item key="username" name="username" label="Tên đăng nhập">
              <Input placeholder="Nhập tên đăng nhập" />
            </Form.Item>

            <Form.Item
              key="type"
              name="type"
              label="Loại tài khoản"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[38px] [&>div>div>div>span]:items-center [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60"
                placeholder="Chọn loại tài khoản"
                onChange={handleTypeChange}
              >
                <Option value={USER.KEY_TYPE_LOCAL}>Local</Option>
                <Option value={USER.KEY_TYPE_SSO}>SSO</Option>
              </Select>
            </Form.Item>

            {selectedType === USER.KEY_TYPE_LOCAL && (
              <Form.Item key="password" name="password" label="Mật khẩu">
                <Input.Password placeholder="Nhập mật khẩu" />
              </Form.Item>
            )}

            <Form.Item
              key="role"
              name="role"
              label="Quyền"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[38px] [&>div>div>div>span]:items-center [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60"
                placeholder="Chọn loại tài khoản"
                mode="multiple"
              >
                <Option value={USER.KEY_ROLE_ADMIN}>Admin</Option>
                <Option value={USER.KEY_ROLE_USER}>User</Option>
              </Select>
            </Form.Item>
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
