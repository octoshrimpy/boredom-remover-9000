let consume, code, life

/**
 * Helper function to fetch JSON.
 * @param {string} path path/url to JSON resource
 * @returns JSON
 */
const fetchJson = async (path) => {
    const response = await fetch(path)
    const data = await response.json()

    return data;
}

// Fetch from JSON
fetchJson('./db/consume.json').then(data => consume = data.consume)
fetchJson('./db/code.json').then(data => code = data.code)
fetchJson('./db/life.json').then(data => life = data.life)


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