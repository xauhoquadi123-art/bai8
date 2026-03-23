function nhap(giatri) {
    let otrong = document.getElementById("nhap");
    if (giatri === "AC") {
        otrong.value = "";
    }else if (giatri === "=") {
            otrong.value = eval(otrong.value);
    }else{
        otrong.value += giatri;
    }
}