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
export const LOCAL_STORAGE_VARIABLE = {
  USER_DATA: 'userData',
  LANGUAGE: 'lang',
  CUSTOMIZE_TABLE: 'customizeTable',
  FILTER_ADVANCE: 'filterAdvance',
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

export const ACTIVITY_HISTORY = [
  {
    key: 1,
    name: 'NEW_IMCOMING_NEW_EVENT',
    message: 'New imcoming new event',
  },
  //   {
  //     key: 2,
  //     name: SOFT_UNDELIVERABLE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 3,
  //     name: HARD_UNDELIVERABLE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 201,
  //     name: KEY_WORD_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 202,
  //     name: ROUND_ROBIN_ASSIGN_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 203,
  //     name: LOAD_BALANCING_ASSIGN_EVENT,
  //     message: '',
  //   },
  {
    key: 205,
    name: 'PUSH_TO_AGENT_EVENT',
    message: 'Push to agent event',
  },
  //   {
  //     key: 214,
  //     name: SUPERVISION_ASSIGN_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 114,
  //     name: AUTO_REPLIED_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 30,
  //     name: NEW_AUTO_REPLY_EVENT,
  //     message: '',
  //   },
  {
    key: 101,
    name: 'AUTO_ACKNOWLEDGED_EVENT',
    message: 'Auto acknowledged event',
  },
  //   {
  //     key: 29,
  //     name: NEW_AUTO_ACKNOWLEDGED_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 305,
  //     name: MODE_BY_RULES,
  //     message: '',
  //   },
  //   {
  //     key: 310,
  //     name: TRANSFER_ACTIVITY_TO_QUEUE_BY_RULES_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 311,
  //     name: UNASSIGN_ACTIVITY_FROM_USER_BY_RULES_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 312,
  //     name: TRANSFER_ACTIVITY_TO_USER_BY_RULES_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 313,
  //     name: TRANSFER_TO_QUEUE_VIA_TRANSFER_WORKFLOW,
  //     message: '',
  //   },
  //   {
  //     key: 314,
  //     name: TRANSFER_TO_USER_VIA_TRANSFER_WORKFLOW,
  //     message: '',
  //   },
  //   {
  //     key: 320,
  //     name: TRANSFER_TO_QUEUE_BY_SYSTEM,
  //     message: '',
  //   },
  //   {
  //     key: 381,
  //     name: TRANSFER_TO_DEPT_BY_RULES,
  //     message: '',
  //   },
  //   {
  //     key: 519,
  //     name: SENT_OUT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 520,
  //     name: E1_UNDISPATCHABLE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 521,
  //     name: E1_UNDISPATCHABLE_EVENT,
  //     message: '',
  //   },
  {
    key: 544,
    name: 'CLOSE_ACTIVITY_EVENT',
    message: 'Close activity event',
  },
  //   {
  //     key: 41,
  //     name: CREATE_WEB_ACTIVITY_FOR_WEB_TEMPLATES,
  //     message: '',
  //   },
  //   {
  //     key: 621,
  //     name: CREATE_CASE_FOR_WEB_TEMPLATES,
  //     message: '',
  //   },
  //   {
  //     key: 622,
  //     name: CASE_ACTIVITY_ASSOC_FOR_WEB_TEMPLATES,
  //     message: '',
  //   },
  //   {
  //     key: 311,
  //     name: UNASSIGN_ACTIVITY_FROM_USER_BY_RULES_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 561,
  //     name: CHANGE_STATUS_FOR_WEB_ACTIVITY,
  //     message: '',
  //   },
  //   {
  //     key: 13,
  //     name: CREATE_ACTIVITY_NEW_CASE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 14,
  //     name: CREATE_ACTIVITY_CURRENT_CASE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 7,
  //     name: CREATE_ACTIVITY_FOR_REPLY_EVENT,
  //     message: '',
  //   },
  {
    key: 102,
    name: 'REPLY_ACTIVITY_EVENT',
    message: 'Reply activity event',
  },
  //   {
  //     key: 112,
  //     name: REPLY_ALL_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 22,
  //     name: CREATE_ACTIVITY_FOR_REPLY_ALL_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 103,
  //     name: FORWARD_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 8,
  //     name: CREATE_ACTIVITY_FOR_FORWARD_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 104,
  //     name: REDIRECT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 9,
  //     name: CREATE_ACTIVITY_FOR_REDIRECT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 107,
  //     name: GROUP_REPLY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 17,
  //     name: CREATE_ACTIVITY_FOR_GROUP_REPLY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 108,
  //     name: GROUP_FORWARD_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 18,
  //     name: CREATE_ACTIVITY_GROUP_FORWARD_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 113,
  //     name: GROUP_REPLY_ALL_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 23,
  //     name: CREATE_ACTIVITY_FOR_GROUP_REPY_ALL_EVENT,
  //     message: '',
  //   },
  {
    key: 105,
    name: 'REPLY_TO_SAVE_DRAFT_EVENT',
    message: 'Reply to save draft event',
  },
  //   {
  //     key: 10,
  //     name: CREATE_ACTIVITY_FOR_REPLY_TO_SAVE_DRAFT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 11,
  //     name: CREATE_ACTIVITY_FOR_COMPOSE_SAVEDRAFT_NEW_CASE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 15,
  //     name: CREATE_ACTIVITY_FOR_COMPOSE_SAVEDRAFT_CURRENT_CASE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 110,
  //     name: GROUP_REPLY_SAVEDRAFT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 20,
  //     name: CREATE_ACTIVITY_FOR_GROUP_REPLY_SAVEDRAFT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 508,
  //     name: CREATE_ACTIVITY_FOR_REPLY_SAVE_DRAFT_EVENT,
  //     message: '',
  //   },
  {
    key: 509,
    name: 'REPLY_SAVE_DRAFT_EVENT',
    message: 'Reply save draft event',
  },
  //   {
  //     key: 510,
  //     name: CREATE_ACTIVITY_FOR_SAVE_SAVE_DRAFT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 25,
  //     name: CREATE_ACTIVITY_FOR_REATTEMPT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 517,
  //     name: ACCEPT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 26,
  //     name: CREATE_ACTIVITY_FOR_ACCEPT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 518,
  //     name: REJECT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 27,
  //     name: CREATE_ACTIVITY_FOR_REJECT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 209,
  //     name: TRANSFER_ACTIVITY_TO_USER_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 306,
  //     name: TRANSFER_ACTIVITY_TO_QUEUE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 307,
  //     name: TRANSFER_ACTIVITY_TO_QUEUE_BY_AUTOPUSHBACK_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 380,
  //     name: TRANSFER_ACTIVITY_TO_DEPARTMENT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 206,
  //     name: UNASSIGN_ACTIVITY_TO_USER_BECAUSE_OF_TRANSFER_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 309,
  //     name: FULL_ACTIVITY_FROM_QUEUE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 213,
  //     name: ASSIGN_ACTIVITY_TO_USER_BECAUSE_OF_TRANSFER_EVENT,
  //     message: '',
  //   },
  {
    key: 540,
    name: 'READ_START_ACTIVITY_EVENT',
    message: 'Read start activity event',
  },
  //   {
  //     key: 541,
  //     name: READ_READ_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 542,
  //     name: READ_WRAP_UP_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 543,
  //     name: READ_PENDING_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 545,
  //     name: READ_SESSION_TIMEOUT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 546,
  //     name: READ_LOG_OUT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 547,
  //     name: READ_BROWSER_CRASH_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 548,
  //     name: READ_REOPEN_ACTIVITY_EVENT,
  //     message: '',
  //   },
  {
    key: 549,
    name: 'READ_INPROGRESS_ACTIVITY_EVENT',
    message: 'Read inprogress activity event',
  },
  //   {
  //     key: 550,
  //     name: READ_CUSTOM_STATUS_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 551,
  //     name: READ_WRAP_EXIT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 514,
  //     name: PIN_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 401,
  //     name: CHANGE_CUSTOMER_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 410,
  //     name: PICK_UP_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 411,
  //     name: AGENT_LEAVE_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 412,
  //     name: CUSTOMER_LEAVE_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 414,
  //     name: CHAT_ACTIVITY_ADDED_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 415,
  //     name: MANAGET_JOIN_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 416,
  //     name: MANAGET_LEAVE_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 418,
  //     name: AGENT_MOVED_AWAY_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 417,
  //     name: AGENT_ADDED_IN_CHAT_SESSION,
  //     message: '',
  //   },
  //   {
  //     key: 419,
  //     name: AGENT_INVITATION_OF_TEXT_TO_VCHAT_CONVERSION,
  //     message: '',
  //   },
  //   {
  //     key: 420,
  //     name: CUST_INVITATION_OF_TEXT_TO_VCHAT_CONVERSION,
  //     message: '',
  //   },
  //   {
  //     key: 421,
  //     name: CUST_REJECT_AGENT_INVITATION_OF_CHAT,
  //     message: '',
  //   },
  //   {
  //     key: 422,
  //     name: AGENT_REJECT_CUST_INVITATION_OF_CHAT,
  //     message: '',
  //   },
  //   {
  //     key: 423,
  //     name: AGENT_REJECT_CONF_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 424,
  //     name: AGENT_DECLINE_CONF_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 425,
  //     name: AGENT_JOIN_CONF_CHAT_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 426,
  //     name: BACK_STOPPING_TRIGGERD,
  //     message: '',
  //   },
  //   {
  //     key: 409,
  //     name: AGENT_IDENTIFIED_FOR_CHAT_ACTIVITY_ASSIGNMENT_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 308,
  //     name: TRANSFER_CHAT_ACTIVITY_TO_QUEUE_BY_PUSHBACK_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 451,
  //     name: CREATE_GENERIC_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 452,
  //     name: SAVE_DRAFT_GENERIC_ACTIVITY_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 453,
  //     name: ASSIGN_GENERIC_ACTIVITY_EVENT,
  //     message: '',
  //   },
  {
    key: 210,
    name: 'PUSH_NEW_CASE_ACTIVITY_TO_QUEUE_EVENT',
    message: 'Push new case activity to queue event',
  },
  //   {
  //     key: 211,
  //     name: PUSH_OLD_CASE_ACTIVITY_TO_QUEUE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 212,
  //     name: PUSH_NO_CASE_ACTIVITY_TO_QUEUE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 115,
  //     name: CHANGE_EMAIL_DRAFT_REPLY_TYPE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 653,
  //     name: OPER_ASSGN_OLD_CASE,
  //     message: '',
  //   },
  //   {
  //     key: 659,
  //     name: OPER_OPEN_CASE,
  //     message: '',
  //   },
  //   {
  //     key: 660,
  //     name: OPER_CLOSE_CASE,
  //     message: '',
  //   },
  //   {
  //     key: 600,
  //     name: NO_CASE_CREATION_EVENT,
  //     message: '',
  //   },
  {
    key: 601,
    name: 'NEW_CASE_CREATE_EVENT',
    message: 'New case create event',
  },
  {
    key: 602,
    name: 'NEW_ACTIVITY_TO_NEW_CASE_ASSGIN_EVENT',
    message: 'New activity to new case assgin event',
  },
  //   {
  //     key: 603,
  //     name: NEW_ACTIVITY_TO_OLD_CASE_ASSGIN_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 609,
  //     name: OPEN_CASE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 610,
  //     name: CLOSE_CASE_EVENT,
  //     message: '',
  //   },
  //   {
  //     key: 611,
  //     name: CLOSE_CASE_VIA_TRANSFER_WORKFLOW,
  //     message: '',
  //   },
  //   {
  //     key: 654,
  //     name: CREATE_NEW_CASE,
  //     message: '',
  //   },
  //   {
  //     key: 661,
  //     name: CHANGE_CASE_OWNER,
  //     message: '',
  //   },
  {
    key: 2210,
    name: 'ACTIVITY_SEND_TO_UnifiedCCE_FOR_ROUTING',
    message: 'Activity send to UnifiedCCE for routing',
  },
  {
    key: 2212,
    name: 'ROUTING_RESPONSE_RETURNED_FROM_UnifiedCCE',
    message: 'Routing response returned from UnifiedCCE',
  },
];
