//sync example

console.log("Starting the program"); // start program

function sleep(miliseconds){
    //we are creating a funvtion that will execute our time
    let startTime = new Date().getTime();
      console.log("program is running");

    while(new Date().getTime() < startTime + miliseconds){

      console.log("in progress");
    }
    console.log("program is done. ")
}

sleep(10) //calling the function

console.log("do something")