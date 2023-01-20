//function that receives five numbers as input and finds the largest of five numbers

function getLargest(a, b, c, d, e) {
    let numbers = [a, b, c, d, e];
    
    console.log(numbers.sort((a, b) => a - b).pop());
  }
getLargest(1, 2, 3, 4, 5);


// function which iterates the integers from 1 to 100 and prints them out
function printNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.write(`FizzBuzz <br>`);
            continue
        }else if( i % 5 === 0){
            document.write(`Buzz <br>`);
            continue
        }else if(i % 3 === 0 ){
            document.write(`Fizz <br>`);
            continue
        }else{
            document.writeln(`${i} <br>`);
        }
        
    }
}
printNumbers();


//What will be the result of the following code

        try{
            let str = "1"; 
            str =+ !str; 

            console.log(typeof(str)); 
        }catch(error){
            console.log(error);
        }

    
    
    document.write(`The result of this code will be number as implicit conversion  will automatically occur<br>This because  =+ is an assinment opperator which assigns + !str to the variable str which value is changed due to ! operator. <br> So the variable str will change to be a number data type`);


    //The result of this code will be number as implicit conversion  will automatically occur
    //This because  =+ is an assinment opperator which assigns + !str to the variable str which value is changed due to ! operator.
    //So the variable str will change to be a number data type
    