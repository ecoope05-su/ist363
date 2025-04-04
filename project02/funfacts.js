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