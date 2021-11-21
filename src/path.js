const { NODE_ENV } = process.env;
console.log(process.env, NODE_ENV, process.env.public);
export const publicPath = process.env.public === "gitPublic" ? "/my-site/dist" : "/";
