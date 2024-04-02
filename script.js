let numberOfFilms;

start();
rememberMyFilms();
detectPersonalLevel();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

showMyBD(personalMovieDB.privat);
writeYourGeneres();


function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');
    }
};

function rememberMyFilms() {
    for (let i =0; i < 2 ; i++){
        const lastWatchedMovieAnswer = prompt("Один ис последних просмотренных фильмов", ''),
            yourRateAnswer = prompt('Насколько оцените его ?', '');
    
        
        if (lastWatchedMovieAnswer != null && yourRateAnswer != null
             && lastWatchedMovieAnswer != '' && yourRateAnswer != '' 
             && lastWatchedMovieAnswer.length <= 50){
                personalMovieDB.movies[lastWatchedMovieAnswer] = yourRateAnswer;
                console.log('done');
             } else {
                console.log('error');
                i--
             }
     }   
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотренно давольно мало фильмов");
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
     } else if (personalMovieDB.count >=30){
        console.log("Вы киноман");
     }
 };

 function showMyBD(hidden) {
    if(!hidden){
        console.log(personalMovieDB)
    }
 };

 function writeYourGeneres(){
    for( let i = 1; i < 4; i++){
        const genreAnswer = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genreAnswer; 
    }
 }

console.log(personalMovieDB);