import Vue from 'vue';
import VueTippy from 'vue-tippy';

Vue.use(VueTippy, {

	appendTo: () => document.fullscreenElement || document.body
	
});