import Vue from "vue";
import App from "./App";
import iView from "iview";
import "iview/dist/styles/iview.css";
import locale from 'iview/dist/locale/pt-BR';

Vue.use(iView, { locale });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
