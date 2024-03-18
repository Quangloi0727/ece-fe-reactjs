export const FIELD_TYPE = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  DATE: 'DATE',
};
export const CONDITION_VALUE = {
  MATCH: 'match',
  INCLUDE: 'include',
};
export const PREFIX_FILTER_ADVANCE = 'filterAdvance.';
export const PREFIX_CUSTOMIZE_TABLE = 'configTable.';
export const MESSAGE_GET_TOKEN_FAIL = 'Get new token fail !';
export const MESSAGE_PERMISSION_DENIED = 'Permission denied !';
export const LOCAL_STORAGE_VARIABLE = {
  USER_DATA: 'userData',
  LANGUAGE: 'lang',
  CUSTOMIZE_TABLE: 'customizeTable',
  FILTER_ADVANCE: 'filterAdvance',
  SEARCH_ON_SYSTEM: 'searchOnSystem',
  DATA_FILTER_ADVENCE: 'dataFilterAdvance',
  CREATED_ON_KEY: 'createdOn',
};
export const USER = {
  KEY_TYPE_LOCAL: 2,
  KEY_TYPE_SSO: 1,
  KEY_ROLE_ADMIN: 2,
  KEY_ROLE_USER: 1,
  KEY_ROLE_ALL: 3,
  LOCAL: 'Local',
  SSO: 'SSO',
  ADMIN: 'Admin',
  USER: 'User',
  ALL: 'Admin,User',
};

export const STATUS_CODE_SUCCESS = [200, 201];
export const ACTIVITY_DETAIL_TAB = {
  GENERAL_INFO: 'generalInfo',
  NOTE: 'note',
  ACTIVITY_HISTORY: 'activityHistory',
};
export const CASE_DETAIL_TAB = {
  GENERAL_INFO: 'generalInfo',
  CONTENT_ACTIVITY: 'contentActivity',
  NOTE: 'note',
};
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;
export const ACTIVITY_SUB_STATUS = {
  DONE: [9000, 9100],
};
export const ACTIVITY_MODE = {
  INBOUND: 100,
  OUTBOUND: 200,
};

export const CONDITION_LIST_EMAIL_TO = 1;
export const PREFIX_FORM_MANAGE_USER = 'formManagerUser.';
export const ERROR_FORM_MANAGE_USER = 'errorFormManagerUser.';

export const CASE_STATUS = [
  { key: 0, message: 'Open' },
  { key: 1, message: 'Closed' },
  { key: 2, message: 'ReadyToBeClosed' },
];
export const CASE_SEVERITY = [
  { key: 1, message: 'Urgent' },
  { key: 2, message: 'High' },
  { key: 3, message: 'Medium' },
  { key: 4, message: 'Low' },
];

export const NOTE_IMPORT_EXCEL =
  'Hệ thống bỏ qua nhưng bản ghi trùng tên đăng nhập \nHệ thống bỏ qua những bản ghi thiếu tên đăng nhập/Loại tài khoản/Quyền \nHệ thống bỏ qua bản ghi sai quyền(Chỉ nhận giá trị User hoặc Admin hoặc All) \nHệ thống bỏ qua những bản ghi tài khoản loại Local thiếu/sai định dạng mật khẩu(điền validate của mật khẩu)';
export const ACTIVITY_HISTORY = [
  {
    key: 1,
    name: 'NEW_IMCOMING_NEW_EVENT',
    message: 'New imcoming mail',
  },
  {
    key: 205,
    name: 'PUSH_TO_AGENT_EVENT',
    message: 'Assigned to {firstName} {lastName}',
  },
  {
    key: 101,
    name: 'AUTO_ACKNOWLEDGED_EVENT',
    message: 'Auto acknowledged ',
  },
  {
    key: 544,
    name: 'CLOSE_ACTIVITY_EVENT',
    message: 'Close activity event',
  },
  {
    key: 102,
    name: 'REPLY_ACTIVITY_EVENT',
    message: 'Reply activity event',
  },
  {
    key: 105,
    name: 'REPLY_TO_SAVE_DRAFT_EVENT',
    message: 'Reply to save draft event',
  },
  {
    key: 509,
    name: 'REPLY_SAVE_DRAFT_EVENT',
    message: 'Reply save draft event',
  },
  {
    key: 540,
    name: 'READ_START_ACTIVITY_EVENT',
    message: 'Read start activity event',
  },
  {
    key: 549,
    name: 'READ_INPROGRESS_ACTIVITY_EVENT',
    message: 'Read in progress',
  },
  {
    key: 210,
    name: 'PUSH_NEW_CASE_ACTIVITY_TO_QUEUE_EVENT',
    message: 'Assigned to queue {queue}',
  },
  {
    key: 601,
    name: 'NEW_CASE_CREATE_EVENT',
    message: 'New case created',
  },
  {
    key: 602,
    name: 'NEW_ACTIVITY_TO_NEW_CASE_ASSGIN_EVENT',
    message: 'Activity assigned to new case {caseId} by {firstName} {lastName}',
  },
  {
    key: 2210,
    name: 'ACTIVITY_SEND_TO_UnifiedCCE_FOR_ROUTING',
    message: 'Sent to Unified CCE for routing',
  },
  {
    key: 2212,
    name: 'ROUTING_RESPONSE_RETURNED_FROM_UnifiedCCE',
    message: 'Unified CCE identified {userName} for assignment',
  },
];

export const SEARCH_ON_SYSTEM = {
  OLD: 'old',
  NEW: 'new',
};

export const LABEL_FORM_MANAGE_USER = {
  USERNAME: 'username',
  PASSWORD: 'password',
  ROLE: 'role',
  TYPEACCOUNT: 'typeAccount',
  DATECREATED: 'date',
  CREATOR: 'creator',
};
export const TITLE_FORM_MANAGE_USER = {
  MANAGEUSER: 'manageUser',
  ADDNEWUSER: 'addNewUser',
  EDITUSER: 'editUser',
  DELETEUSER: 'deleteUser',
  DELETEMANYUSER: 'deleteManyUser',
  DETAILUSER: 'detailUser',
};

export const PLACEHOLDER_FORM_MANAGE_USER = {
  USERNAME: 'placeholderUsername',
  PASSWORD: 'placeholderPassword',
  ROLE: 'placeholderRole',
  TYPEACCOUNT: 'placeholderTypeAccount',
};
export const NAME_FORM_MANAGE_USER = {
  TYPE: 'type',
  PASSWORD: 'password',
};
export const TOOLTIP_FORM_MANAGE_USER = {
  DETAIL: 'tooltipDetail',
  DELETE: 'tooltipDelete',
  EDIT: 'tooltipEdit',
};
export const TOTALDATA = 'sum';
export const SEARCH_MANAGE_USER = 'search';
