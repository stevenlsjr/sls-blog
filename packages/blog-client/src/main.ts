import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
const app = createApp(App)
  .use(store, key)
  .use(router)
  .mount("#app");
(window as any).$app = app;
