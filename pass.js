let inputslider=document.querySelector("#inptslider")
let maininput=document.querySelector("#maininput");
let slider=document.querySelector(".slider");
let lowercase=document.querySelector("#lowercase");
let uppercase=document.querySelector("#uppercase");
let numbers=document.querySelector("#numbers");
let special=document.querySelector("#special");
let btn=document.querySelector("#btn");

slider.textContent=inputslider.value;
inputslider.addEventListener("input",()=>{
    slider.textContent=inputslider.value;
})
btn.addEventListener("click",()=>{
    genepass(inputslider.value);
});

function genepass(len){
    let upper=uppercase.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
    let lower=lowercase.checked ? "abcdefghijklmnopqrstuvwxyz":"";
    let num=numbers.checked ? "0123456789":"";
    let spc=special.checked ? "!@#$%^&*()":"";


    let password=""
    let allchars=upper+lower+num+spc;
    for(let i=0;i<len;i++){
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    } 
    maininput.value=password;
}
