// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, {router, head, isClient}) {
	head.link.push({
		href:
			'https://fonts.googleapis.com/css?family=Courier+Prime|Open+Sans:400,700|Roboto+Slab&display=swap',
		rel: 'stylesheet',
	});

	Vue.use(Vuex);

	Vue.component('Layout', DefaultLayout);
}
