//---3---
 
let x = 1;//--обьявил две переменных
let y = 2;

console.log(x, y);//--вывел не экран
x = y; //--скапировал одну переменную в другую
console.log(x);//--вывел на экран

//---4---
let q
const allTips = {
    res1: 'Vova',
    res2: 13,
    res3: true,
    res4: q,
    res5:null
}    
console.log(allTips)
console.log(typeof allTips) // Вот тут не выводит но если навести то показывает все нужные значения

//---5---
const confirm = (a) =>{
    if (a >= 18) {
        return 'Ты в теме'
    }
    if (a < 18) {
        return 'Ты не в теме'
    }
}
confirm(19)
isAdult = confirm
console.log(isAdult)