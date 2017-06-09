
// 1. Створити функцію, яка на вході отримує стрічку, перевіряє її довжину і якщо довжина більша за наперед задану дозволену,
 // то замінити область символів, які не влазять на "...", довжина стрічки при цьому має бути рівна дозволеному розміру.

var someText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quidem officia quam perspiciatis unde quo sequi, alias eaque neque id."
while(someText.length>=140){
  someText.pop();
};
console.log(someText);

// 2. Задано стрічку, яка містить тільки слова, вважається що символи пунктуації (коми, апострофи..) відсутні і довжина стрічки більша 0
//   var str = "не старайся бути кращим за інших старайся бути кращим за себе вчорашнього";
// на виході отримати вхідну стрічку, в якій кожне слово починається з великої букви.


var str = "не старайся бути кращим за інших старайся бути кращим за себе вчорашнього";
function titleCase(str) {
  return str.split(' ').map(function(val){
  return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
  }).join(' ');
};
console.log(titleCase(str));

// 3.Написати функцію, яка перевірятиме текст на вміст нецензурних слів, при цьому замінити символи кожного знайденого слова на "*".

function nomats(txt){
  return txt.split(' ').map(function(val){
    if (val == bad){
       val = "*";
  return val;
} else {
  return val
}
  }).join(' ');
};

console.log(nomats(txt));
