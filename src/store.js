import { reactive } from 'vue';

export const store = reactive({
    ApiUrl: 'http://127.0.0.1:8000/',
    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'autos',
            label: 'Auto'
        },
    ]
});