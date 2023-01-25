function Player(namePlayer) {

  this.namePlayer = namePlayer;
  this.pv = 100;
  this.sp = 100;

  this.healing = function (targetPlayer) {
    if (this.sp >= 30) {
      this.sp -= 30;
      targetPlayer.pv += 20;
      console.log("Regenerando vida");
    } else {
      console.info("Insuficiente maná");
    }

    this.state(targetPlayer);
  };


  let i = 1;
  setInterval(this.poison = function(targetPlayer){
    if(this.sp >= 20){
        this.sp -= 20;
        targetPlayer.pv -= 5;
        i -- ;
        console.info("Te has envenenado");
        console.log(targetPlayer);
    }else{
        
    }
        
    
  }, 1000);
 



  this.atack = function (targetPlayer) {
    if (targetPlayer.pv > 15) {
      targetPlayer.pv -= 15;
    } else {
      targetPlayer.pv = 0;
      console.warn(targetPlayer.namePlayer + "está acabado!")
    }
    this.state(targetPlayer);
  };

  this.state = function (targetPlayer) {
    console.info(this);
    console.info(targetPlayer);
  };
}

var gandalf = new Player("gandalf");
var legolas = new Player("legolas");

console.log(gandalf);
console.log(legolas);


