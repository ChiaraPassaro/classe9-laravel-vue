/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//Importiamo vue
window.Vue = require('vue');

//Importiamo le rotte e la nostra view App.vue
import Routes from './routes.js';
import App from './views/App';

//instanziamo Vue in una costante app
const app = new Vue({
    el: "#app", //questo è il nostro div che contiene la app
    router: Routes, //qui diciamo a vue di usare come router Routes
    render: h => h(App) //e qui usiamo un attributo di vue che renderizza il tutto in App
});

export default app;

/** ** ** ** ** **

render: h => h(App) 
è una contrazione di

render: function (createElement) {
    return createElement(App);
}

che può essere contratta a sua volta in
render(createElement) {
    return createElement(App);
}

poi in
render(h) {
    return h(App);
}

ed infine in
render: h => h(App)

h => h(App) è una arrow function una dichiarazione di funzione contratta 
non è proprio identica ad una funzione "normale", perché prende sempre come this quello del genitore e non è possibile modificarlo

** ** ** ** ** **/