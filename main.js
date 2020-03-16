var app = new Vue({
    el: '#app',
    data:{
      password: 'elMarkKierePasswordPalVideoSecreto',
      error: false,
      view: false,
    },
 

    methods: {
     pepe: function(){
        pwd = document.getElementById('elInput').value
        if (pwd == app.password){
          app.view = true
        }else{
          app.error = true
        }
     }
  
    },
    mounted: function () {
      
      }
  
    },
  
  
  
  
  
  )