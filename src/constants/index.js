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

export const CASE_STATUS_TYPE = {
  OPEN: 0,
  CLOSED: 1,
  READYTOBECLOSED: 2,
};
export const CASE_STATUS_NAME = {
  OPEN: 'Open',
  CLOSED: 'Closed',
  READYTOBECLOSED: 'ReadyToBeClosed',
};
export const CASE_SEVERITY_TYPE = {
  URGENT: 1,
  HIGH: 2,
  MEDIUM: 3,
  LOW: 4,
};
export const CASE_SEVERITY_NAME = {
  URGENT: 'Urgent',
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
};

// export const ACTIVITY_HISTORY = [
//   {
//     key: 1,
//     name: NEW_IMCOMING_NEW_EVENT,
//     mesage: '',
//   },
//   {
//     key: 2,
//     name: SOFT_UNDELIVERABLE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 3,
//     name: HARD_UNDELIVERABLE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 201,
//     name: KEY_WORD_EVENT,
//     mesage: '',
//   },
//   {
//     key: 202,
//     name: ROUND_ROBIN_ASSIGN_EVENT,
//     mesage: '',
//   },
//   {
//     key: 203,
//     name: LOAD_BALANCING_ASSIGN_EVENT,
//     mesage: '',
//   },
//   {
//     key: 205,
//     name: PUSH_TO_AGENT_EVENT,
//     mesage: '',
//   },

//   {
//     key: 214,
//     name: SUPERVISION_ASSIGN_EVENT,
//     mesage: '',
//   },

