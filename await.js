// authentiction program

const userLogin = () => {
    console.log("enter Username and Password");
    let username = prompt("Enter username: ");
    let Password = prompt("Enter password: ");

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Performing User Authentication");
            if(username === "Adam" && Password === "Adam"){
                resolve("User authenticated!");
            } else {
                reject("Authenticated failed")
            }

        }, 1000);
    });
}

function goToHomePage (userAuthStatus){
    return Promise.resolve(`Go to homepage as : ${userAuthStatus}`);
}

//sync
// userLogin()
// .then((response)=>{ //first function
//     console.log("validated User");
//     return goToHomePage(response);
// })
// .then((userAuthStatus)=>{ //second function
//     console.log(userAuthStatus);
// })
// .catch((err)=>{
//     console.log(err);
// });


//Async (better way for userLogin Auth)
async function performTask(){
    const response = await userLogin();
    console.log("validated user");
    const userAuthStatus = await goToHomePage(response);
    console.log(userAuthStatus);
}
performTask()


