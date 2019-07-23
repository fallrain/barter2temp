<template>
  <transition name="bottomToUp">
    <div
      v-show="show"
      class="w-model"
    >
      <div class="w-model-head">
        <div class="w-model-head-close">
          <i
            class="iconfont icon-chacha"
            @click="hide"
          ></i>
        </div>
      </div>
      <div class="w-model-cnt">
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WModel',
  props: {
    // 显示隐藏
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide() {
      /* 隐藏弹层 */
      this.$emit('update:show', false);
    }
  }
};
</script>

<style lang="scss">
  .w-model {
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 44px);
    padding: 15px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .w-model-mask {
    position: fixed;
    z-index: 998;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .w-model-head {
    display: flex;
  }

  .w-model-head-close {
    margin-left: auto;

    .iconfont {
      font-size: 15px;
      color: #222229;
    }
  }

  .w-model-cnt {
    flex-grow: 1;
    overflow-y: auto;
  }
</style>
