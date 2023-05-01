function getTwonumbersAndAdd(number1,number2,onSuccess,onFailure){
   if (typeof number1 === "number" && typeof number2 === "number"){
    onSuccess(number1, number2);
   } else {
    onFailure();
   }
}

function addTwonumbers(num1, num2){
    console.log(num1 + num2);
}

function onFail(){
    console.log("Worng data type")
    console.log("press numbers only")
}
getTwonumbersAndAdd(4,4,addTwonumbers,onFail);