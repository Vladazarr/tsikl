//Условия 105
/*
let test = 11;

if (test > 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

let test = 9;

if (test < 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

let test = 10;

if (test >= 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

let test = 11;

if (test <= 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

//106
let test = 10;

if (test == 10) {
	console.log('+++'); 
} else {
	console.log('---');
} 

//107
let test = 9;

if (test != 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

//108
let test1 = 1;
let test2 = 2;

if (test2 > test1) {
	console.log('+++'); 
} else {
	console.log('---');
}

let test1 = 2;
let test2 = 2;

if (test2 == test1) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

//109
let test1 = 'aaa';
let test2 = 'ara';

if (test2 == test1) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

//110
let test1 = '123';
let test2 = 123;

if (test2 == test1) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

//113
let num = 3;

if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 11;

if (num >= 10 && num <= 20) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 2;
let num2 = 3;

if (num1 <= 1 && num2 >= 3) {
	console.log('+++');
} else {
	console.log('---');
}

//115
let num = 3;

if (num == 0 || num > 1 && num < 5 ) {
	console.log('+++');
} else {
	console.log('---');
}

//117
let num1 = -1;
let num2 = 10;
		
if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

//118
let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}

 
let test = true;

if (test === false) {
	console.log('+++');
} else {
	console.log('---');
}

//121
let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}

//123
let test1 = true;
let test2 = true;

if (test1  && test2) {
	console.log('+++');
} else {
	console.log('---');
}
*/
//124
// let test = 10;

// if (test == 10) {
// 	console.log('+++');
// }
//125
// if (test > 0) console.log('+++'); else console.log('---');
//127
// let day = 23;

// if (day >= 1 && day<=10 ) {
// 	console.log('1 декада');
// } else if (day >= 11 && day<=21 ) {
// 	console.log('2 декада');
// } else if (day >= 22 && day<=31 ) {
// 	console.log('3 декада');
// }
//129
// let lang = 'ru';

// switch (lang) {
// 	case 'ru':
// 		console.log('рус');
// 	break;
// 	case 'en':
// 		console.log('англ');
// 	break;
// 	case 'de':
// 		console.log('нем');
// 	break;
// 	default:
// 		console.log('язык не поддерживается');
// 	break;
// }
//132
// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);
//133
// let ok = confirm('Тебе есть 18?');

// if (ok) {
// 	alert('Тебе какие сигареты?');
// } else {
// 	alert('Доступ запрещен');
// }
//134
// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);
//135
// let age = 17;
// let adult;

// if (age >= 18) {
// 	 adult = true;
// } else {
// 	 adult = false;
// }

// console.log(age);
//137
// let arr = [1, 2, 3,4]; // Ваш массив

// if (arr.length == 3) {
//     let sum = arr[0] + arr[1] + arr[2];
//     console.log(sum);
// } else {
//     console.log("Массив не содержит 3 элемента");
// }
//138
// let str = 'acr';
// if (str[0] == 'a') {
// 	console.log('!');
// }

// let str = 'asdx';
// let last = str[str.length - 1];
// if (last == 'x') {
// 	console.log('!');
// }
// let str = 'asfsg';

// if (str[0] == 'a') {
// 	console.log('!');
// }
// if (str[0] == 'b') {
// 	console.log('!');
// }

// else{
//     console.log('eee')
// }
//141
// let num = 123;

// if (String(num)[0] === '1') {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
//Циклы
//144
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
// 	console.log(elem);
// }
//145
// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
// 	console.log(key); 
// }

// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
// 	console.log(obj[key]); // выведет 1, 2, 3
// }
//146
// let i = 1;
// while (i <= 100) {
// 	console.log(i);
// 	i++;
// }

// let i = 11;
// while (i <= 33) {
// 	console.log(i);
// 	i++;
// }

// let num = 3;

// while (num <= 1000) {
// 	num = num * 3;
// }

// console.log(num);

//147
// for (let i = 1; i <= 100; i++) {
// 	console.log(i); 
// }

// for (let i = 11; i <= 33; i++) {
// 	console.log(i); // выведет 1, 2... 9
// }

// for (let i = 0; i <= 100; i+=2) {
// 	console.log(i); // выведет 1, 2... 9
// }

// for (let i = 1; i <= 99; i+=2) {
// 	console.log(i); // выведет 1, 2... 9
// }

