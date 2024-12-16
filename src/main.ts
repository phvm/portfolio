import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRoutes } from "./router";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const routes = createRoutes();
app.use(routes);

app.mount("#app");
