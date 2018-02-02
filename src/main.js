import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-b8479.firebaseio.com/data.json'
// Troca o metodo post por metodo PUT
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
// Quando acontece o swap de metodos o metodo GET default não funciona, portando é preciso readapta-lo
  next(response => {
    response.json = () => {return {messagens: response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})