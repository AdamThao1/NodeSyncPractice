console.log("starting");

function sleep(milliseconds){

    console.log("program is running")
    setTimeout(()=>{
        console.log("program is done")
    }, milliseconds);
}

sleep(1000)
console.log("do somhing")