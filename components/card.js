let dismiss = document.getElementById("card-dismiss");

const handleClick = () => {
    document.getElementById("dismissed-card").setAttribute("style", "display:none");
}

dismiss.addEventListener("click", handleClick);
