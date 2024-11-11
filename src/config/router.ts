import { createRouter, createWebHistory } from 'vue-router';
import {ERoutes} from "../constants/headerLinks.ts";
import Delivery from "../components/organism/Delivery.vue";
import Main from "../components/organism/Main.vue";
import Catalog from "../components/organism/Catalog.vue";
import Contacts from "../components/organism/Contacts.vue";

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
