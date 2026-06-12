const button = document.querySelector("button")
const section = document.querySelector("#yahu")

button.addEventListener("click", async(e)=>{
    const number = Math.floor(Math.random() * 10);

    if(number === 6){
        section.innerHTML = `
        <img src="/yahu.jpg" alt="idk">
        `
    }
    console.log(number)
})