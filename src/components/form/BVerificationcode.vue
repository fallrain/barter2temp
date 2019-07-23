<template>
  <button
    :class="['btn-send-code',disabled && 'disabled']"
    type="button"
    @click="sendCode"
    :disabled="disabled"
  >{{btnText}}
  </button>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'WVerificationcode',
  props: [
    'time', // 倒计时时间
    'beforeSend',
    'callBack', // 回调函数
    'errorCallBack', // 错误回调
    'afterSend',
    'phone', // 手机号
    'type'// 验证码发送类型，1:手机，2邮箱
  ],
  data() {
    return {
      btnText: '获取验证码',
      disabled: false,
      trueTime: this.time || 60
    };
  },
  computed: {
    ...mapState(['areaCode'])
  },
  methods: {
    async sendCode() {
      /* 发送验证码 */
      if (this.beforeSend && !this.beforeSend()) {
        return;
      }
      this.$nextTick(() => {
        const url = this.type === 1 ? `v1/send_code/${this.areaCode}/` : 'v1/send_code_by_email/';
        this.axGet(`${url}${this.phone}`).then(({ status }) => {
          if (status === '02') {
            if (this.callBack) {
              this.callBack();
            }
          } else if (this.errorCallBack) {
            this.errorCallBack();
          }
        });

        if (this.afterSend) {
          this.afterSend();
        }
        let time = this.trueTime;
        this.disabled = true;
        this.btnText = `重新获取验证码(${time}s)`;
        const interval = setInterval(() => {
          this.btnText = `重新获取验证码(${--time}s)`;
          if (time < 1) {
            this.btnText = '获取验证码';
            this.disabled = false;
            clearInterval(interval);
          }
        }, 1000);
      });
    }
  }
};
</script>
<style lang="scss">
  .btn-send-code {
    background: transparent;
    color: #59C1B6;
    font-size: 12px;

    &.disabled {
      color: #474E66;
    }
  }
</style>
