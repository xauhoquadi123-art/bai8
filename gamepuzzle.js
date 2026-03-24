let state1 = 1;
let state2 = 2;
let state3 = 3;
let isGameOver = false;

function changeImage(position) {
    if (isGameOver) return;
    if (position === 1) {
        state1 = (state1 === 3) ? 1 : state1 + 1;
        document.getElementById('img1').src = getFileName(state1, 1);
    } else if (position === 2) {
        state2 = (state2 === 3) ? 1 : state2 + 1;
        document.getElementById('img2').src = getFileName(state2, 2);
    } else if (position === 3) {
        state3 = (state3 === 3) ? 1 : state3 + 1;
        document.getElementById('img3').src = getFileName(state3, 3);
    }
    checkWin();
}
function getFileName(state, position) {
    let prefix = "";
    if (state === 1) prefix = "han";
    else if (state === 2) prefix = "nhat";
    else if (state === 3) prefix = "viet";

    return prefix + position + ".png";
}function checkWin() {
    if (state1 === state2 && state2 === state3) {
        document.getElementById('winModal').style.display = 'flex';
        isGameOver = true;
    }
}function resetGame() {
    document.getElementById('winModal').style.display = 'none';
    isGameOver = false;
    state1 = 1;
    state2 = 2;
    state3 = 3;
    document.getElementById('img1').src = "han1.png";
    document.getElementById('img2').src = "nhat2.png";
    document.getElementById('img3').src = "viet3.png";
}