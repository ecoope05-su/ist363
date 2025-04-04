// async & await

const getTodos = async () => {

    const response = await fetch('todos/luigi.json');

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const data = await response.json();

    return data;

};

console.log(1);
console.log(2);

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err.message));

console.log(3);
console.log(4);

//fetch api

/* 
fetch('todos/luigi.json').then((response) => {
    if(response.status === 200) {
        console.log('resolved', response);
        return response.json();
    } else {
        console.log('status issue', response);
    }
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});
*/