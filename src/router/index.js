/**
 * 配置vue-router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/hello.vue'
import Home from '../components/home.vue'
import Count from '../components/count.vue'
// 使用插件, 用use
Vue.use(VueRouter); // 调用一个这个方法

// 路由的数组

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'count',
            component: (resolve) => require(['../components/count.vue'], resolve)
        },
        {
            path:'/hello',
            name:'hello',
            component:Hello
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            beforeEnter:(to,from,next)=>{
                console.log('我进入了Home模板');
                console.log(to);
                console.log(from);
                next();
            },
            beforeRouteLeave(to, from, next) {
                console.log("准备离开路由模板");
                next();
            }
        }
    ]
})