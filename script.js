const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

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

 if (personalMovieDB.count < 10){
    console.log("Просмотренно давольно мало фильмов");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
 } else if (personalMovieDB.count >=30){
    console.log("Вы киноман");
 }

console.log(personalMovieDB);