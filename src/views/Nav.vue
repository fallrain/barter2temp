<template>
  <div>
    <ul>
      <li
        v-for="(r,i) in routerData"
        :key="i"
      >
        <router-link :to="r.path">{{r.name}}{{r.meta.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable import/no-cycle */
import routerData from '@/router/routerData';

export default {
  components: {},
  data() {
    return {
      routerData: routerData.data
    };
  }
};
</script>

<style scoped>
  a {
    color: #42b983;
  }

  td {
    border: 1px solid;
  }
</style>
