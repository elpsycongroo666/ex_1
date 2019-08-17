<template>
    <div class="on">
        <p>这个文件用来说明v-on绑定事件</p>
        <p>{{msg}}</p>
        <!-- v-on:事件名称=“事件处理函数(参数)” -->
        <button v-on:click='dosome("jack",$event)'>点我啊</button>
        <button v-on:[type]="dothis">你自由</button>
        <button v-on:click='dosome("jack",$event)'>点我啊</button>
        <a href="http://baidu.com" @click.stop.prevent='sayHi'>单击我向你问好</a>
        <!-- prevent阻止标签的默认事件， stop阻止冒泡 -->
        <!-- <input type="text" @keydown.13="showmsg" v-model="key"> -->
        <button @click.once="onceDo">点我啊1</button>
        <button @click.once="key=111">一次</button>
        <input type="text" @keydown.enter="showmsg">
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg : 'hello',
            type : 'dblclick',
            key : 'abc'
        }
    },
    methods : {
        onceDo(){
            console.log('onceDo')
        },
        dosome(name,event){
            console.log(name)
            console.log(event)
        },
        dothis(){
            console.log('dothis')
        },
        sayHi(){
            alert('你好啊')
        },
        showmsg(){
            console.log(this.key);
        }
    }
}
</script>

<style lang="less" scoped>

</style>