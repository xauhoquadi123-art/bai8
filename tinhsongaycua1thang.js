function kiemtra() {
    let thang = parseInt(document.getElementById('thang').value);
    let ketquaText = "";
    switch (thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        ketquaText = "tháng" + thang + " có 31 ngày";
        break;
        case 2:
        ketquaText = "tháng" + thang + " có 28 hoặc 29 ngày";
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        ketquaText = "tháng" + thang + " có 30 ngày"
        break;
        default:ketquaText = "Không có tháng này";
            break;
    }
document.getElementById("ketqua").innerHTML = ketquaText;
}