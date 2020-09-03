let consume = [
    {
        "url": "https://www.youtube.com/watch?v=iZWp2VNfxfU&list=PL5vZEY2A9f_jEe0y_6MGmcsaMIa1gO3wU",
        "text": "Watch an ant colony grow"
    },
    {
        "url": "https://www.youtube.com/watch?v=Gtz18bDP0_w",
        "text": "Baking ASMR"
    },
    {
        "url": "https://www.youtube.com/watch?v=UjtOGPJ0URM&list=PLFs4vir_WsTzcfD7ZE8uO3yX-GCKUk9xZ",
        "text": "Learn interesting science bits"
    },
    "Sit still with eyes closed and listen to your surroundings for 5 minutes"
]
let code = [
    {
        "url": "https://flukeout.github.io",
        "text": "Go through the basics of CSS"
    }
]
let life = [
    "Find 2 things to put in trash bin"
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