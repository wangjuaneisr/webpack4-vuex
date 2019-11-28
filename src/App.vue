<template>
    <transition name="fade">
        <router-view/>
    </transition>   
</template>
<script>
export default{
    // name:'App',
    data(){
        return {
            text:'abc'
        }
    }
}

</script>
<style lang="css">
    .fade-enter {
        opacity:0;
    }
    .fade-leave{
        opacity:1;
    }
    .fade-enter-active{
        transition:opacity .5s;
    }
    .fade-leave-active{
        opacity:0;
        transition:opacity .5s;
    }
</style>