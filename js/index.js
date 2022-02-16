Vue.config.productionTip = false;
Vue.component("hole", {
  props: ["rank", "serial", "index"],
  template: `
        <div class="hole">
          <span class="rank">{{rank}}</span>
          <a
            :href="'https://pkuhelper.pku.edu.cn/hole/##'+serial"
            target="_blank"
            class="jumpLink"
          >
            <span class="serial" id="app"> {{serial}} </span>
          </a>
          <span class="stats">{{index}} </span>
        </div>`,
});

const vmhot = new Vue({
  el: "#sortByHot",
  data() {
    return {
      info: null,
      sortby: "Hot",
      period: "Day",
    };
  },
  // beforeUpdate() {
  //   let apiURL =
  //     "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
  //   axios.get(apiURL).then((response) => (this.info = response.data.data));
  // },
  mounted() {
    let apiURL =
      "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
    axios.get(apiURL).then((response) => (this.info = response.data.data));
  },
  methods: {
    changePeriod: function (event, toPeriod) {
      this.period = toPeriod;
      let apiURL =
        "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
      axios.get(apiURL).then((response) => (this.info = response.data.data));
    },
  },
});

const vmreply = new Vue({
  el: "#sortByReply",
  data() {
    return {
      info: null,
      sortby: "Reply",
      period: "Day",
    };
  },
  // beforeUpdate() {
  //   let apiURL =
  //     "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
  //   axios.get(apiURL).then((response) => (this.info = response.data.data));
  // },
  mounted() {
    let apiURL =
      "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
    axios.get(apiURL).then((response) => (this.info = response.data.data));
  },
  methods: {
    changePeriod: function (event, toPeriod) {
      this.period = toPeriod;
      let apiURL =
        "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
      axios.get(apiURL).then((response) => (this.info = response.data.data));
    },
  },
});

const vmstar = new Vue({
  el: "#sortByStar",
  data() {
    return {
      info: null,
      sortby: "Star",
      period: "Day",
    };
  },
  // beforeUpdate() {
  //   let apiURL =
  //     "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
  //   axios.get(apiURL).then((response) => (this.info = response.data.data));
  // },
  mounted() {
    let apiURL =
      "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
    axios.get(apiURL).then((response) => (this.info = response.data.data));
  },
  methods: {
    changePeriod: function (event, toPeriod) {
      this.period = toPeriod;
      let apiURL =
        "http://pekinguniversity.top/api/v1/" + this.sortby + "/" + this.period;
      axios.get(apiURL).then((response) => (this.info = response.data.data));
    },
  },
});
