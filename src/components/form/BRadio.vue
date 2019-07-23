<template>
  <div class="w-radio" @click="toggle">
    <i :class="['val-top iconfont',style]"></i>
    <span class="w-radio-inf">{{inf}}</span>
  </div>
</template>
<script>
export default {
  name: 'WRadio',
  // 修改双向绑定的属性和事件
  model: {
    prop: 'checked',
    event: 'upOutside'
  },
  props: {
    type: Number, // 单选框类型
    color: String, // 颜色
    inf: String, // 文字
    // 选中状态
    checked: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      styleToggle: 0
    };
  },
  computed: {
    style() {
      /* 用选中状态和 type来切换选中、未选中的样式 */
      let style;
      if (this.type === 1) {
        style = ['icon-radiounchecked', 'icon-radiounchecked active'][this.checked];
      } else if (this.type === 2) {
        style = ['icon-msnui-radio-copy', 'icon-danxuanxuanzhong'][this.checked];
      }
      return style;
    }
  },
  methods: {
    toggle() {
      /* 切换选中状态 */
      this.$emit('upOutside', this.checked ^ 1);
    }
  }
};
</script>
<style scoped lang="scss">
  .w-radio {
    display: flex;
    align-items: center;
    font-size: 10px;
    color: #969796;
    margin-top: 5px;

    .iconfont {
      font-size: 6px;

      &:before {
      }

      &:after {
        background: #fff;
        border-radius: 100%;
      }
    }

    .icon-radiounchecked {
      color: #474E66;

      &.active {
        color: #59C1B6;
      }
    }
  }

  .w-radio-inf {
    margin-left: 5px;
    color: #474E66;
  }
</style>
