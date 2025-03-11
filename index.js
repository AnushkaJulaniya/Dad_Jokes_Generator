const API_key = "enagEDNecWaokUt5puY6Ag==90rSvwQgoRgZ2arN";
const url = "https://api.api-ninjas.com/v1/dadjokes";
const btn = document.querySelector(".btn");
const para = document.querySelector(".para")


btn.addEventListener("click", showUpdating);
btn.addEventListener("click", showLoading);
btn.addEventListener("click", fetchJokes);
//step 1
async function fetchJokes() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 'X-Api-Key': API_key }
        });
        const data = await response.json();

        displayJoke(data[0].joke);
    }
    catch (error) {
        para.innerText = "Updating...";
        setTimeout(() =>{
            para.innerText = "An error happened, try again later";
        } , 1500);
    }
}

//step 2
function displayJoke(joke) {

    para.innerText = joke;

}
//step 3
function showUpdating() {
    para.innerText = "Updating...";
    setTimeout(() => {
        para.value = displayJoke;
    }, 1500);
}
// step 4
function showLoading() {
    btn.innerText = "LOADING...";

    setTimeout(() => {
        btn.innerText = "TELL ME A JOKE";
    }, 1500)
}
