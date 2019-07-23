<template>
  <div class="wItem-item">
    <div class="wItem-item-left">
      <span class="wItem-item-title" v-show="title">{{title}}</span>
      <slot name="left"></slot>
    </div>
    <div
      v-if="arrow"
      class="wItem-item-right"
    >
      <span
        class="wItem-item-right-val"
        v-show="value"
      >{{value}}</span>
      <slot name="right"></slot>
      <i
        class="iconfont icon-youjiantou"
        @click="rightHandle"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WItem',
  props: {
    // 是否显示右箭头
    arrow: {
      type: Boolean,
      default: true
    },
    // 标题
    title: {
      default: ''
    },
    // 内容
    value: {
      default: ''
    }
  },
  methods: {
    rightHandle() {
      /* 右箭头点击事件 */
      this.$emit('rightClick',this);
    }
  }
};
</script>

<style lang="scss">
  .wItem-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #222229;
    border-bottom: 1px solid #1C1C21;
    padding-left: 15px;
    padding-right: 15px;
  }

  .wItem-item-title {
    font-size: 15px;
    color: #fff;
  }

  .wItem-item-right {
    display: flex;
    align-items: center;

    .iconfont {
      margin-left: 30px;
      font-size: 10px;
      color: #838299;
    }
  }

  .wItem-item-right-val {
    color: #838299;
  }
</style>
