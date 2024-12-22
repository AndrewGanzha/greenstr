import { createRouter, createWebHistory } from "vue-router";
import { ERoutes } from "../constants/headerLinks.ts";
import Delivery from "../components/organism/Delivery.vue";
import Main from "../components/organism/Main.vue";
import Catalog from "../components/organism/Catalog/Catalog.vue";
import Contacts from "../components/organism/Contacts.vue";
import Reductor from "../components/organism/Reductor.vue";
import Armature from "../components/Armature.vue";

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
  {
    name: "armature",
    path: `${ERoutes.armature}/:type`,
    component: Armature,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
