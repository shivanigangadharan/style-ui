const modal = document.getElementById("modalBox");
const action1 = document.getElementById("action1");
const action2 = document.getElementById("action2");
const openBtn = document.getElementById("openmodal");

function close() {
    modal.setAttribute("style", "display:none");
}

function open() {
    modal.setAttribute("style", "display:block")
}

action1.addEventListener("click", close);
action2.addEventListener("click", close);
openBtn.addEventListener("click", open);
