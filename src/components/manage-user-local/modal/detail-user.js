import React, { useEffect } from 'react';
import { Form, Input, Button, Modal, Space } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment';
import propTypes from 'prop-types';
import { CheckOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import {
  USER,
  PREFIX_FORM_MANAGE_USER,
  LABEL_FORM_MANAGE_USER,
  TITLE_FORM_MANAGE_USER,
  BUTTON_MODAL_MANAGE_USER,
} from '../../../constants';

function DetailUserForm({ showOrHideModalDetailUser, hideModal }) {
  const { t } = useTranslation();
  const { dataUser } = useSelector((states) => {
    return {
      dataUser: states.getUser.user,
    };
  });

  const [form] = Form.useForm();
  useEffect(() => {
    if (dataUser) {
      const { username, role, type, createdAt, createdByInfo } = dataUser;
      form.setFieldsValue({
        username,
        type: type === USER.KEY_TYPE_LOCAL ? USER.LOCAL : USER.SSO,
        role: role === USER.KEY_ROLE_ADMIN ? USER.ADMIN : role === USER.KEY_ROLE_USER ? USER.USER : USER.ALL,
        creator: createdByInfo?.username,
        date: moment(createdAt).format('DD/MM/YYYY HH:mm:ss'),
      });
    }
  }, [dataUser, form]);
  return (
    <Modal
      forceRender
      bodyStyle={{ overflowY: 'auto', maxHeight: '450px' }}
      style={{ fontSize: '13px !important', position: 'relative' }}
      title={
        <strong style={{ fontWeight: '700' }}>
          {t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.DETAILUSER}`)}
        </strong>
      }
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
                <CheckOutlined style={{ marginRight: '4px' }} />
                {t(`${PREFIX_FORM_MANAGE_USER}${BUTTON_MODAL_MANAGE_USER.CLOSE}`)}
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
            <Form.Item
              key="username"
              name="username"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.USERNAME}`)}
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item
              key="type"
              name="type"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.TYPEACCOUNT}`)}
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item key="role" name="role" label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.ROLE}`)}>
              <Input readOnly />
            </Form.Item>
            <Form.Item
              key="creator"
              name="creator"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.CREATOR}`)}
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item
              key="date"
              name="date"
              label={t(`${PREFIX_FORM_MANAGE_USER}${LABEL_FORM_MANAGE_USER.DATECREATED}`)}
            >
              <Input readOnly />
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
