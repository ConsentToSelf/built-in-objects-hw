// ! Задание 1
let str = "js";
str = str.toUpperCase();
console.log(str);

// ! Задание 2
function getNewArray(arr, string) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith(string.toLowerCase())) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(getNewArray(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(getNewArray(["яблоко", "груша", "гриб", "огурец"], "гру")); // ['груша']
console.log(getNewArray(["Дом", "Банк", "Больница", "Театр"], "Кино")); // []

// ! Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// ! Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// ! Задание 5
function getRandomNumFirst() {
  return Math.round(Math.random() * 11);
}
console.log(getRandomNumFirst());

// ! Задание 6
function getRandomNum(a) {
  let newArr = [];
  let sum = 0;
  sum = Math.floor(a / 2);
  for (let i = 1; i < sum; i++) {
    a = Math.round(Math.random() * sum);
    // console.log(newArr);
    newArr.push(a);
  }
  newArr.push(a);
  console.log(newArr);
  return newArr;
}
getRandomNum(24);

// ! Задание 7
function getRandomNumOnTwoArguments(a, b) {
  return Math.round(Math.random() * (a - b) + b);
}
console.log(getRandomNumOnTwoArguments(4, 9));

// ! Задание 8
let getMyDate = new Date();

console.log(getMyDate);

// ! Задание 9
let currentDate = new Date();
let afterDate = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + afterDate;
let afterDate73 = new Date(searchDate);
console.log(afterDate73);

// ! Задание 10
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
function getFullMyDate(date) {
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let getDateFunc = `Дата: ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} - это ${days[date.getDay()]}
Время: ${hours}: ${minute}: ${seconds}
  `;
  return getDateFunc;
}
console.log(getFullMyDate(new Date()));
