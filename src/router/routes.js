import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import BlogDetail from "@/views/Blog/Detail";

const p = "/my-site/dist";

export default [
  { name: "Home", path: p + "/", component: Home },
  { name: "Blog", path: p + "/article", component: Blog },
  {
    name: "CategoryBlog",
    path: p + "/article/cate/:categoryId",
    component: Blog,
  },
  { name: "BlogDetail", path: p + "/article/:id", component: BlogDetail },
  { name: "About", path: p + "/about", component: About },
  { name: "Message", path: p + "/message", component: Message },
  { name: "Project", path: p + "/project", component: Project },
];
