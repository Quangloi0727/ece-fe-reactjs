import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Modal, Space, Select } from 'antd';
import propTypes from 'prop-types';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../../utility/localStorageControl';
import { handleEditDataUser } from '../../../redux/user/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import { LOCAL_STORAGE_VARIABLE, USER } from '../../../constants';

const { Option } = Select;

function EditUserForm({ showOrHideModalEditForm, hideModal, idEdit }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({
    errorName: null,
    errorMessage: null,
  });
  const { errorName, errorMessage } = state;

  const { dataUser } = useSelector((states) => {
    return {
      dataUser: states.getUser.user,
    };
  });

  const [form] = Form.useForm();
  useEffect(() => {
    if (dataUser) {
      form.setFieldsValue({
        nameEdit: dataUser?.name,
        typeEdit: dataUser?.type,
        roleEdit: dataUser?.role,
        ownerEdit: dataUser?.owner,
        passwordEdit: dataUser?.password,
        dateEdit: moment(dataUser?.dateCreated).format('YYYY-MM-DD HH:mm:ss'),
      });
      setShowPassword(form.getFieldValue('typeEdit') === USER.KEY_TYPE_LOCAL);
    }
  }, [dataUser]);

  const handleSendDataForm = () => {
    const userData = getItem(LOCAL_STORAGE_VARIABLE.USER_DATA);
    const { displayName } = userData;
    const formData = form.getFieldsValue();
    const { nameEdit, roleEdit, typeEdit, passwordEdit } = formData;
    const user = {
      nameEdit,
      roleEdit,
      typeEdit,
      passwordEdit,
      owner: displayName,
      dateCreated: moment().format('YYYY-MM-DD'),
    };
    dispatch(
      handleEditDataUser(
        idEdit,
        user,
        () => {
          hideModal();
          openNotificationWithIcon('success', 'Update thành công !');
          window.location.reload(true);
        },
        (err) => {
          setState({ ...state, errorName: err.code, errorMessage: err.message });
        },
      ),
    );
  };

  return (
    <Modal
      forceRender
      title={<strong style={{ fontWeight: '700' }}>Sửa người truy cập</strong>}
      open={showOrHideModalEditForm}
      onCancel={hideModal}
      maskClosable={false}
      zIndex="1000"
      // mask={false}
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
          <Form layout="vertical" form={form} ref={formRef} colon={false} className="form-add">
            <Form.Item key="nameEdit" name="nameEdit" label="Tên đăng nhập">
              <Input placeholder="Nhập tên đăng nhập" />
            </Form.Item>
            {errorName === 'nameExists' && <span style={{ color: 'red', fontSize: '13px' }}>{errorMessage}</span>}
            <Form.Item key="typeEdit" name="typeEdit" label="Loại tài khoản">
              <Select
                className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[38px] [&>div>div>div>span]:items-center [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60"
                placeholder="Chọn loại tài khoản"
              >
                <Option value={USER.KEY_TYPE_LOCAL}>Local</Option>
                <Option value={USER.KEY_TYPE_SSO}>SSO</Option>
              </Select>
            </Form.Item>

            {showPassword && (
              <Form.Item key="passwordEdit" name="passwordEdit" label="Mật khẩu">
                <Input.Password placeholder="Nhập mật khẩu" />
              </Form.Item>
            )}
            {errorName === 'invalidPassword' && <span style={{ color: 'red', fontSize: '13px' }}>{errorMessage}</span>}

            <Form.Item key="roleEdit" name="roleEdit" label="Quyền">
              <Select
                className="[&>div]:border-normal dark:[&>div]:border-white10 [&>div]:rounded-6 [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white60 [&>div>div>div>span]:bg-transparent [&>div]:h-[38px] [&>div>div>div>span]:items-center [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white60"
                placeholder="Chọn loại tài khoản"
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
EditUserForm.propTypes = {
  showOrHideModalEditForm: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
  idEdit: propTypes.string,
};

export default EditUserForm;
