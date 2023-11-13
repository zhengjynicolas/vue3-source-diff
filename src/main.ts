import { createApp } from 'vue';
import App from './App.vue';
import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';
import SourceDiff from "./components/SourceDiff.vue";

const app = createApp(App);
app.component('VueDiff', VueDiff)
app.component('SourceDiff', SourceDiff)
app.mount('#app');