//   {
//     key: 114,
//     name: AUTO_REPLIED_EVENT,
//     mesage: '',
//   },
//   {
//     key: 30,
//     name: NEW_AUTO_REPLY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 101,
//     name: AUTO_ACKNOWLEDGED_EVENT,
//     mesage: '',
//   },
//   {
//     key: 29,
//     name: NEW_AUTO_ACKNOWLEDGED_EVENT,
//     mesage: '',
//   },
//   {
//     key: 305,
//     name: MODE_BY_RULES,
//     mesage: '',
//   },
//   {
//     key: 310,
//     name: TRANSFER_ACTIVITY_TO_QUEUE_BY_RULES_EVENT,
//     mesage: '',
//   },
//   {
//     key: 311,
//     name: UNASSIGN_ACTIVITY_FROM_USER_BY_RULES_EVENT,
//     mesage: '',
//   },
//   {
//     key: 312,
//     name: TRANSFER_ACTIVITY_TO_USER_BY_RULES_EVENT,
//     mesage: '',
//   },
//   {
//     key: 313,
//     name: TRANSFER_TO_QUEUE_VIA_TRANSFER_WORKFLOW,
//     mesage: '',
//   },
//   {
//     key: 314,
//     name: TRANSFER_TO_USER_VIA_TRANSFER_WORKFLOW,
//     mesage: '',
//   },
//   {
//     key: 320,
//     name: TRANSFER_TO_QUEUE_BY_SYSTEM,
//     mesage: '',
//   },
//   {
//     key: 381,
//     name: TRANSFER_TO_DEPT_BY_RULES,
//     mesage: '',
//   },
//   {
//     key: 519,
//     name: SENT_OUT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 520,
//     name: E1_UNDISPATCHABLE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 521,
//     name: E1_UNDISPATCHABLE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 544,
//     name: CLOSE_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 41,
//     name: CREATE_WEB_ACTIVITY_FOR_WEB_TEMPLATES,
//     mesage: '',
//   },
//   {
//     key: 621,
//     name: CREATE_CASE_FOR_WEB_TEMPLATES,
//     mesage: '',
//   },
//   {
//     key: 622,
//     name: CASE_ACTIVITY_ASSOC_FOR_WEB_TEMPLATES,
//     mesage: '',
//   },
//   {
//     key: 311,
//     name: UNASSIGN_ACTIVITY_FROM_USER_BY_RULES_EVENT,
//     mesage: '',
//   },
//   {
//     key: 561,
//     name: CHANGE_STATUS_FOR_WEB_ACTIVITY,
//     mesage: '',
//   },
//   {
//     key: 13,
//     name: CREATE_ACTIVITY_NEW_CASE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 14,
//     name: CREATE_ACTIVITY_CURRENT_CASE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 7,
//     name: CREATE_ACTIVITY_FOR_REPLY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 102,
//     name: REPLY_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 112,
//     name: REPLY_ALL_EVENT,
//     mesage: '',
//   },
//   {
//     key: 22,
//     name: CREATE_ACTIVITY_FOR_REPLY_ALL_EVENT,
//     mesage: '',
//   },
//   {
//     key: 103,
//     name: FORWARD_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 8,
//     name: CREATE_ACTIVITY_FOR_FORWARD_EVENT,
//     mesage: '',
//   },
//   {
//     key: 104,
//     name: REDIRECT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 9,
//     name: CREATE_ACTIVITY_FOR_REDIRECT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 107,
//     name: GROUP_REPLY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 17,
//     name: CREATE_ACTIVITY_FOR_GROUP_REPLY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 108,
//     name: GROUP_FORWARD_EVENT,
//     mesage: '',
//   },
//   {
//     key: 18,
//     name: CREATE_ACTIVITY_GROUP_FORWARD_EVENT,
//     mesage: '',
//   },
//   {
//     key: 113,
//     name: GROUP_REPLY_ALL_EVENT,
//     mesage: '',
//   },
//   {
//     key: 23,
//     name: CREATE_ACTIVITY_FOR_GROUP_REPY_ALL_EVENT,
//     mesage: '',
//   },
//   {
//     key: 105,
//     name: REPLY_TO_SAVE_DRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 10,
//     name: CREATE_ACTIVITY_FOR_REPLY_TO_SAVE_DRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 11,
//     name: CREATE_ACTIVITY_FOR_COMPOSE_SAVEDRAFT_NEW_CASE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 15,
//     name: CREATE_ACTIVITY_FOR_COMPOSE_SAVEDRAFT_CURRENT_CASE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 110,
//     name: GROUP_REPLY_SAVEDRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 20,
//     name: CREATE_ACTIVITY_FOR_GROUP_REPLY_SAVEDRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 508,
//     name: CREATE_ACTIVITY_FOR_REPLY_SAVE_DRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 509,
//     name: REPLY_SAVE_DRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 510,
//     name: CREATE_ACTIVITY_FOR_SAVE_SAVE_DRAFT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 25,
//     name: CREATE_ACTIVITY_FOR_REATTEMPT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 517,
//     name: ACCEPT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 26,
//     name: CREATE_ACTIVITY_FOR_ACCEPT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 518,
//     name: REJECT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 27,
//     name: CREATE_ACTIVITY_FOR_REJECT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 209,
//     name: TRANSFER_ACTIVITY_TO_USER_EVENT,
//     mesage: '',
//   },
//   {
//     key: 306,
//     name: TRANSFER_ACTIVITY_TO_QUEUE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 307,
//     name: TRANSFER_ACTIVITY_TO_QUEUE_BY_AUTOPUSHBACK_EVENT,
//     mesage: '',
//   },
//   {
//     key: 380,
//     name: TRANSFER_ACTIVITY_TO_DEPARTMENT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 206,
//     name: UNASSIGN_ACTIVITY_TO_USER_BECAUSE_OF_TRANSFER_EVENT,
//     mesage: '',
//   },
//   {
//     key: 309,
//     name: FULL_ACTIVITY_FROM_QUEUE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 213,
//     name: ASSIGN_ACTIVITY_TO_USER_BECAUSE_OF_TRANSFER_EVENT,
//     mesage: '',
//   },
//   {
//     key: 540,
//     name: READ_START_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 541,
//     name: READ_READ_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 542,
//     name: READ_WRAP_UP_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 543,
//     name: READ_PENDING_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 545,
//     name: READ_SESSION_TIMEOUT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 546,
//     name: READ_LOG_OUT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 547,
//     name: READ_BROWSER_CRASH_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 548,
//     name: READ_REOPEN_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 549,
//     name: READ_INPROGRESS_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 550,
//     name: READ_CUSTOM_STATUS_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 551,
//     name: READ_WRAP_EXIT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 514,
//     name: PIN_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 401,
//     name: CHANGE_CUSTOMER_EVENT,
//     mesage: '',
//   },
//   {
//     key: 410,
//     name: PICK_UP_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 411,
//     name: AGENT_LEAVE_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 412,
//     name: CUSTOMER_LEAVE_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 414,
//     name: CHAT_ACTIVITY_ADDED_EVENT,
//     mesage: '',
//   },
//   {
//     key: 415,
//     name: MANAGET_JOIN_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 416,
//     name: MANAGET_LEAVE_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 418,
//     name: AGENT_MOVED_AWAY_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 417,
//     name: AGENT_ADDED_IN_CHAT_SESSION,
//     mesage: '',
//   },
//   {
//     key: 419,
//     name: AGENT_INVITATION_OF_TEXT_TO_VCHAT_CONVERSION,
//     mesage: '',
//   },
//   {
//     key: 420,
//     name: CUST_INVITATION_OF_TEXT_TO_VCHAT_CONVERSION,
//     mesage: '',
//   },
//   {
//     key: 421,
//     name: CUST_REJECT_AGENT_INVITATION_OF_CHAT,
//     mesage: '',
//   },
//   {
//     key: 422,
//     name: AGENT_REJECT_CUST_INVITATION_OF_CHAT,
//     mesage: '',
//   },
//   {
//     key: 423,
//     name: AGENT_REJECT_CONF_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 424,
//     name: AGENT_DECLINE_CONF_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 425,
//     name: AGENT_JOIN_CONF_CHAT_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 426,
//     name: BACK_STOPPING_TRIGGERD,
//     mesage: '',
//   },
//   {
//     key: 409,
//     name: AGENT_IDENTIFIED_FOR_CHAT_ACTIVITY_ASSIGNMENT_EVENT,
//     mesage: '',
//   },
//   {
//     key: 308,
//     name: TRANSFER_CHAT_ACTIVITY_TO_QUEUE_BY_PUSHBACK_EVENT,
//     mesage: '',
//   },
//   {
//     key: 451,
//     name: CREATE_GENERIC_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 452,
//     name: SAVE_DRAFT_GENERIC_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 453,
//     name: ASSIGN_GENERIC_ACTIVITY_EVENT,
//     mesage: '',
//   },
//   {
//     key: 210,
//     name: PUSH_NEW_CASE_ACTIVITY_TO_QUEUE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 211,
//     name: PUSH_OLD_CASE_ACTIVITY_TO_QUEUE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 212,
//     name: PUSH_NO_CASE_ACTIVITY_TO_QUEUE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 115,
//     name: CHANGE_EMAIL_DRAFT_REPLY_TYPE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 653,
//     name: OPER_ASSGN_OLD_CASE,
//     mesage: '',
//   },
//   {
//     key: 659,
//     name: OPER_OPEN_CASE,
//     mesage: '',
//   },
//   {
//     key: 660,
//     name: OPER_CLOSE_CASE,
//     mesage: '',
//   },
//   {
//     key: 600,
//     name: NO_CASE_CREATION_EVENT,
//     mesage: '',
//   },
//   {
//     key: 601,
//     name: NEW_CASE_CREATE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 602,
//     name: NEW_ACTIVITY_TO_NEW_CASE_ASSGIN_EVENT,
//     mesage: '',
//   },
//   {
//     key: 603,
//     name: NEW_ACTIVITY_TO_OLD_CASE_ASSGIN_EVENT,
//     mesage: '',
//   },
//   {
//     key: 609,
//     name: OPEN_CASE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 610,
//     name: CLOSE_CASE_EVENT,
//     mesage: '',
//   },
//   {
//     key: 611,
//     name: CLOSE_CASE_VIA_TRANSFER_WORKFLOW,
//     mesage: '',
//   },
//   {
//     key: 654,
//     name: CREATE_NEW_CASE,
//     mesage: '',
//   },
//   {
//     key: 661,
//     name: CHANGE_CASE_OWNER,
//     mesage: '',
//   },
//   {
//     key: 2210,
//     name: ACTIVITY_SEND_TO_UnifiedCCE_FOR_ROUTING,
//     mesage: '',
//   },
//   {
//     key: 2212,
//     name: ROUTING_RESPONSE_RETURNED_FROM_UnifiedCCE,
//     mesage: '',
//   },
// ];
