import { mapState } from 'vuex';

export default {
  async beforeRouteEnter(to, from, next) {
    next();
  },
  data() {
    return {
      pageCfg: {
        page: {
          pageSize: 10,
          page: 1
        }
      }
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
    })
  },
  methods: {
    back() {
      /* 返回上一页 */
      this.$router.back();
    },
    copy(selector, text) {
      /* 复制功能 */
      const copyIns = this.wUtil.clipboardCopy(selector, text);
      copyIns.on('success', () => {
        this.$toast('复制成功');
      });

      copyIns.on('error', () => {
        this.$toast('复制失败，请手动复制');
      });
      return copyIns;
    }
  }
};
