import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./components/HomeView.vue";
import SettingsView from "./components/SettingsView.vue";
import SettingsProfileView from "./components/SettingsProfileView.vue";
import UserView from "./components/UserView.vue";
import NotFound from "./components/NotFound.vue";
import HomeWork from "./components/HomeWork.vue";
import ThemeView from "./components/ThemeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      name: "settings",
      path: "/settings",
      component: SettingsView,
      children: [
        {
          name: "settings-profile",
          path: "profile",
          component: SettingsProfileView,
        },
      ],
    },
    {
      name: "user",
      path: "/user/:id",
      component: UserView,
    },
    {
      name: "404",
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
    {
      name: "homework",
      path: "/homework",
      component: HomeWork,
    },
    {
      name: "theme",
      path: "/theme",
      component: ThemeView,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
