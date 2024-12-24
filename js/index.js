'use strict';

const userStr = prompt("введіть рядок");
let userChar = prompt("введіть символ(и), для видалення із рядка");

if (!userStr?.trim() || !userChar?.trim()) {
    alert("помилка: введіть рядок та мінімум один символ");
}
else {
    userChar = userChar.split("").map(char => char.trim());
    const userResult = getStrCharRemove(userStr, userChar);

    alert(userResult);
}

function getStrCharRemove(dataStr, arrCharRemove) {
    
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