import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import testWebPAndInjectWebPClass from "./lib/webp_test";
import { Vue } from "vue-class-component";
import smoothscroll from './lib/smoothscroll_polyfill';
import withUUID from "vue-uuid";

smoothscroll.polyfill();

Vue.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
]);

testWebPAndInjectWebPClass();

window.routerGlobal = router;

let vueApp = withUUID(createApp(App));

vueApp.use(router)
    .mount(document.body)
