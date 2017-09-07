//Exercises for Eloquent

//Chapter 1 Looping a triangle

function triangleNew(baseLength) {
    var i;
    var base = "";
    
    for (i = 0; i < baseLength; i++) {
        
        base += "#"
        console.log(base);
        
    }
    
}
triangleNew(7); // works ok but too complicated


//proper solution from book
var line = "";
for (line = "#"; line.length < 8; line+="#") {
    console.log(line);
}

//FizzBuzz

var i;
for (i = 1; i <= 100; i++)

    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else console.log(i);


var num = 1;
while (num < 100) {
    num++;
        
    if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else
    console.log(num);
}

var n;
for (n = 1; n <= 100; n++) {
    var output = "";
    
    if (n % 3 == 0 && n % 5 == 0) {
        output +="FizzBuzz"
    }
    else if (n % 3 == 0) {
        output +="Fizz";
    } else if (n % 5 == 0) {
        output +="Buzz";
    } 
    
    console.log(output || n);
}

    
//Book solution

var n;
for (n = 1; n < 100; n++) {
    var output = "";
    
    if (n % 3 == 0) {
        output +="Fizz";
    } else if (n % 5 == 0) {
        output +="Buzz";
    }
    
    console.log(output || n);
}

// Chess Board

function chessBoard(size) {
    var j;
    var string = "";
    var height = size;
    var width = size;
    
    for (j = 0; j <= size * size; j++) {
        
        if (j % 2 == 0) {
            string +=" "
        } else if (j == size) {
            string +="\n"
            console.log("joo");
        } else {
            string +="#"
        }

    }

    console.log(string);
}

chessBoard();

//uusi yritys

function chess(size) {
    var x;
    var y;
    var board ="";
    
    for (y = 0; y < size; y++) {
        for (x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board +=" "; 
            } else {
                    board +="#";
                }
        } board +="\n";
    } 
    console.log(board);
}

//Chapter 3

//Minimum

function min(num1, num2) {
    var result = Math.min(num1, num2);
    return result;
}
console.log(min(22, 11));

//toinen yritys lunttaamisen jälkeen
function min(num1, num2) {
    var result;
    
    if (num1 < num2)
      result = num1;
    else 
    result = num2;
    
    return result;
}

// Ymmärsin väärin :D kirjaratkaisu 
// function min(a, b) {
//   if (a < b)
//     return a;
//   else
//     return b;
// }


//recursion

// function isEven(num) {
//     function check(current, history) {
//      if (current == 0)
//       return true;
//      else if (current == 1)
//       return false;
//      else {
//          for (i = 0; )
//      }
//     }
    
    
// }

function isEven(num) { //toimii fuck yeah
    var even;
    function count(num) {
        if (num == 0) {
          even = true;
          return even;
        }
        else if (num == 1) {
          even = false;
          return even;
        } else if (num < 0) {
          even = "Number must be positive";
          return even;
        }else {
            return count(num - 2)
        }
    }
    return count(num);
}

//kirjan vastaus:
function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
}

//Bean counting
function countBs(string) {
    var bs = 0;
    for (i = 0; i < string.length; i++) {
        var curChar = string.charAt(i);
        
        if (curChar === "B") {
            bs += 1;
        }
    }
    
    return bs;
}

function countChar(string, char) {
    var charCount = 0;
    
    for (i = 0; i < string.length; i++) {
        var curChar = string.charAt(i);
        
        if (curChar === char) {
            charCount += 1;
        }
    }
    
    return charCount;
}

function newCountBs(string) {
    return countChar(string, "B");
}

//Objects and Arrays

// The sum of a range

function range(start, end, step) {
    if (step == null) step = 1;
    
    var rangeArr = [];
    var count;
    
    
    if (step > 0) {
        for (count = start; count <= end; count += step) {
            rangeArr.push(count)
        }
    } else {
        for (count = start; count >= end; count += step) {
            rangeArr.push(count)
        }
    }
    return rangeArr;
}


function sum(array) {
    var i;
    var total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
    
}

//Reversing an array

function reverseArray(array) {
    var newArray = [];
    
    for (i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

//Reverse array in place - should be done by swapping 1st with last, 2nd with 2nd to last etc..

    //var temp = array[i]; tarviiko kaksi looppia? eka määrittää ekan kirjaimen, toinen looppi siirtää sen arrayn loppuun tj.???
    //eli ensin tyyliin var temp = array[i], sit popilla pois, sit arrayn loppuun se pushilla, array uudestaan ei vittu
    //loop half of the array (???) for (i = 0; i < Math.floor(array.length / 2); i++)
    // eli pitääks loopata puolet ja puolet? for i = (array.length - 1; i > 0; i--) --- tää ei vois toimia tas mut tää on se backwards looppi
    //Puolikas looppi ja sit vaihto "i" positionin kans vs array.length - 1 - i. Voi käyttää paikallista muuttujaa et säilöö arvon väl. aik.
    


var arrayValue = [1,2,3,4,5];
function reverseArrayInPlace(array) {
    var temp = [];
    var count;

    for (i = 0; i <= Math.floor(array.length / 2); i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//A List


var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};




//ArrayToList

function arrayToList(array) {
    var list = {};
    
    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            list = {
                value: array[i],
                rest: null
            };
        } else {
            list = {
                value: array[i],
                rest: list
            };
        }
    }
    return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}