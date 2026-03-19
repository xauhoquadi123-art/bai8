function upAbc(){
    let element = document.getElementById("nobita");
    element.style.top = (parseInt(element.style.top) || 0) -5 + 'px';
}
function downAbc(){
    var element = document.getElementById("nobita");
    element.style.top = (parseInt(element.style.top) || 0) + 5 + 'px';
}
function leftAbc () {
    var element = document.getElementById("nobita");
    element.style.left = (parseInt(element.style.left) || 0) - 5 + 'px';
}
function rightAbc () {
    var element = document.getElementById("nobita");
    element.style.left = (parseInt(element.style.left) || 0) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftAbc();
            break;
            case 38:
                upAbc();
                break;
                case 40:
                    downAbc();
                    break;
                    case 39:
                        rightAbc();
                        break;



    }

}
function docReady() {
 window.addEventListener('keydown', moveSelection);
}
