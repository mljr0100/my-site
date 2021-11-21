import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import BlogDetail from "@/views/Blog/Detail";
import { publicPath } from "../path";
console.log("publicPath", publicPath);

export default [
  { name: "Home", path: publishPath, component: Home },
  { name: "Blog", path: publishPath + "/article", component: Blog },
  {
    name: "CategoryBlog",
    path: publishPath + "/article/cate/:categoryId",
    component: Blog,
  },
  {
    name: "BlogDetail",
    path: publishPath + "/article/:id",
    component: BlogDetail,
  },
  { name: "About", path: publishPath + "/about", component: About },
  { name: "Message", path: publishPath + "/message", component: Message },
  { name: "Project", path: publishPath + "/project", component: Project },
];
