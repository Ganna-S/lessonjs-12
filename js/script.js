/* // const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

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

//условие

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

//урок 015

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }  
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// }  else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);


// let num = 20;

// function showFirstMessage (text) {
//     console.log(text);
//     let num = 10; //локальная переменнная
//     console.log(num);
// }
// // имя функции всегда начинается с глагола
// showFirstMessage("Hello world");
// console.log(num);


// // замыкание функций -работает со всеми внешними переменными которые доступны
// function showFirstMessage (text) {
//     console.log(text);
//     console.log(num); //идет выше и берет глобальную переменную
// }

// //Function declaretion  - ода существует еще до того как мы ею воспользуемся

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



// //function exprettion -нельзя использовать до того как она объявлена

// const logger = function() {
//     console.log("Hello")
// };

// logger();

// // стрелочная функция - сокращенно написание не имеет своего контекста

// // const calc = (a, b) => { return a + b };

// const calc = (a, b) => { 
//     console.log('1');
//     return a + b 
// };

// методы (вспомогательные функции) и свойства строк и чисел (вспомогательные значения)



// // const str = "test";
// // const arr = [1, 2, 4];

// // console.log(arr.length); //длинна строки или др типов данных

// const str = "teSt"; 

// // console.log(str[2] = 'd'); работать не будет - получим просто d

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);


// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit")); //поиск части строки

// const logg = "Hello world I am beautiful";

// // console.log(logg.slice(-5, -1));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// //работа с числами

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test)); */


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel ();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();