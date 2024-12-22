'use strict';


function getStrCharRemove(dataStr, arrCharRemove) {

    if (typeof dataStr !== "string" || !dataStr.trim()) {
        return "Пустий рядок, впишіть довільний рядок в лапках";
    }
    else if (!Array.isArray(arrCharRemove) || arrCharRemove.length === 0) {
        return "Потрібен хоча б один символ для видалення з рядка, задайте символи в масиві";
    }
    else {
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
    
}

console.log(getStrCharRemove("hello world", ["l", "d"]));


