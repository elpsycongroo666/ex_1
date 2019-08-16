<template>
    <div class="first">
        <p>{{msg}}</p>
        <p v-text="msg">{{msg}}</p>
        <p v-text="msg+'s'"></p>
        <p v-text="msg.toUpperCase()"></p>
        <p v-text="age + 1"></p>
        <p v-text="age > 18? '成年' : '未成年'"></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg : 'jack',
            age : 1
        }
    }
}
</script>

<style lang="sass" scoped>

</style>