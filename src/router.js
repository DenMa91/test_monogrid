import { createWebHistory, createRouter } from "vue-router";
import Home from "../src/views/Home.vue"
import ImageDetails from "../src/views/ImageDetails.vue"
const history = createWebHistory();
const routes = [
  { path: "/", component: Home },
  { path: "/image/:id",name:"imageDetails", component: ImageDetails, props: true },
  
];
const router = createRouter({ history, routes });
export default router;