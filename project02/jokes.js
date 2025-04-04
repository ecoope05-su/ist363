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