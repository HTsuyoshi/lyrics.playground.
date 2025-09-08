import { createApp } from 'vue'
import './style.css'
import App from './pages/App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const app = createApp(App);

app.use(router)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');

app.config.errorHandler = (err, instance, info) => {
	console.log(err);
	console.log(instance);
	console.log(info);
};
