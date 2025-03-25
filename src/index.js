function xters(){
    fetch ("https://anything-you-want-blond.vercel.app/characters")
    .then(response => response.json())
    .then(data =>

    )
    .catch(error => console.error(error));

    if(!response.ok){
        throw new Error("You clearly don't how to accessthe server data") 
    }
}

function displayCharacters(){
    let character_bar = document.getElementById('character-bar')
}
const myUrl = "https://anything-you-want-blond.vercel.app/characters"