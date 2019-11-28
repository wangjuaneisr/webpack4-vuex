import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * vuex数据流
 * vue组件（发出dispath请求） ——> actions（commit提交）——> mutations(改变state) ——> render更新组件状态
*/

const store = new Vuex.Store({

    /**
     * state:
     * 这里面主要定义了需要的属性，只有在这里定义的属性，在使用时才能获取的到
     * 存储数据，存储状态；在根实例中注册了store 后，用 this.$store.state 来访问；
     * 对应vue里面的data；
     * 存放数据方式为响应式，vue组件从store中读取数据，如数据发生变化，组件也会对应的更新。
     * mapState把全局的 state , mapGetters getters 映射到当前组件的 computed 计算属性中
    */
    state: {
        count: 0,
        age: 18,
        name:'wangjuan',
        school:'ccnu',
        flag:false,
        msg: true,
        users: [],
        stus: [
            {
              name: '张三21',
              age: 18,
              sex: '女'
            }, {
              name: '张三42',
              age: 14,
              sex: '女'
            }, {
              name: '张三42',
              age: 54,
              sex: '女'
            }, {
              name: '张三2',
              age: 34,
              sex: '女'
            }, {
              name: '张三4',
              age: 13,
              sex: '男'
            }, {
              name: '张三52',
              age: 53,
              sex: '男'
            }]
    },

    /**
     * getters：
     * 这里是将我们定义的数据进行输出:多组件之间复用
     * getters 和 组件的 computed 类似，方便直接生成一些可以直接用的数据
     * 当组装的数据要在多个页面使用时，就可以使用 getters 来做
     * 
     * 可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，
     * 且只有当它的依赖值发生了改变才会被重新计算
    */
    getters: {
      boys (state) {
          return state.stus.filter(stu => stu.sex === '男')
        },
      boysLength (state, getters) {
          return getters.boys.length
      },
      ageStu (state) {
          return state.stus.filter(stu => stu.age > 20)
      }
    },
   
    /**
     * actions：
     * 组件中调用：dispatch、或者使用赋值函数 mapActions
     * 这里主要是与后台进行交互，并获取数据，然后传给mutations里面进行操作
     * 包含任意异步操作，通过提交 mutation 间接更变状态
     * 当组件进行数据修改的时候我们需要调用dispatch来触发actions里面的方法。
     * actions里面的每个方法中都会有一个commit方法，
     * 当方法执行的时候会通过commit调用mutations里面的方法，来触发mutations里面的方法进行数据的修改
    */
    actions: {
      // getUser({ commit }){
      //   return new Promise((resolve,reject)=>{
      //     setTimeout(()=>{
      //       // console.log('setUsers')
      //       commit('setUsers')
      //       resolve();
      //     },1000)
      //   },()=>{
      //     reject();
      //   })
      // }
      setUsers(context){
        
        return new Promise((resolve) => {
          context.commit('setUsers');
          resolve();
        },(reject)=>{
          reject();
        })
      }
    },
  
    /**
     * mutations:
     * 组件中调用：使用赋值函数 mapMutations
     * 这里是对后台传来的数据进行操作，处理数据 修改state
     * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
     * 把我们需要的数据赋值给在state里面定义那个数组里
     * mutations里面的每个函数都会有一个state参数，
     * 这样就可以在mutations里面进行state的数据修改，
     * 当数据修改完毕后，会传导给页面。页面的数据也会发生改变
     * 
    */
    mutations: {
        changeMsg (state, payload) {
            // 在这里改变state即可
            state.msg = payload.msg
          },
        setUsers (state, users) {
          // console.log("mutations:"+users)
            state.users = users
        },  
        increment (state) {
            state.count ++;
            // state.age = state.age + state.count;
        }
    },
    /**
     * 将 store 分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块
    */
   modules:{

   }
})
  export default store