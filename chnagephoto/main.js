const imgList = document.querySelectorAll(".imgs img");
const wrap =document.querySelector(".main-img img")

// imgList.forEach(element => {
//     element.addEventListener("click" , function(){
//       wrap.src=element.src;
//     })





// });
let index = 0


   setInterval(() => {
    wrap.src=imgList[index].src;
    index++;
    if (index==8){
        index=0;
    }
}, 1000);
