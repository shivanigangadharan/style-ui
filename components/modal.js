const modal = document.getElementById("modal");
const action1 = document.getElementById("action1");
const action2 = document.getElementById("action2");
const openBtn = document.getElementById("openmodal");

function close() {
    console.log("close clicked");
    modal.setAttribute("style", "display:none");
}

function open() {
    console.log("open clicked");
    modal.setAttribute("style", "display:block");
}

action1.addEventListener("click", close);
action2.addEventListener("click", close);
openBtn.addEventListener("click", open);
