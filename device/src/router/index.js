import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Active from '@/pages/Active.vue'
import Register from '@/pages/Register.vue'
import Bind from '@/pages/Bind.vue'
import Login from '@/pages/Login.vue'
import Error from '@/pages/Error.vue'



Vue.use(Router)



const router = new Router({

	mode: 'history',
	routes: [

		{
			path: '*',
			name: 'Login',
			component: Login,
		},
   
    {
    	path: '/Active',
    	name: 'Active',
    	component: Active,
    },
    {
    	path: '/Register',
    	name: 'Register',
    	component: Register,
    },
    {
    	path: '/Error',
    	name: 'Error',
    	component: Error,
    },
    {
    	path: '/Bind',
    	name: 'Bind',
    	component: Bind,
    },
    {
    	path: '/Index',
    	name: 'Index',
    	component: Index,
      meta: {
      	requireAuth: true,
      },
    },
	]
})



// 全局路由守卫
router.beforeEach((to, from, next) => {
	// 逻辑操作
	if (to.meta.requireAuth) { // 判断该路由是否需要登录权限

		if (localStorage.getItem('token')) { // 通过vuex state获取当前的token是否存在
			next();
		} else {
			next({
				path: '/Login',
				query: {
					redirect: to.fullPath
				} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	} else {
		next();
	}
})

router.afterEach((to, from) => {
	// 逻辑操作
})

export default router
