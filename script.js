let dec=document.getElementById("dec")
let inc=document.getElementById("inc")
let clr=document.getElementById("clr")
let ct =document.getElementById("ct")
let error =document.getElementById("#error")

let count=0;
inc.onclick=function(){
    count++;
    ct.textContent=count;
}
dec.onclick=function(){
        count--;
        ct.textContent=count;
    }
    clr.onclick=function(){
        count=0;
        ct.textContent=count;
    }
