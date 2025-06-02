$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 650, 200, 20)
    createPlatform(200, 550, 200, 20)
    createPlatform(600, 450, 100, 20)
    createPlatform(300, 350, 100, 20)
    createPlatform(700, 300, 100, 20)
    createPlatform(550, 250, 100, 20)
    createPlatform(1000, 250, 100, 20)




    // TODO 3 - Create Collectables
    createCollectable("mudkip", 300, 500, 1);
    createCollectable("slaking", 650, 400, 1);
    createCollectable("altaria", 350, 250, 1);
    createCollectable("gardevoir", 750, 250, 1);
    createCollectable("breloom", 600, 200, 1);
    createCollectable("stevenstone", 1050, 200, 1);




    
    // TODO 4 - Create Cannons
    createCannon("left", 500, 1300)
    createCannon("right", 500, 1300)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
