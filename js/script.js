// const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

"use strict";

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100 ) {
//     console.log('Too Mauch');
// } else {
//     console.log('Ok!');
// }

// //тернарный оператор - в его работе участвуют 3 аргумента

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = '50';

switch (num) {
    case '49':
        console.log('Error');
        break;
    case '100':
        console.log('Error');
        break;
    case '50':
        console.log('Ok');
        break;
    default:
        console.log('Not this time');
        break;
}