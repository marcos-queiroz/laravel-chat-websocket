import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import moment from 'moment';
import store from './store';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

moment.locale('pt-br');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(store);

        app.config.globalProperties.$filters = {
            formatDate(value) {
                if (value) {
                    return moment(value).format('DD/MM/YYYY HH:mm');
                }
            },
            // demais filtros
        }

        app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
