<template>
  <div
    class="wTextLine-divider-par"
    v-show="show"
  >
    <div class="wTextLine-divider">
      <div class="wTextLine-divider-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WTextLine',
  props: {
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
  .wTextLine-divider-par {
    padding-left: 45px;
    padding-right: 45px;
  }

  .wTextLine-divider {
    width: 100%;
    height: 50px;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background: #656476;
    }

    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: rgba(28, 28, 33, 1);
      padding: 0 23px;
      font-size: 10px;
      font-weight: normal;
      color: rgba(101, 100, 118, 1);
    }
  }
</style>
