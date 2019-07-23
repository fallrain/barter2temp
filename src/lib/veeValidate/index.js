import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import veeCustomRules from './veeCustomRules';

const dictionary = {
  en: {
    messages: {
      required: name => `${name}不能为空`,
      length: (name, len) => `${name}的长度应为${len}位`,
      min: (name, len) => `${name}的长度最小为${len}位`,
      max: (name, len) => `${name}的长度最大为${len}位`,
      decimal: () => '必须为小数',
      digits: (name, len) => {
        let str;
        if (len) {
          str = `${name}必须为长度为${len}的数字`;
        } else {
          str = `${name}必须为数字`;
        }
        return str;
      },
      confirmed() {
        return '两次输入的密码不一致';
      }
    }
  }
};

// 覆盖原有字典
Validator.localize(dictionary);

// 注入自定义规则
Object.keys(veeCustomRules).forEach((ruleName) => {
  Validator.extend(ruleName, veeCustomRules[ruleName]);
});

Vue.use(VeeValidate, {
  events: 'change|blur|input'
});
/* export default {
  rules: {
    phone: {
      getMessage: field => 's',
      validate: value => !!value
    }
  }
}; */
