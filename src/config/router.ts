import { createRouter, createWebHistory } from "vue-router";
import { ERoutes } from "../constants/headerLinks.ts";
import Delivery from "../components/organism/Delivery.vue";
import Main from "../components/organism/Main.vue";
import Catalog from "../components/organism/Catalog/Catalog.vue";
import Contacts from "../components/organism/Contacts.vue";
import Reductor from "../components/organism/Reductor.vue";

const routes = [
  {
    path: ERoutes.main,
    component: Main,
  },
  {
    path: ERoutes.catalog,
    component: Catalog,
  },
  {
    path: ERoutes.delivery,
    component: Delivery,
  },
  {
    path: ERoutes.contact,
    component: Contacts,
  },
  {
    name: "reductor",
    path: `${ERoutes.reductor}/:type`,
    component: Reductor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
