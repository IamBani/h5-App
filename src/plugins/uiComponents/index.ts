import { App } from 'vue';
import {
  Button, Search, Tabbar, TabbarItem,
  Swipe, SwipeItem,
} from 'vant';
// import * as ElIconModules from '@element-plus/icons'
// import 'element-plus/dist/index.css'

// import SvgIcon from '@/components/Svg/Svg.vue'

// function registeredSvgIcon (app: App): void {
//   for (const iconName in ElIconModules) {
//     if (Reflect.has(ElIconModules, iconName)) {
//       const item = ElIconModules[iconName]
//       app.component(iconName, item)
//     }
//   }
// }
export default {
  install(Vue:App):void {
    Vue.component(Button.name, Button);
    Vue.component(Search.name, Search);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
  },
};
