function bai1() {
    let a = +prompt("nhập số a");
    let b = +prompt("nhâp số b");
    let c = (a%b);
    if ( c === 0){
        alert("a chia hết cho b");}
    else{
        alert("a không chia hết cho b");
    }
}
function bai2() {
   let tuoi = +prompt("nhập số tuổi");
   let sotuoi = (tuoi >= 16) ;
   if (sotuoi){
     alert("đủ điều kiện vào học lớp 10");
   }else {
       alert("không đủ điều kiện vào lớp 10");
   }
}
function bai3() {
    let songuyen = +prompt("nhập vào số nguyên");
    let so = ( songuyen >= 1);
    if (so){
        alert("là số nguyên dương");
    }else if (so === 0){
        alert("bằng không");
    }else {
        alert("là số nguyên âm");
    }
}
function bai4() {
    let a = +prompt("nhập vào");
    let b = +prompt("nhập vào");
    let c = +prompt("nhập vào");
    if (a>b&&a>c){
        alert(`là số lớn nhất ${a} `);
    }else if (b>c){
        alert (` là số lớn nhất ${b} `);
    }else {
        alert(`là số lớn nhất ${c}`);
    }
}
function bai5() {
let diemkiemtra = +prompt("nhập điểm kiểm tra");
let diemgiuaky = +prompt("nhập điểm giữa kỳ");
let diemcuoiky = +prompt("nhập điểm cuối kỳ");
let diemtrungbinh = ((diemkiemtra + diemgiuaky + diemcuoiky)/3);
if (diemtrungbinh >= 8.0){
    alert("học sinh giỏi");
}else if (diemtrungbinh < 8.0 && diemtrungbinh >= 6.5){
alert("học sinh khá");
}else if (diemtrungbinh  < 6.5 && diemtrungbinh >= 5.0){
    alert("học sinh trung bình");
}else {
    alert("học sinh yếu");
}
}
function bai6() {
    let dt = +prompt("nhâp doanh thu");
    let hoahong = 0;
    if (dt <= 10000000){
        hoahong = dt*0.05;
    }else if (dt <=30000000 && dt>10000000){
        hoahong = dt*0.10;
    }else {
        hoahong = dt*0.15;
    }
alert("hoa hồng nhận được là" + hoahong + "VND")
}
function bai7() {
    let phutgoi = +prompt("nhập số phút đã gọi");
    let sotien = 0;
    if (phutgoi <= 50){
        sotien = phutgoi*200;
    }else if (phutgoi > 50 && phutgoi <= 100 ){
        sotien = phutgoi*150;
    }else {
        sotien = phutgoi*100;
    }alert("cước phí phải trả là"+ sotien + "VND");
}