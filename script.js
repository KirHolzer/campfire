const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastWatchedMovieAnswer1 = prompt("Один ис последних просмотренных фильмов", ''),
    yourRateAnswer1 = prompt('Насколько оцените его ?', ''),
    lastWatchedMovieAnswer2 = prompt("Один ис последних просмотренных фильмов", ''),
    yourRateAnswer2 = prompt('Насколько оцените его ?', '');

personalMovieDB.movies[lastWatchedMovieAnswer1] = yourRateAnswer1;
personalMovieDB.movies[lastWatchedMovieAnswer2] = yourRateAnswer2;

