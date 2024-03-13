import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Space } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment';
import propTypes from 'prop-types';
import { CheckOutlined } from '@ant-design/icons';
import { USER } from '../../../constants';

function DetailUserForm({ showOrHideModalDetailUser, hideModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const { dataUser } = useSelector((states) => {
    return {
      dataUser: states.getUser.user,
    };
  });

  const [form] = Form.useForm();
  useEffect(() => {
    if (dataUser) {
      const { username, password, owner, role, type, updatedAt } = dataUser;
      form.setFieldsValue({
        nameDetail: username,
        typeDetail: type === USER.KEY_TYPE_LOCAL ? USER.LOCAL : USER.SSO,
        roleDetail: role === USER.KEY_ROLE_ADMIN ? USER.ADMIN : role === USER.KEY_ROLE_USER ? USER.USER : USER.ALL,
        ownerDetail: owner,
        passwordDetail: password,
        dateDetail: moment(updatedAt).format('DD/MM/YYYY HH:mm:ss'),
      });
      setShowPassword(form.getFieldValue('typeDetail') === USER.LOCAL);
    }
  }, [dataUser, form]);
  return (
    <Modal
      forceRender
      bodyStyle={{ overflowY: 'auto', maxHeight: '450px' }}
      style={{ fontSize: '13px !important', position: 'relative' }}
      title={<strong style={{ fontWeight: '1000' }}>Chi tiết người truy cập</strong>}
      open={showOrHideModalDetailUser}
      onCancel={hideModal}
      maskClosable={false}
      footer={[
        <div
          style={{
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'end',
          }}
          key="footerModalCustomizeTable"
        >
          <Space size="small">
            <Button
              onClick={hideModal}
              type="primary"
              key="cancelFilter"
              className="px-5 text-[13px] font-semibold button-reset h-10"
            >
              <span className="button-formadd items-center">
                <CheckOutlined style={{ marginRight: '4px' }} /> Đóng
              </span>
            </Button>
          </Space>
        </div>,
      ]}
      width={600}
    >
      <div className="">
        <div className="px-1.5 text-[13px]">
          <Form form={form} layout="vertical">
            <Form.Item key="nameDetail" name="nameDetail" label="Tên đăng nhập">
              <Input />
            </Form.Item>
            <Form.Item key="typeDetail" name="typeDetail" label="Loại tài khoản">
              <Input />
            </Form.Item>
            {showPassword && (
              <Form.Item key="passwordDetail" name="passwordDetail" label="Mật khẩu">
                <Input.Password />
              </Form.Item>
            )}
            <Form.Item key="roleDetail" name="roleDetail" label="Quyền">
              <Input />
            </Form.Item>
            <Form.Item key="ownerDetail" name="ownerDetail" label="Người tạo">
              <Input />
            </Form.Item>
            <Form.Item key="dateDetail" name="dateDetail" label="Ngày tạo">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}
DetailUserForm.propTypes = {
  showOrHideModalDetailUser: propTypes.bool.isRequired,
  hideModal: propTypes.func.isRequired,
};

export default DetailUserForm;
