// Task №1
// const containsOnlyDigits = (str) => {
//     const regExp = /^[0-9]+$/;
//     return regExp.test(str);
// }

// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false

// Task №2
// const printEverySecond = () => {
//     setInterval(() => {
//         console.log("Прошла секунда");
//     }, 1000);
// }

// printEverySecond();

// Task №3
// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(interval); 
//         }
//         i++;
//     }, 1000);
// }

// count();

// Task №4
// const colorBlock = document.getElementById('colorBlock');

// colorBlock.addEventListener('click', () => {
//     colorBlock.classList.toggle('bg-color');
// });

// Task №5
// const xhr = new XMLHttpRequest();
// const url = './data.json';

// xhr.open('GET', url, true);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const responseData = JSON.parse(xhr.responseText);
//         console.log(responseData);
//     }
// };

// xhr.send();

