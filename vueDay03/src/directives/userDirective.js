// 封装项目中所有使用到的全局自定义指令
// export default {} // 导出默认对象
// 如果没有标识为default，那么就是一个常规的对象
export const myfocus = {
  inserted (el) {
    el.focus()
  }
}
