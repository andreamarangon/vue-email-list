console.log('ok');
var app = new Vue({
  el: '#root',
  data: {
    email: null
  },
  methods: {
    generaMail: function () {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then(function (response) {
         console.log(response.data.response);
         this.email = response.data.response
       // const result = response.data;
      });

    }
  }


});