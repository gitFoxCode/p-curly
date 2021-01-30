import { createApp } from "vue";
import App from "./App.vue";
import SvgIcon from '@/components/SvgIcon.vue';
import SvgSprite from '@/components/SvgSprite.vue';

createApp(App)
  .component('svg-sprite', SvgSprite)
  .component('svg-icon', SvgIcon)
  .mount("#app");
