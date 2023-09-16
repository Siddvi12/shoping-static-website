const bar =document.getElementById("bar");
const close=document.getElementById("close");
const nav =document.getElementById("navbar");

// so here we are taking or we can take every element as variabe or const and can perfotrm action on that
if(bar){
    bar.addEventListener("click",()=> {
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",()=> {
        nav.classList.remove("active");
    })
}
