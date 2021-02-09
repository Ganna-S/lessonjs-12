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

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// // start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }

// // rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// // detectPersonalLevel ();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// // function writeYourGenres() {
// //     for (let i = 1; i <= 3; i++) {
// //         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// //         personalMovieDB.genres[i - 1] = genre;
// //     }
// // }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();



// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!')
// }

// learnJS('JavaScript', done);

//колбек фунскция выполняется строко поле клика, позволяют нам выполнять определенный код строко после того как завершится предыдущий

// "use strict";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; //деструктуризация объектов 
// console.log(border);

// const {border, bg} = options.colors;
// console.log(border);
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

/* let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);
 */
//объекты - это структуры которые могут сохрянять в себе любые типы данных в формате ключ - значение.


// массивы - это структуры которые содержат элементы по порядку

/* "use strict";

const arr = [2, 12, 34, 11, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} */

// arr[99] = 0;
// console.log(arr.length); // свойство length состоит из последнего индекса + 1

// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

//псевдомасив - это объект структура которого совпадает со структурой массива,
// но у него нем вообще никаких методов - просто структура, которая хранит данные по порядку\

// передача данных по ссылке или по значению

// "use strict";

// // let a = 5,
// //     b = a;

// // b = b + 5;

// // console.log(b);
// // console.log(a);

// // const obj = {
// //     a: 5,
// //     b: 1
// // };

// // const copy = obj;  // передача значения идет по ссылке

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj [key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10; //поверхностная копия объекта

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'ascffdhyhj';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejornal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// //используем спред оператор (ES6)

// log(...num);

// // (ES6) спред оператор

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

//Объектно ориентированное програмирование (ООП) - один из его стилей
//Прототипно ориентированное програмирование т.е мы представляем любую вещь как объект

// "use strict";

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     seyHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier); //современная практика

// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier; //устаревшая практика,
// // сейчас не используют, подробнее в прикрепленной документации

// // Object.setPrototypeOf(jonh, soldier); //современная практика создания прототипа

// // console.log(jonh.armor);
// jonh.seyHello();


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('Done');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }

//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };


//консоль разработчика

// "use strict";

// function hello() {
//     console.log("Hello World");
//     debugger;
// }

// hello();

// function hi() {
//     console.log('Say hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);

// 
//типичные задачи собеседований

// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?

// •	Чему равно такое выражение: [ ] + false - null + true ?

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// •	Чему равна сумма [ ] + 1 + 2?

// •	Что выведет этот код: alert( "1"[0] )?

// •	Чему равно 2 && 1 && null && 0 && undefined ?

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// •	Что выведет этот код: alert( +"Infinity" ); ?

// •	Верно ли сравнение: "Ёжик" > "яблоко"?

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?

// 1) Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5; alert( x++ ); - будет 5 потому что ++ после x

// 2) Чему равно такое выражение: [ ] + false - null + true ?
// console.log(typeof([] + false)); - это строка, когды мы работаем с пустым массивом в таких операциях, то мы получаем строку

// console.log([] + false - null + true); - NaN

// 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1; 
// let x = y = 2; // - цепочка справа на лево, тк число- это примитивный тип данных, то он просто передается по значению
// alert(x);

// 4) Чему равна сумма [ ] + 1 + 2?
// console.log([] + 1 + 2); // строка "12"

// 5) Что выведет этот код: alert( "1"[0] )?
// alert( "1"[0] );

// 6)Чему равно 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined); // правило: оператор и (&&) всегда запинается на лжи, тут мы получим null (всегда дает false в логическом контексте те  оператор && запинается на лжи, дальше код не сработает) Аналогично и для оператора или (||) только он всегда запинается на праде

// 7)Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// console.log(!!( 1 && 2 ) === (1 && 2)); //два эти выражения не равны !! - превращают следующее выражение в булиновое

// 8) Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
//             // 3      3
// alert( null || 2 && 3 || 4 );  // в результате выведется 3, смотрим таблица приоритеов операторов

// 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; //Правда ли что a == b ? - нет это две разные переменные которые содержат свою инфу (два разные ящика но похожи с одинаковым количеством яблок например)
// console.log(a == b);

// 10)Что выведет этот код: alert( +"Infinity" ); ?

// alert( +"Infinity" ); //Infinity тип данных число, потому что стоит унарный плюс

//11 Верно ли сравнение: "Ёжик" > "яблоко"?

// console.log("Ёжик" > "яблоко"); //идет посимвольное значение (юникод) сравниваются буквы по алфавиту и верхний нижний регистр - необходимо открыть таблицу с символами юникод и посмотреть 

//12 Чему равно 0 || "" || 2 || undefined || true || falsе ?
// console.log(0 || "" || 2 || undefined || true || falsе); // или запинается на правлу -дальше код не пойдет, получаем 2
