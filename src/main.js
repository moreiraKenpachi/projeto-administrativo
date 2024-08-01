import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/rhea/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'                             //primeFlex



import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import TabMenu from 'primevue/tabmenu'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import InputMask from 'primevue/inputmask'
import DataTable from 'primevue/datatable'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import ProgressBar from 'primevue/progressbar'
import Slider from 'primevue/slider'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Rating from 'primevue/rating'


const app = createApp(App);
app.use(PrimeVue);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('TabMenu', TabMenu);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('InputMask', InputMask);
app.component('DataTable', DataTable);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Column', Column);
app.component('MultiSelect', MultiSelect);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.component('ProgressBar', ProgressBar);
app.component('Slider', Slider);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Rating', Rating);

app.use(router)
app.mount('#app')
