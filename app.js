let url = "https://v2.jokeapi.dev/joke/Any?safe-mode"

let setup = document.querySelector(".setBtn");
let delivery = document.querySelector(".delBtn");

let set = document.querySelector("#set");
let del = document.querySelector("#del");


setup.addEventListener("click",async()=>{
    
    del.innerHTML = [];
    let s = await getJokeSetup();

    set.innerHTML = s[0];
    
    delivery.addEventListener("click",()=>{
        del.innerHTML = s[1];
    })

    
})


async function getJokeSetup(){
    try{
        let joke = await axios.get(url);
        let jokeSetup = joke.data.setup;  
        let jokeDel = joke.data.delivery;  
        console.log(joke.data.setup);
        console.log(joke.data.delivery);
        return [jokeSetup, jokeDel];
    }catch(e){
        console.log("error - ",e);
    }
    
    
}


