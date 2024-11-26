const PostList = [
  {
    id: 1,
    titlePost: "Postul 1",
    srcImg: "./img/pexels-photo-1624496.jpg",
    titleImg: "pexels-photo-1624496",
    body: "Continul pentru postul 1",
  },
  {
    id: 2,
    titlePost: "Postul 2",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul23",
  },
  {
    id: 3,
    titlePost: "Postul 3",
    srcImg: "./img/pexels-photo-443446.jpg",
    titleImg: "pexels-photo-443446",
    body: "Continul pentru postul 3",
  },
  {
    id: 4,
    titlePost: "Postul 4",
    srcImg: "./img/pexels-photo-1366919.jpg",
    titleImg: "pexels-photo-1366919",
    body: "Continul pentru postul 4",
  },
  {
    id: 5,
    titlePost: "Postul 5",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul 5",
  },
  {
    id: 6,
    titlePost: "Postul 6",
    srcImg: "./img/pexels-photo-1624496.jpg",
    titleImg: "pexels-photo-1624496",
    body: "Continul pentru postul 6",
  },
  {
    id: 7,
    titlePost: "Postul 7",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul 7",
  },
  {
    id: 8,
    titlePost: "Postul 8",
    srcImg: "./img/pexels-photo-443446.jpg",
    titleImg: "pexels-photo-443446",
    body: "Continul pentru postul 8",
  },
  {
    id: 9,
    titlePost: "Postul 9",
    srcImg: "./img/pexels-photo-1366919.jpg",
    titleImg: "pexels-photo-1366919",
    body: "Continul pentru postul 10",
  },
  {
    id: 10,
    titlePost: "Postul 10",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul 10",
  },
  {
    id: 11,
    titlePost: "Postul 11",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul 11",
  },
  {
    id: 12,
    titlePost: "Postul 12",
    srcImg: "./img/pexels-photo-1624496.jpg",
    titleImg: "pexels-photo-1624496",
    body: "Continul pentru postul 12",
  },
  {
    id: 13,
    titlePost: "Postul 13",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul 13",
  },
  {
    id: 14,
    titlePost: "Postul 14",
    srcImg: "./img/pexels-photo-443446.jpg",
    titleImg: "pexels-photo-443446",
    body: "Continul pentru postul 14",
  },
  {
    id: 15,
    titlePost: "Postul 15",
    srcImg: "./img/pexels-photo-1366919.jpg",
    titleImg: "pexels-photo-1366919",
    body: "Continul pentru postul 15",
  },
  {
    id: 16,
    titlePost: "Postul 16",
    srcImg: "./img/fall-autumn-red-season.jpg",
    titleImg: "fall-autumn-red-season",
    body: "Continul pentru postul 16",
  },
];
const CreatePosts = (arr) => {
  const box=document.querySelector(".box")
  arr.forEach((element) => {
    let wrapp,h1,h3,p;
    const  img=document.createElement("img");
      h1=document.createElement("h1");
      wrapp=document.createElement("div");
      wrapp.classList.add("Post")
      h3=document.createElement("h3");
      p=document.createElement("p");       
         h1.textContent=element.titlePost;
         h3.textContent=element.titleImg;
         p.textContent=element.body;
    img.src=element.srcImg;
    wrapp.append(h1,img,h3,p)
    box.append(wrapp)
  });
};

CreatePosts(PostList);

const posts = document.querySelectorAll('.Post');
posts.forEach(elem => {
  const array = elem.children
  for (let i = 0; i < array.length; i++) {
    const child = array[i];
    child.addEventListener("click", function (){       
      const text =this;
      let resul =prompt(text.textContent,"Insert your text");
      if(resul!==null){
        text.textContent=resul;
      }
      else{

      }      
      
    } )   
  }  
  
});



