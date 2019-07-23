<template>
  <div id="app" class="app">
    <div class="app-container">
      <keep-alive
        :exclude="aliveExclude"
      >
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: mapState([
    'aliveExclude',
  ])
};
</script>
<style lang="scss">
  @import 'assets/css/base';
</style>
<style>
  @import 'assets/font/iconfont.css';
</style>
<style lang="scss">
  @import 'assets/css/common';
</style>
