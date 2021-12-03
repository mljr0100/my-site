//设置滚动条的位置以达到实现回到顶部的相应效果
//参数以字符串的形式传递进来
export default function (refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleScroll); //给dom元素注册滚动事件
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll", undefined);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]); //往事件总线里面注册事件并且传递参数
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            }
        }
    }
}