Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    mails: []
  },
  mounted(){
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then((result) => {
         this.mails.push(result.data.response);
      });

    }
  },
  // methods: {
  //   generaMail: function () {
  //     for (var i = 0; i < 10; i++) {
  //       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  //           .then((result) => {
  //             this.mails.push(result.data.response);
  //       });
  //     }
  //   }
  // }


});
