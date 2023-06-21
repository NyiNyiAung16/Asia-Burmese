const app=Vue.createApp({
   data(){
    return{
        hide:false
    }
   },
   methods:{
    show(){
      this.hide=!this.hide
    }
   }
});


app.mount('#app');
