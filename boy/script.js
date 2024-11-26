console.log("redy");
let boy = document.querySelector(".boy");
boy.style.position='absolute';

addEventListener("keydown",(event)=>{
    let boy = document.querySelector(".boy");
    let left = window.scrollY + document.querySelector('.boy').getBoundingClientRect().left;
     let top = window.scrollX + document.querySelector('.boy').getBoundingClientRect().top;
    console.log(event.code);
    switch (event.code) {
        case  "ArrowRight":
            boy.classList.toggle("jump")
            setTimeout(() => {
            boy.classList.toggle("jump")
           }, 200);
            boy.style.left=left+10.00+"px";
            boy.style.transform= "rotateY(0deg)"
            break;
         case  "ArrowLeft" :
            boy.style.left=left-10.00+"px";
            boy.style.transform= "rotateY(180deg)"
            break;

        case  "ArrowDown":
             boy.style.top=top+10.00+"px";
            break;
        case  "Space" :
            boy.classList.toggle("jump")
           setTimeout(() => {
            boy.classList.toggle("jump")
           }, 200);
            break;
            case  "ArrowUp" :
            boy.style.top=top-10.00+"px";
            break;
        default:
            break;
    }  
})