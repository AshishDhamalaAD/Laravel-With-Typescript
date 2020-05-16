import Vue from 'vue'
import { InertiaApp } from '@inertiajs/inertia-vue'

require('./bootstrap')

Vue.use(InertiaApp)
Vue.prototype.$route = (...args) => {
    const [routeName, ...rest] = args

    return route(...[`frontend.${routeName}`, ...rest]).url()
}

const app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./pages/${name}`).then(module => module.default),
            transformProps: props => {
                return {
                    isLoading: false,
                    routeName: route().current(),
                    ...props,
                }
            },
        },
    }),
}).$mount(app)
