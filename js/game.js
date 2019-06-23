// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    
    levels: {

        start: {
            background_image:"freinds.jpg",
            message: "Your friends invite you to explore an abandonded buiding",
            choices: [
                {
                    text: "Go with them",
                    nextLevel: "building",
                },

                {
                    text: "Go home",
                    nextLevel: "home",
                },
            ]
        },

        building: {
            message: "You get to the building, it says 'WARNING DO NOT ENTER!'",
            choices: [
                {
                    text: "Ignore it and go inside",
                    nextLevel: "Inside_building",
                },
                
                {
                    text: "Listen to the sign and go home",
                    nextLevel: "home",
                }
            ]
        },

        home: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        Inside_building: {
            message: "You're now inside the bulding, you have two paths",
            choices: [
                {
                    text: "Go Left",
                    nextLevel: "Left",
                },
                
                {
                    text: "Go Right",
                    nextLevel: "Right",
                }
            ]
        },
        
    }
};
