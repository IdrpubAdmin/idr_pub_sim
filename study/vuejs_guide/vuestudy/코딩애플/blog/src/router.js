import { createWebHistory, createRouter } from "vue-router";
import List from "./components/ListComponent"
import Home from "./components/HomeComponent"
import Detail from "./components/DetailComponent"
import Page404 from "./components/Page404Component"
import Author from "./components/AuthorComponent"
import Comment from "./components/CommentComponent"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/:page404",
    component: Page404,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 