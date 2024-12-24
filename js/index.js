'use strict';

const userStr = prompt("введіть рядок");
const userChar = prompt("введіть символ(и), для видалення із рядка");

if (!userStr?.trim() || !userChar?.trim()) {
    alert("помилка: введіть рядок та мінімум один символ");
}
else {
    const userResult = getStrCharRemove(userStr, userChar);
    alert(userResult);
}

function getStrCharRemove(dataStr, charRemove) {
    const arrCharRemove = [];

    for(let j = 0; j < charRemove.length; j++) {  
        arrCharRemove.push(charRemove[j].trim()); // видаляє можливий пробіл із символів ("l, d"), щоб результуючий рядок був вигляду: ("heo wor", а не "heowor")
    }

    let result = dataStr.split("");
    let i = 0;

    while(i < result.length) {
        if(arrCharRemove.includes(result[i])) {
            result.splice(i, 1);
        }
        else {
            i++;
        }
    }  
    
    return result.join("");
}
