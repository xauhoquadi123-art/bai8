let g = document.getElementById("good");
let c = document.getElementById("cheap");
let f = document.getElementById("fast");
function bamvao(xem) {
    if (g.checked&&c.checked&&f.checked){
        if (xem ===g) c.checked=false;
    if(xem ===c) f.checked=false;
    if (xem ===f) g.checked=false;
}}