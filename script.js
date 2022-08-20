const body = document.querySelector("body");
const button = document.querySelector("#btn");
const colorCode = document.querySelector(".colorCode")


const setBg = () => {
    const randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorCode.innerHTML = randomColor;
    
}
  button.addEventListener("click",setBg)
  
  setBg();
















