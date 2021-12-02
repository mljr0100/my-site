/**
 * 函数防抖
 * @param {*} fn 一定时间内运行的函数
 * @param {*} duration 这段时间内部不多次执行函数
 * @returns 
 */
export default function (fn, duration = 100) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, duration)
    }
}