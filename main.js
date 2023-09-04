"use strict";
function str_num(num) {
  let str = String(num);
  console.log(str[0]);
}
//1- str_num(432)

function arr_count(arr) {
  let pos = 0,
    neg = 0,
    eve = 0,
    odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    }
    if (arr[i] < 0) {
      neg++;
    }
    if (arr[i] % 2 == 0 || (arr[i] * -1) % 2 == 0 || arr[i] == 0) {
      eve++;
    }
    if (arr[i] % 2 == 1 || arr[i] % 2 == -1) {
      odd++;
    }
  }
  console.log(`postive: ${pos}`);
  console.log(`negative: ${neg}`);
  console.log(`even: ${eve}`);
  console.log(`odd: ${odd}`);
}
//2- arr_count([0, 2, 4,-1, 6]);

function return_arr(arr) {
  let numberArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i])) {
      numberArr.push(arr[i]);
    }
  }
  console.log(numberArr);
}
//3- return_arr( ['Ahmed', 12, 'Mohamed', 34, 'Mahmoud', 12, 54] )

function slice1(num1 = 0, num2) {
  let arr = ["ant", "bison", "camel", "duck", "elephant"];
  console.log(arr.slice(1, -1));
  if (num2 == undefined) num2 = arr.length;

  let newarray = [];

  if (num2 > 0) {
    for (let i = num1; i < num2; i++) {
      let ele = arr[i];
      newarray.push(arr[i]);
    }
  } else {
    for (let i = num1; i < arr.length - 1; i++) {
      let ele = arr[i];
      newarray.push(arr[i]);
    }
  }

  return newarray;
}
//4- console.log(slice1(1,-1));

function fif(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let arr1 = [];
    for (let j = 0; j < arr[i].length; j++) {
      arr1.push(arr[i][j]);
      //console.log();
    }
    newArray.push(Math.max(...arr1));
  }
  console.log(newArray);
}

/*5- fif([
    [1, 2, 3, 4],
    [45, 73, 12],
    [13, 13, 10],
  ])*/

//use ARRAY.from("str")
function strAbbrev(str) {
  let arr = Array.from(str);

  if (arr.length < 10) {
    return arr.join("");
  } else {
    let newStr = `${arr[0]}${arr.length - 2}${arr[arr.length - 1]}`;
    return newStr;
  }
}

//6- console.log(strAbbrev("pneumonoultramicroscopicsilicovolcanoconiosis"));

// use sort(), ARRAY.from("str")
function check_iteration(str) {
  let arr = Array.from(str);
  let sorted_arr = arr.sort();
  let flag = 0;
  sorted_arr[0] == sorted_arr[1] && sorted_arr[2] == sorted_arr[3]
    ? (flag = "true")
    : (flag = "false");
  return flag;
}

//7- console.log(check_iteration("STTO"));

function xo(arr) {
  let win = "";
  let winVar = "";

  for (let i = 0; i < 2; i++) {
    i == 0 ? (winVar = "x") : (winVar = "o");

    if (
      (arr[0] == winVar && arr[1] == winVar && arr[2] == winVar) ||
      (arr[3] == winVar && arr[4] == winVar && arr[5] == winVar) ||
      (arr[6] == winVar && arr[7] == winVar && arr[8] == winVar) ||
      (arr[0] == winVar && arr[3] == winVar && arr[6] == winVar) ||
      (arr[1] == winVar && arr[4] == winVar && arr[7] == winVar) ||
      (arr[2] == winVar && arr[5] == winVar && arr[8] == winVar) ||
      (arr[0] == winVar && arr[4] == winVar && arr[8] == winVar) ||
      (arr[2] == winVar && arr[4] == winVar && arr[6] == winVar)
    )
      win = winVar;
  }

  return win;
}

//8- console.log(xo(["x", "x", "o", "o", "o", "x", "o", "x", "o"]));
function first_last_index(arr, ch) {
  let f_char = arr.indexOf(ch),
    l_char = arr.lastIndexOf(ch);
  arr = [];
  arr.push(f_char);
  arr.push(l_char);

  return arr;
}

//9- console.log( first_last_index(['c', 'i', 'r', 'c', 'u', 'm', 'l', 'o', 'c', 'u', 't', 'i', 'o', 'n', 'n'],'c') );
function sum_num_in_arr(arr, num) {
  let flag;
  for (let i = 0; i < arr.length; i++) {
    let arr1 = [];
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      arr1.push(arr[j]);

      if (sum == num) {
        flag = true;
        console.log(arr1, sum);
      }
    }
  }
  flag == undefined ? (flag = false) : (flag = true);

  return flag;
}

//10- console.log(sum_num_in_arr([1, 2, 3, 4, 5], 9));

function reverse_str(str) {
  let rev_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
  }

  return rev_str;
}

//1- console.log(reverse_str("abdo"));

function string_compare(str1, str2) {
  if (str1.toLowerCase() == str2.toLowerCase()) return true;
  else return false;
}
//2- console.log(string_compare("Eraaa", "eraa"));

function check_upper(str) {
  let sum = 0;
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) sum++;
  }
  sum == str.length ? (flag = true) : (flag = false);
  return flag;
}
//3- console.log(check_upper("ASDA0"));

function slice_str(str, num1, num2) {
  //return str.substring(num1,num2+1)
  return str.slice(num1, num2 + 1);
}
//4- console.log(slice_str("moamen", 1, 4));

function fullName(str1, str2, str3) {
  return `${str1} ${str2} ${str3}`;
}
//5- console.log(fullName("abdelrahman", "adel", "mohamed"));

function reverse_str_check(str) {
  let flag = true;
  reverse_str(str) == str ? (flag = true) : (flag = false);
  return flag;
}
//6- console.log(reverse_str_check("abbba"));

function trim_str(str) {
  return str.trim();
}
//7- console.log(trim_str(" abdo "));

function url(str) {
  let arr = str.split(".");

  return arr[0] == "ww" && arr[arr.length - 1] == "eraa" ? true : false;
}

//8- console.log(url("ww.moamen.eraa"));

function repl_o(str) {
  return str.replaceAll(/o/gi, "");
}

//9- console.log(repl_o("oMOamen"));
function checkStr(str1, str2, str3) {
  let str = str1.toLowerCase();

  return (str1.toLowerCase().indexOf(str2.toLowerCase()) > 0 &&
    str.toLowerCase().indexOf(str3.toLowerCase())) > 0
    ? true
    : false;
}

//10- console.log(checkStr("SoWhatYesOhh", "What", "ah"));
