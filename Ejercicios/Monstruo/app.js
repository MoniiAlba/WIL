new Vue({
  el: '#exercise',
  data: {
    show: true,
    showH: false,
    damage: [],
    anchoY: 100,
    anchoM: 100
    }, 
    methods: {
      hit: function(){
        this.showH=true;
        var a = -Math.floor((Math.random() * 10) + 1);
        this.damage.push(a);
        this.anchoM += a;
        if(this.anchoM >=0){
          var b = -Math.floor((Math.random() * 10) + 1);
          this.damage.push(b);
          this.anchoY += b;

          if(this.anchoY <= 0)
            this.termina('M');
        }else
          this.termina('Y');
        
      },

      megaHit: function(){
        this.showH=true;
        var a = -Math.floor((Math.random() * 30) + 1);
        this.damage.push(a);
        this.anchoM += a;
        if(this.anchoM >=0){
          var b = -Math.floor((Math.random() * 10) + 1);
          this.damage.push(b);
          this.anchoY += b;

          if(this.anchoY <= 0)
            this.termina('M');
        }else
          this.termina('Y');
      },

      heal: function(){
        if(this.anchoY != 100){
          var a = Math.floor((Math.random() * 10) + 1);
          var b = -Math.floor((Math.random() * 10) + 1);
          this.damage.push(a);
          this.damage.push(b);
          this.anchoY += a;
          this.anchoY += b;

          if(this.anchoY <= 0 ){
            this.termina('M');
          }
        }else{
          alert("Full life!");
        }
        
      },

      start: function(){
        this.damage = [];
        this.show = true;
        this.showH = false;
        this.anchoY = 100;
        this.anchoM = 100;
      },

      termina: function(value){
        var player;
        if(value=='Y'){
          player = 'YOU!';
          this.anchoM = 0;
        }else{
          player = 'MONSTER!';
          this.anchoY = 0;
        }
        alert("Game Over!  Winner: "+player);
        this.start();

        
        
      }
    }
  }
);