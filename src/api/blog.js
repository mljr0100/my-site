import request from "./request";
/**
 * 获取博客列表数据
 * @param {*} page 当前页码 ，通常对数量级比较大的分页
 * @param {*} limit 页容量
 * @param {*} categoryid 所属分类，-1表示全部
 * @returns
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page, //当前页码 ，通常对数量级比较大的分页
      limit, //页容量
      categoryid, //所属分类，-1表示全部
    }, //这些参数会拼接在地址栏上一起传递到服务器
  });
}
/**
 * 获取博客分类数据
 * @returns
 */
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}
/**
 * 获取单个博客
 * @param {*} id 唯一编号，一般来说获取单个组件都是通过唯一编号来获取
 * @returns
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}
/**
 * 提交评论
 * @param {*} commentInfo 参数为评论的信息对象
 */
export async function postComment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
}
/**
 * 分页获取评论
 * @param {*} blogId 所属文章，-1表示不限
 * @param {*} page 当前页码
 * @param {*} limit 页容量
 * @returns
 */
export async function getComments(blogId, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogId, //所属文章，-1表示不限
      page, //当前页码
      limit, //页容量
    },
  });
}
