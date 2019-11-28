<template>
  <div>
    <h2>vuex 实例</h2>
    <hr>
    <h3>{{count}}</h3>
    <!-- <p>{{boys}}</p> -->
    <i>my name is {{name}} and I am {{ age }}</i>
    <p>{{msg}}</p>
    <!-- <p>{{ageStu}}</p> -->
    <div>
      <button @click="addAction()">+</button>
      <button @click="changeMsg()">change</button>
      <!-- <button @click="reduceAction()">-</button> -->
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations, getters, mapGetters, mapActions } from 'vuex';
import store from '../store/store'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    //   msg: 'Hello Vuex'
    }
  },
  methods: {
      addAction (){
          this.$store.commit('increment');
        //   this.$store.getters.doneTodos();
      },
      changeMsg () {
          this.$store.commit('changeMsg', {msg: "msg", a: 2})
      },
      ...mapActions(['setUsers'])
  },
  computed:{
      ...mapState({
        count: state => state.count,
        name: state => state.name,
        age: state => state.age,
        msg: state => state.msg
    }),
    ...mapGetters(['boys','boysLength','ageStu'])
  },
  created(){
    this.$store.dispatch('setUsers')
      // this.$store.dispatch('setUsers').then((res)=>{
      //   console.log("res:",res)
      // })
  }
//   {
//       count(){
//           return this.$store.state.count
//       }
//   }
}
</script>
<style >

  button{
    border: 1px #ddd solid
  }
</style>>
</style>