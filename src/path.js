const { NODE_ENV } = process.env;
export const publishPath = NODE_ENV === "gitPublish" ? "/my-site/dist" : "/";
