var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
     function createAnnoyingDog(x, y, damage, image){
        var hitZoneSize = 65;
        var damageFromObstacle = 10;
        var annoyingDogHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

        annoyingDogHitZone.x = 1500;
        annoyingDogHitZone.y = 425;
        game.addGameItem(annoyingDogHitZone);


        var obstacleImage = draw.bitmap("img/annoyingdog.png");
        annoyingDogHitZone.addChild(obstacleImage);

        obstacleImage.x = -85;
        obstacleImage.y = -100;

        obstacleImage.scaleX = .75
        obstacleImage.scaleY = .75
     }
     
     createAnnoyingDog();

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches current levek
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelData.length; i++){
        
      } 
      
      if (element.type === "annoyingdog"){
        createAnnoyingDog(element.x, element.y, element.damage)
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
