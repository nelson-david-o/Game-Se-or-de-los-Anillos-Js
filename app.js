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


  this.poison = function(targetPlayer = Player){

    let instance = this;
    clearInterval(instance.poisonHitsTime);

    if (instance.poisonHits > 0) {
        instance.poisonHits = 0;
    }

    instance.addPoisonEffect(targetPlayer, instance);

    instance.poisonHitsTime = setInterval( function() {

        if (instance.poisonHits < instance.limitPoison) {
            instance.addPoisonEffect(targetPlayer, instance);
            
        } else {
            console.log("Fin del envenenamiento :" + targetPlayer.namePlayer);
            instance.poisonHits = 0;
            instance.state(targetPlayer);
            clearInterval(instance.poisonHitsTime);
        }

    }, 5000)
    
  };

  this.addPoisonEffect = function (targetPlayer, currentPlayer) {
    currentPlayer.sp -= 20;
    targetPlayer.pv -= 5;
    console.log("Has sido envenenado: " + targetPlayer.namePlayer)
    currentPlayer.poisonHits += 5
  };
 



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
};

var gandalf = new Player("gandalf");
var legolas = new Player("legolas");

console.log(gandalf);
console.log(legolas);


