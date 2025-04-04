const configUrl = 'https://api.themoviedb.org/3/configuration';
const configOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRiMTJhNWVkYzM5ZjZkYTcxNmQ0MWZmNmJkNzcyYyIsIm5iZiI6MTc0MzczMzQzMC41NjA5OTk5LCJzdWIiOiI2N2VmNDJiNmNiZDU1YjY2MWZkOTE1YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RZGbTYvkKcrFlzr6JwzeGC_OkZPWloJJYGQkKaNoFuU'
  }
};

fetch(configUrl, configOptions)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&with_original_language=en&without_genres=28%2C%2012%2C%2080%2C%2099%2C%2018%2C%2027%2C%209648%2C%2053%2C%2010752';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRiMTJhNWVkYzM5ZjZkYTcxNmQ0MWZmNmJkNzcyYyIsIm5iZiI6MTc0MzczMzQzMC41NjA5OTk5LCJzdWIiOiI2N2VmNDJiNmNiZDU1YjY2MWZkOTE1YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RZGbTYvkKcrFlzr6JwzeGC_OkZPWloJJYGQkKaNoFuU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

const config = async () => {

    const response = await fetch(configUrl);

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const configData = await response.json();

    configData

    return configData;

};

/*
const getTVPosters = async () => {

    const response = await fetch(url);

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const data = await response.json();

    data

    return data;

};
*/


function displayTVPosters() {
    getTVPosters()
    .then(data => {
        console.log('resolved: ', data);

        const movieList = document.getElementById('movielist');
        const movies = data.results;

        for (let i = 0; i < movies.length; i++) {
            
            const listItem = document.createElement('li');
            listItem.textContent = items[i].original_title;
            movieList.appendChild(listItem);
  
        }

        // document.getElementById('poster2').src =  "https://image.tmdb.org/t/p/original/" + data.results[i].poster_path;
    })
    .catch(err => console.log('rejected: ', err.message));
}