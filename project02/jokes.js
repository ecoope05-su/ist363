//jokes

const getJoke = async () => {

    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const data = await response.json();

    return data;

};

refreshJoke();

document.getElementById('reveal').addEventListener('click', revealPunchline);

document.getElementById('newjoke').addEventListener('click', refreshJoke);

function revealPunchline() {
            document.getElementById('jokepunchline').style.display = 'block';
            document.getElementById('reveal').style.display = 'none';

}

function refreshJoke() {
    getJoke()
    .then(data => {
        console.log('resolved: ', data)
        document.getElementById('reveal').style.display = 'block';
        document.getElementById('jokesetup').innerHTML =  data.setup;
        document.getElementById('jokepunchline').innerHTML =  data.delivery;
        document.getElementById('jokepunchline').style.display = 'none';
    })
    .catch(err => console.log('rejected: ', err.message));
}

//cats

const getCat = async () => {

    const response = await fetch('https://cataas.com/cat?json=true');

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const catData = await response.json();

    return catData;

};

refreshCats();

document.getElementById('refreshcats').addEventListener('click', refreshCats);

function refreshCats(){
    loadCat('cat1');
    loadCat('cat2');
    loadCat('cat3');
    loadCat('cat4');
    loadCat('cat5');
    loadCat('cat6');

};

function loadCat(id) {
    getCat()
    .then(catData => {
        console.log('resolved: ', catData)
        document.getElementById(id).src = catData.url;
        
    })
    .catch(err => console.log('rejected: ', err.message));
};

//fun facts

const getFacts = async () => {

    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const factData = await response.json();

    return factData;

};

loadFact();

document.getElementById('newfact').addEventListener('click', loadFact);

function loadFact() {
    getFacts()
    .then(factData => {
        console.log('resolved: ', factData)
        document.getElementById('funfact').innerHTML = factData.text;
    })
    .catch(err => console.log('rejected: ', err.message));
}