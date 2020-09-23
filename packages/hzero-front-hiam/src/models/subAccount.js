/**
 * @date 2018-12-17
 * @author WY <yang.wang06@hand-china.com>
 */

import { getResponse, createPagination } from 'utils/utils';
import { queryMapIdpValue, getPublicKey } from 'hzero-front/lib/services/api'; // 相对路径
import {
  subAccountQueryPage, // 查询子账户-分页
  subAccountPasswordUpdate, // 修改别人的密码
  // subAccountPasswordUpdateSelf, // 自己修改密码
  subAccountUserRolesQuery, // 查询可分配角色
  subAccountCurrentUserRoles, // 查询当前用户已分配角色
  subAccountQuery, // 查询详情
  subAccountCreate, // 新建
  subAccountUpdate, // 更新
  subAccountUserUnlock, // 解锁
  subAccountUserRolesRemove, // 解锁
  subAccountCurrentGroupRoles,
  subAccountUserGroupsQuery,
  addUserGroup,
  deleteUserGroup,
  queryDimension,
  queryEmployee,
} from '../services/subAccountService';
import { getPasswordRule } from '../services/commonService';

export default {
  namespace: 'subAccount',
  state: {
    dataSource: [], // 子账户数据
    pagination: false, // 子账户分页信息
    currentUserRoles: [], // 当前编辑用户 已经分配的角色
    lov: {}, // 存在 值集 lov 相关的数据
    passwordTipMsg: {},
    publicKey: '', // 公钥
    dimensionList: [],
    employeeList: [],
    employeePagination: {},
  },
  effects: {
    // 初始化 值集 这类在页面生存周期不会变的变量
    *init(_, { call, put }) {
      const lovBatchRes = yield call(queryMapIdpValue, {
        level: 'HIAM.RESOURCE_LEVEL', // 层级
        authorityType: 'HIAM.AUTHORITY_TYPE_CODE', // 授权方式
        idd: 'HPFM.IDD', // 国际化手机号前缀
        gender: 'HPFM.GENDER', // 性别
        userType: 'HIAM.USER_TYPE',
      });
      const lovBatch = getResponse(lovBatchRes);
      if (lovBatch) {
        const levelMap = {};
        lovBatch.level.forEach((level) => {
          levelMap[level.value] = level;
        });
        yield put({
          type: 'updateState',
          payload: {
            lov: {
              level: lovBatch.level,
              levelMap,
              authorityType: lovBatch.authorityType,
              idd: lovBatch.idd,
              gender: lovBatch.gender,
              userType: lovBatch.userType,
            },
          },
        });
      }
    },

    *getPublicKey(_, { call, put }) {
      const res = yield call(getPublicKey);
      if (res) {
        yield put({
          type: 'updateState',
          payload: {
            publicKey: res.publicKey,
          },
        });
      }
      return res;
    },

    // 获取密码校验规则
    *getPasswordRule({ payload }, { call, put }) {
      const res = getResponse(yield call(getPasswordRule, payload));
      if (res) {
        yield put({
          type: 'updateState',
          payload: {
            passwordTipMsg: res,
          },
        });
      }
      return res;
    },

    *fetchSubAccountList({ payload }, { call, put }) {
      const res = yield call(subAccountQueryPage, payload);
      const subAccount = getResponse(res);
      if (subAccount) {
        yield put({
          type: 'updateState',
          payload: {
            dataSource: subAccount.content,
            pagination: createPagination(subAccount),
          },
        });
      }
    },
    *updatePassword({ payload }, { call }) {
      const res = yield call(subAccountPasswordUpdate, payload);
      const pRes = getResponse(res);
      return pRes;
    },
    // 查询 当前用户 拥有的角色
    *getCurrentUserRoles({ payload }, { call }) {
      const res = yield call(subAccountCurrentUserRoles, payload);
      return getResponse(res);
      // // 同时查询 层级的 值集
    },
    // 查询当前租户可分配角色
    *fetchRoles({ payload }, { call }) {
      const rolesRes = yield call(subAccountUserRolesQuery, payload);
      return getResponse(rolesRes);
    },
    *querySubAccount({ payload }, { call }) {
      const { userId } = payload;
      const subAccountDetail = yield call(subAccountQuery, userId);
      return getResponse(subAccountDetail);
    },
    *createSubAccount({ payload }, { call }) {
      const res = yield call(subAccountCreate, payload);
      return getResponse(res);
    },
    *updateSubAccount({ payload }, { call }) {
      const res = yield call(subAccountUpdate, payload);
      return getResponse(res);
    },
    // 解锁用户
    *unlockSubAccount({ payload }, { call }) {
      const { userId } = payload;
      const res = yield call(subAccountUserUnlock, userId);
      return getResponse(res);
    },
    // 删除角色
    *removeRoles({ payload }, { call }) {
      const { memberRoleList } = payload;
      const res = yield call(subAccountUserRolesRemove, memberRoleList);
      return getResponse(res);
    },

    // 查询 当前用户 已分配的用户组
    *getCurrentUserGroups({ payload }, { call }) {
      const res = yield call(subAccountCurrentGroupRoles, payload);
      return getResponse(res);
      // // 同时查询 层级的 值集
    },
    // 查询当前租户可分配的用户组
    *fetchGroups({ payload }, { call }) {
      const rolesRes = yield call(subAccountUserGroupsQuery, payload);
      return getResponse(rolesRes);
    },
    // 添加用户组
    *addUserGroup({ payload }, { call }) {
      const res = yield call(addUserGroup, payload);
      return getResponse(res);
    },
    // 删除用户组
    *deleteUserGroup({ payload }, { call }) {
      const res = yield call(deleteUserGroup, payload);
      return getResponse(res);
    },
    // 获取权限维度
    *queryDimension({ payload }, { call, put }) {
      const res = getResponse(yield call(queryDimension, payload));
      if (res) {
        yield put({
          type: 'updateState',
          payload: {
            dimensionList: res,
          },
        });
      }
      return res;
    },
    *queryEmployee({ payload }, { call, put }) {
      const res = yield call(queryEmployee, payload);
      const employeeList = getResponse(res);
      if (employeeList) {
        yield put({
          type: 'updateState',
          payload: {
            employeeList: employeeList.content,
            employeePagination: createPagination(employeeList),
          },
        });
      }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
