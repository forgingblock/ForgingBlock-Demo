import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import 'muse-ui/lib/styles/base.less';
import {
    Alert,
    AppBar,
    AutoComplete,
    Avatar,
    Badge,
    BottomNav,
    BottomSheet,
    Breadcrumbs,
    Button,
    Card,
    Checkbox,
    Chip,
    DateInput,
    DataTable,
    Dialog,
    Divider,
    Drawer,
    ExpansionPanel,
    Form,
    Grid,
    GridList,
    Helpers,
    Icon,
    List,
    LoadMore,
    Menu,
    Pagination,
    Paper,
    Picker,
    Popover,
    Progress,
    Radio,
    Select,
    SlidePicker,
    Slider,
    Snackbar,
    Stepper,
    SubHeader,
    Switch,
    Tabs,
    TextField,
    Tooltip,
    theme
} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);

Vue.config.productionTip = false
window.axios=axios;

axios.defaults.baseURL = 'https://api.forgingblock.io/';
//axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
