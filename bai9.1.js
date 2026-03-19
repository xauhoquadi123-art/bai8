let abc = null;
abc = document.getElementById("quabong");
function init (){
    abc = document.getElementById("quabong");
    abc.style.position = "relative";
    abc.style.left = "0px";
}
function moveRight() {
    abc.style.left = parseInt(abc.style.left) + 20 + 'px';
}
function moveLeft()  {
    abc.style.left = parseInt(abc.style.left) - 20 + 'px';

}
window.onload = init;