(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};

    let platform = window.opspark.platform;

    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */
    function init(game) {
        let createPlatform = platform.create;

        // 900px wide, 700px height, // 
         
         
        // GRID

      // for (let i = 100; i < 900; i += 100) {
        //createPlatform(i, 0, 0.01, 100);
       // }

       //for (let i = 100; i < 700; i += 100) {
       //createPlatform(0, i, 10, 0.1);
       // }



    
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        // createPlatform(400, 250);
        // createPlatform(170, 460, 0.5);
        createPlatform(400,550, 0.65, 0.2);
        createPlatform(300,330, 0.3, 0.2);
        createPlatform(500,300, 0.75, 0.2);
        createPlatform(50, 400, 0.38, 0.2);
        createPlatform(200,500, 0.3, 0.2);
        createPlatform(0, 100,  1.7, 0.5);
        createPlatform(650,100, 0.07,2.5);
        createPlatform(800,200, 0.3, 0.2);
        createPlatform(800,300, 0.02,  8);
        createPlatform(0,  250, 0.5, 0.5);
        createPlatform(530,200, 0.05,3.2);
        createPlatform(680,430, 0.30,0.2);
        createPlatform(500,300, 0.02, 8);
        createPlatform(200,400, 0.02, 3.2);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);