const elements=document.querySelectorAll(".scroll");

function checkScroll(){
const trigger=window.innerHeight*0.85;

elements.forEach(el=>{
const top=el.getBoundingClientRect().top;

if(top<trigger){
el.classList.add("show");
}
});
}

window.addEventListener("scroll",checkScroll);
window.addEventListener("load",checkScroll);