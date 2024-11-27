let mesage = document.querySelector("#messgeI");
let messgeF = document.querySelector("#messgeF");
let Chatf = document.querySelector(".chatF");
let ChatI = document.querySelector(".chatI");
let conversation = [];

function addConversation(array) {
  for (let i = 0; i < 1; i++) {
    const element = array[i];
    // console.log(array);
    const paragraf = document.createElement("p");
    // console.log(element.Sende);
    paragraf.classList.add(element.Sende);
    paragraf.textContent = element.Mesage;
    ChatI.appendChild(paragraf);
    // Chatf.appendChild(paragraf.cloneNode(true));
  }
}
let click = 0;

function sentMesage() {
  conversation.unshift({ Sende: "IAM", Mesage: mesage.value });
  // console.log(conversation[0]);
  mesage.value = " ";
  addConversation(conversation);
}

function receive() {
  conversation.unshift({ Sende: "friend", Mesage: " Raspunsul prietenului " });
  // console.log(conversation[0]);
  mesage.value = " ";
  addConversation(conversation);
}

// document.querySelector("#sendF").addEventListener("click", function () {
//   conversation.unshift({ Sende: "friend", Mesage: messgeF.value });
//   console.log(conversation[0]);
//   messgeF.value = " ";
//   addConversation(conversation);
// });

document.querySelector("#sendI").addEventListener("click", function (event) {
  click++;
  if (click == 1) {
    setTimeout(() => {
      if (click === 1) {
        sentMesage();
      } else {
        receive();
      }
      click = 0;
    }, 240);
  }
});
