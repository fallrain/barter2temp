import wValidateRules from '@/lib/wValidate/wValidateRules';

const { rules } = wValidateRules;
export default {
  phone: {
    getMessage() {
      return '请输入合法的手机号';
    },
    validate(val) {
      return rules.mobile(val);
    }
  },
  phoneOrEmail: {
    getMessage() {
      return '请输入合法的手机号/邮箱';
    },
    validate(val) {
      return rules.mobile(val) || rules.email(val);
    }
  },
  notEquals: {
    getMessage() {
      return '';
    },
    validate(val, args) {
      return val !== args[0];
    }
  },
  enOrNumber: {
    getMessage(name) {
      return `${name}应由数字字母组成`;
    },
    validate(val) {
      return rules.enOrNumber(val);
    }
  },
};
