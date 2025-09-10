import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Night_dancer from './pages/Night_dancer.vue'
import Senbonzakura from './pages/Senbonzakura.vue'
import Cupid from './pages/Cupid.vue'
import Paranoia from './pages/Paranoia.vue'
import Mirror from './pages/Mirror.vue'
import Echo from './pages/Echo.vue'
import Montagem_xonada from './pages/Montagem_xonada.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [ {
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/night_dancer',
			name: 'Night_dancer',
			component: Night_dancer
		},
		{
			path: '/senbonzakura',
			name: 'Senbonzakura',
			component: Senbonzakura
		},
		{
			path: '/cupid',
			name: 'Cupid',
			component: Cupid
		},
		{
			path: '/paranoia',
			name: 'Paranoia',
			component: Paranoia
		},
		{
			path: '/mirror',
			name: 'Mirror',
			component: Mirror
		},
		{
			path: '/echo',
			name: 'Echo',
			component: Echo
		},
		{
			path: '/montagem_xonada',
			name: 'Montagem xonada',
			component: Montagem_xonada
		},
	]
})

export default router;
