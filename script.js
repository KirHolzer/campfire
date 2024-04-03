
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms.count = +prompt('Сколько фильмов Вы уже посмотрели', '');
        while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)){
            numberOfFilms.count = +prompt('Сколько фильмов Вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10){
            console.log("Просмотренно давольно мало фильмов");
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
         } else if (personalMovieDB.count >=30){
            console.log("Вы киноман");
         }
     },
     showMyBD: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB)
        }
     },
     writeYourGeneres: function(){
        for( let i = 1; i < 4; i++){
            const genreAnswer = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genreAnswer; 
        }
     }

}