// for (let i = 100; i > 0; i--) {
// 	console.log(i); // выведет 1, 2... 9
// }

//148
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i <= arr.length - 1; i++) {
// 	console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 1; i < arr.length -1; i++) {
// 	console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length - 1; i >= 0; i--) {
// 	console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
		
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

//149
// let arr = [2, 5, 9, 15, 1, 4];
// for (let elem of arr) {
// 	if (elem > 3 && elem < 10) {
// 		console.log(elem);
// 	}
// }
// let obj = {a: 1, b: 2, c: 3, d: 
// 	4, e: 5}; 
  
//   for (let key in obj) {
//     if (obj[key] % 2 !== 0) {
//       console.log(key + ': ' + obj[key]);
//     }
//   }
  
//150
// let res = 0;

// for (let i = 2; i <= 100; i++) {
//   if (i % 2 === 0) {
//     res += i;
//   }
// }
// console.log(res);

// let sum = 0;
// for (let i = 1; i <= 99; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);



// let res = 1;

// for (let i = 1; i <= 20; i++) {
//   res *= i;
// }

// console.log(res);

//151
//let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
// 	res += elem;
// }
// console.log(res);


///let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
// for (let elem of arr) {
// 	res *= elem;
// }
// console.log(res);

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 0;
// for (let elem of arr) {
//     if(elem % 2==0)
// 	res += elem;
// }
// console.log(res);

//152
// let str = '';
// for (let i = 0; i < 5; i++) {
// 	str += '-';
// }
// console.log(str)

// let str = '';
// for (let i = 1; i <= 9; i++) {
// 	str += i;
// }
// console.log(str)

// let str = '';
// for (let i = 9; i >= 1; i--) {
// 	str += i;
// }
// console.log(str)

//153

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i)[0];
//     console.log(str);
// }

// for (let i = 10; i <= 1000; i++) {
//     let pervoechislo = parseInt(String(i)[0]);
//     let vtoroechislo = parseInt(String(i)[1]);
//     let sum = pervoechislo + vtoroechislo;
//     console.log(sum);
// }

// for (let i = 1; i <= 100; i++) {
// 	let str = String(i); // преобразуем число в строку
// 	if (str[0] === '1' ) {
// 		console.log(i);
// 	}
// }

// for (let i = 10; i <= 1000; i++) {
//     let tsifra1 = parseInt(String(i)[0]);
//     let tsifra2 = parseInt(String(i)[1]);
//     let sum = tsifra1 + tsifra2;
//     if (sum === 5) {
//         console.log(i);
//     }
// }

//154
// let  arr = [1, 2, 0, 3, 4, 5];
// for (let elem of arr) {
// 	if (elem == 0) {
// 		console.log('есть');
// 		break; // выйдем из цикла
// 	}
// }


// let numbers = [1, 2, 3, 4, 5, 3];
// let position = -1;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 3) {
//         position = i;
//         break;
//     }
// }
// console.log(position);  

// let sum = 0;
// let i = 0;
// while (true) {
//     i++;
//     sum += i;
//     if (sum > 100) {
//         break;
//     }
// }
// console.log(i);
  

//156

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		document.write(i);
// 	}
// }

//159
// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push('x');
// }
// console.log(arr);

//160
// let keys = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let values = [1, 2, 3, 4, 5, 6, 7]
// let obj = {};

// for (let i = 0; i <= 6; i++) {
// 	let key = keys[i];
// 	let value = values[i];	
// 	obj[key] = value;
// }
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let i = {};
// for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//         i[key] = obj[key];
//     }
// }
// console.log(i); 
  
//162
// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
// 	obj[key] = obj[key] ** 2;
// }
// console.log(obj);

//163
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false; 

// for (let elem of arr) {
// 	if (elem == 'c') {
// 		flag = true; 
// 		console.log('+++')
// 		break; 
// 	}
// 	else if (elem != 'c'){
// 		console.log('---')
// 	}
// }

//164
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let test = String(arr[i])[0];
//     if (test === '1' || test === '2') {
//         sum += arr[i];
//     }
// }
// console.log(sum); // 660

//165
// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
//     let firstDigit = String(obj[elem])[0];
//     if (firstDigit === '1' || firstDigit === '2') {
//         sum += obj[elem];
//     }
// }
// console.log(sum); // 60



