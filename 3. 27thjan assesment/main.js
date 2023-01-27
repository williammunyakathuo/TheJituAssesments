//question 1 

        
function foo1() {

    return {bar: "hello"};
    
    }
console.log(foo1());


    function foo2() {

        Return
        
        {bar: "hello"};

    }
    try{
        console.log(foo2());
    }catch(err){
        console.log(err.message);
    }
//The two functions will not have the same output.<br>
//This is because function foo1() is a valid function which will give an output of an object {bar: 'hello'};<br>
//Whereas function foo2() is a valid function with a syntax error which is misspelling a keyword Return instead of return<br>

// qeustion 2 checking if palindrome

function isPalindrome(str) {
    str = str.replace(/\s/g, "");
    return str === str.split('').reverse().join('');


}
console.log( isPalindrome("alula"));

//question3 Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers.

function sumNumbers() {
    let input = prompt("Enter numbers separated by commas:");
    let numbers = input.split(",");
    let sum = numbers.reduce(function(a, b) {
        return Number(a) + Number(b);
    }, 0);
    
    console.log("The sum of the numbers is: " + sum);
}

sumNumbers();


//question 4 

let body = document.getElementsByTagName("body");

try {
    function traverse(p_element,p_callback) {
       function p_callback(p_element)
        var list = p_element.children;
        for (var i = 0; i < list.length; i++) {
            traverse(list[i],p_callback);  
        }
     }
    
     console.log(traverse(body));
    
} catch (error) {
    console.log(error);
}

