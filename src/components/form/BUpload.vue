<template>
  <div class="wUpload-img-par">
    <div
      v-show="imgs.length"
      class="wUpload-img-preshow"
    >
      <div
        class="wUpload-preshow"
        v-for="(item,index) in imgs"
        :key="item"
      >
        <i class="iconfont del icon-shanchu" @click="delFun(index)"></i>
        <img
          :src="item"
        >
      </div>
    </div>
    <vue-core-image-upload
      v-bind="$attrs"
    >
      <div class="wUpload">
        <i class="iconfont icon-jia wUpload-icon"></i>
      </div>
    </vue-core-image-upload>
  </div>
</template>
<script>
import VueCoreImageUpload from 'vue-core-image-upload';

export default {
  name: 'WUpload',
  components: { VueCoreImageUpload },
  props: {
    imgs: {
      type: Array,
      default: () => []
    },
    delFun: {
      type: Function
    }
  }
};
</script>
<style lang="scss">
  .wUpload {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid #2F2F38;
    text-align: center;
    border-radius: 6px;
  }

  .wUpload-icon {
    color: #bbb;
    font-size: 36px;
  }

  .wUpload-img-preshow {
    display: flex;
  }

  .wUpload-img-par {
    display: flex;
    flex-wrap: wrap;
  }

  .wUpload-preshow {
    position: relative;
    width: 56px;
    height: 56px;
    margin-right: 20px;
    justify-content: space-between;

    img {
      width: 100%;
      height: 100%;
    }

    .del {
      font-size: 18px;
      position: absolute;
      color: #333;
      right: -6px;
      top: -6px;
      background: #fff;
      border-radius: 100%;
    }
  }
</style>
