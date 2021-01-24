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

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Error');
//         break;
//     case '100':
//         console.log('Error');
//         break;
//     case '50':
//         console.log('Ok');
//         break;
//     default:
//         console.log('Not this time');
//         break;
// }

// "use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

//i < 0 - ,бескончный цикл

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break; - прерывает цикл
//         continue; - исключает значение из цикла, т.е прерывает шаг
//     }
//     console.log(i);
// }