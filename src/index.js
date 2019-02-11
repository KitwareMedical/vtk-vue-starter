import Vue from 'vue';

import App from './components/App.vue';

new Vue({
  el: document.querySelector('#approot'),
  components: { App },
  template: '<App />',
});
