var app = new Vue({
  el: '#root',
  data: {
    mails: []
  },
  // mounted(){
  //   const self = this;
  //   for (var i = 0; i < 10; i++) {
  //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  //      .then(function (result) {
  //        self.mails.push(result.data.response);
  //     });
  //
  //   }
  // },
  methods: {
    generaMail: function () {
      const self = this;
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then(function (result) {
           self.mails.push(result.data.response);
        });
      }
    }
  }


});
