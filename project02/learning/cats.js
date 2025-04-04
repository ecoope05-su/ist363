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