<template>
<div id="home">
    <p>{{$route.name}}</p>
    <p>{{ count }}</p>
    <p>
        <!-- <button @click="increment">+</button> -->
        <!-- <button @click="decrement">-</button> -->
    </p>
</div>
</template>
<script>
import { mapActions,mapMutations } from 'vuex'

export default{
    data(){
        return {
            text:'ccc',
            count:0
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        goHome() {
            this.$router.push("/");
        }
    }
}

</script>
<style lang="css">
    .test{
        color: red;
    }
</style>