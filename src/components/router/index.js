import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
      routes:[
       { 
          path:'/login',
          name:'login',
          component:resolve => require(['@/components/Login'],resolve) 
       }, 
       { 
        path:'/index',
        name:'index',
        component:resolve => require(['@/components/index'],resolve),
        children:[
            {
            path:'/index/hello',
            name:'hello',
            component:resolve => require(['@/components/HelloWorld'],resolve),
            }
        ] 
     },
     { 
        path:'*',
        redirect(to){
            if(to.path == '/'){
                return '/index'
            }else{
                return '@/components/error404'
            }
            
        } 
     }, 
       ],
       mode:'history'
})

export default router


