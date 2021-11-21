/**
 * 格式化日期
 * @param {*} timestamp 时间戳
 * @param {*} showTime 显示具体时间
 * @returns
 */
export default function(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  let str = `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hour = date
      .getHours()
      .toString()
      .padStart(2, "0");
    const minute = date
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const second = date
      .getSeconds()
      .toString()
      .padStart(2, "0");
    str += `  ${hour}:${minute}:${second}`;
  }
  return str;
}
