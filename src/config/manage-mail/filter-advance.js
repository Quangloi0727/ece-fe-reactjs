import { FIELD_TYPE, CONDITION_VALUE } from '../../constants';

const configFilterAdvance = [
  {
    key: 'caseId',
    placeholder: 'Nhập case id',
    isShow: true,
    fieldType: FIELD_TYPE.TEXT,
    conditionValue: CONDITION_VALUE.MATCH,
    conditionKey: 'caseIdCondition',
    conditionOption: [
      {
        value: CONDITION_VALUE.MATCH,
        label: 'Trùng khớp',
      },
      {
        value: CONDITION_VALUE.INCLUDE,
        label: 'Bao gồm',
      },
    ],
  },
  {
    key: 'activityId',
    isShow: true,
    placeholder: 'Nhập activity id',
    fieldType: FIELD_TYPE.TEXT,
    conditionValue: CONDITION_VALUE.MATCH,
    conditionKey: 'activityIdCondition',
    conditionOption: [
      {
        value: CONDITION_VALUE.MATCH,
        label: 'Trùng khớp',
      },
      {
        value: CONDITION_VALUE.INCLUDE,
        label: 'Bao gồm',
      },
    ],
  },
  {
    key: 'subject',
    isShow: true,
    placeholder: 'Nhập subject',
    fieldType: FIELD_TYPE.TEXT,
    conditionValue: CONDITION_VALUE.MATCH,
    conditionKey: 'subjectCondition',
    conditionOption: [
      {
        value: CONDITION_VALUE.MATCH,
        label: 'Trùng khớp',
      },
      {
        value: CONDITION_VALUE.INCLUDE,
        label: 'Bao gồm',
      },
    ],
  },
  {
    key: 'from',
    isShow: true,
    placeholder: 'Nhập email',
    fieldType: FIELD_TYPE.TEXT,
    conditionKey: 'fromCondition',
    conditionValue: CONDITION_VALUE.MATCH,
    conditionOption: [
      {
        value: CONDITION_VALUE.MATCH,
        label: 'Trùng khớp',
      },
      {
        value: CONDITION_VALUE.INCLUDE,
        label: 'Bao gồm',
      },
    ],
  },
  {
    key: 'to',
    isShow: true,
    placeholder: 'Nhập email',
    fieldType: FIELD_TYPE.TEXT,
    conditionValue: CONDITION_VALUE.MATCH,
    conditionKey: 'toCondition',
    conditionOption: [
      {
        value: CONDITION_VALUE.MATCH,
        label: 'Trùng khớp',
      },
      {
        value: CONDITION_VALUE.INCLUDE,
        label: 'Bao gồm',
      },
    ],
  },
  {
    key: 'assignedTo',
    isShow: true,
    fieldType: FIELD_TYPE.SELECT,
    mode: 'multiple',
    placeholder: 'Chọn assigned to',
    option: [
      {
        label: 'System',
        value: 'system',
      },
    ],
  },
  {
    key: 'createdOn',
    isShow: true,
    fieldType: FIELD_TYPE.DATE,
  },
  {
    key: 'subStatus',
    isShow: true,
    fieldType: FIELD_TYPE.SELECT,
    placeholder: 'Chọn SubStatus',
    option: [
      {
        label: 'Completed - Done',
        value: 'done',
      },
      {
        label: 'Assigned - InProcess',
        value: 'process',
      },
    ],
  },
  {
    key: 'queueName',
    isShow: true,
    fieldType: 'SELECT',
    mode: 'multiple',
    placeholder: 'Chọn Queue Name',
    option: [],
  },
  {
    key: 'priority',
    isShow: true,
    fieldType: 'SELECT',
    placeholder: 'Chọn priority',
    mode: 'multiple',
    option: [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
      {
        label: '4',
        value: '4',
      },
      {
        label: '5',
        value: '5',
      },
      {
        label: '6',
        value: '6',
      },
      {
        label: '7',
        value: '7',
      },
    ],
  },
  {
    key: 'file',
    isShow: true,
    fieldType: 'SELECT',
    placeholder: 'Chọn có / không',
    option: [
      {
        value: true,
        label: 'Có',
      },
      {
        value: 'false',
        label: 'Không',
      },
    ],
  },
  {
    key: 'direction',
    isShow: true,
    fieldType: 'SELECT',
    placeholder: 'Chọn hướng email',
    option: [
      {
        label: 'Mail nhận',
        value: 'received',
      },
      {
        label: 'Mail gửi',
        value: 'send',
      },
    ],
  },
];

export default configFilterAdvance;
