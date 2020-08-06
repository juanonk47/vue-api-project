import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import Vue from "vue";

import App from "./App";
import router from "./router";
import appInfo from "./app-info";
// import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$appInfo = appInfo;

// LIBREARIAS USADAS

//LIBRERIA PARA CONSUMIAR API REST
// Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
