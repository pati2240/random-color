const body=document.getElementById("body");
const btnMakeColor=document.getElementById("btnMakeColor");
const btnPrvColor=document.getElementById("btnPrvColor");
const colorc=document.getElementById("colorc");
const arrayColors=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let prColor;
let prvColor;
let makeRandomColor=()=>{
    let c1=arrayColors[Math.floor(Math.random()*16)];
    let c2=arrayColors[Math.floor(Math.random()*16)];
    let c3=arrayColors[Math.floor(Math.random()*16)];
    let c4=arrayColors[Math.floor(Math.random()*16)];
    let c5=arrayColors[Math.floor(Math.random()*16)];
    let c6=arrayColors[Math.floor(Math.random()*16)]; 
    console.log("#"+c1+c2+c3+c4+c5+c6);
    prColor = "#"+c1+c2+c3+c4+c5+c6;
};
btnMakeColor.addEventListener('click',function(){
    prvColor = prColor;
    makeRandomColor();
    body.style.backgroundColor=prColor;
    colorc.style.backgroundColor = prColor;
    colorc.innerHTML = prColor;
});
btnPrvColor.addEventListener('click',function(){
    body.style.backgroundColor=prvColor;
    colorc.style.backgroundColor = prvColor;
    colorc.innerHTML = prvColor;
});