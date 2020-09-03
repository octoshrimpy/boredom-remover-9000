let consume = [
    {
        "url": "https://www.youtube.com/watch?v=iZWp2VNfxfU&list=PL5vZEY2A9f_jEe0y_6MGmcsaMIa1gO3wU",
        "text": "Watch an ant colony grow"
    },
    {
        "url": "https://www.youtube.com/watch?v=Gtz18bDP0_w",
        "text": "Baking ASMR by SEODAM"
    },
    {
        "url": "https://www.youtube.com/watch?v=UjtOGPJ0URM&list=PLFs4vir_WsTzcfD7ZE8uO3yX-GCKUk9xZ",
        "text": "Learn interesting science bits from Kurstgezagt"
    },
    "Sit still with eyes closed and listen to your surroundings for 5 minutes",
    {
        "url": "https://www.youtube.com/watch?v=jGwh-vvDwUw&list=PLoZ-LEVLUe6b8NamywcV2pai_pqVGn5zs",
        "text": "Watch paintings get restored by Baumgartner"
    },
    {
        "url": "https://xkcd.com",
        "text": "View latest comic from XKCD"
    },
    {
        "url": "https://asoftmurmur.com",
        "text": "Listen to soft background noises in asoftmurmur"
    },
    {
        "url": "https://www.theonion.com",
        "text": "Read funny fake articles from The Onion"
    },
    {
        "url": "https://www.supercook.com/#/recipes",
        "text": "Find recipes from stuff in your fridge with Supercook"
    },
    {
        "url": "https://www.amazon.com/gp/feature.html?ie=UTF8&docId=1001250201",
        "text": "Read funny Amazon reviews"
    }
]
let code = [
    {
        "url": "https://flukeout.github.io",
        "text": "Go through the basics of CSS with CssDiner"
    },
    {
        "url": "https://flexboxzombies.com/p/flexbox-zombies",
        "text": "Learn the basics for css flex with Flexbox Zombies"
    },
    {
        "url": "https://codepen.io/picks/pens",
        "text": "Browse through cool code snippets on Codepen"
    }
]
let life = [
    "Find 2 things to put in trash bin",
    "Go for a walk around the neighborhood",
    "Call a relative or friend",
    "Set electronics aside for 10 minutes",
    "Look for new growth in a nearby plant",
    "Drink a cup of water",
    "Clean out your car",
    "Match storage containers with their lids",
    "Surprise your significant other with something considerate",
    "Stretch for 5 minutes",
    "Visit a nearby museum",
    "Listen to music you haven't listened to in a while",
    "Learn how to fold a paper crane",
    "Learn how to write in shorthand",
    "Learn how to french braid hair",
    "Take out the trash",
    "Find a new recipe to try",
    "Volunteer hours at the nearest animal shelter",
    "Do a load of laundry",
    "Unsubscribe from automated emails in your inbox",
    "Update your résumé",
    "Take a bubble bath",
    "Use your fingers to paint along with Bob Ross",
    "Doodle an object nearby",
    "Take a power nap",
    "Write a letter for future self"
]

function getNewThing(){
    var pickFrom = []
    var insertMe;
    // if consume, add consume to list
    if(document.getElementById('do-watch').checked) {
        consume.forEach(thing => {
            pickFrom.push(thing)
        }); 
    } else {
        if(document.getElementById('life-code').checked) {     
            code.forEach(thing => {
                pickFrom.push(thing)
            });
        } else {
            life.forEach(thing => {
                pickFrom.push(thing)
            });
        }
    }



    var thing = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    if (thing.url) {
        insertMe = document.createElement('a')
        insertMe.href = thing.url
        insertMe.textContent = thing.text
    } else {
        insertMe = document.createTextNode(thing)
    }
    whattodo = document.getElementById('whattodo')
    while (whattodo.firstChild) {
        whattodo.removeChild(whattodo.firstChild);
    }
    whattodo.appendChild(insertMe)
}



function toggleDo() {
    document.getElementById('do-toggles').classList.toggle('hide')
}