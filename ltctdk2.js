function bai1() {
    let C = +prompt("nhập vào nhiệt độ C");
    let F = C * 9 / 5 + 32;
    alert(`Độ F sẽ là: ${F}`);
}

function bai2() {
    let m = +prompt("nhập vào số mét");
    let ft = m * 3.2808;
    alert(`số feet được chuyển đổi là: ${ft}`);
}

function bai3() {
    let a = +prompt("nhập vào một cạnh của hình vuông");
    let S = a * a;
    alert(`Diện tích hình vuông là ${S}`)
}

function bai4() {
    let a = +prompt("nhập vào chiều dài hình chữ nhật");
    let b = +prompt("nhập vào chiều rộng hình chữ nhật");
    let S = a * b;
    alert(`diện tích hình chữ nhật là ${S}`);
}

function bai5() {
    let a = +prompt("nhập vào cạnh kề thứ nhất");
    let b = +prompt("nhập vào cạnh kề thứ hai");
    let S = 0.5 * a * b;
    alert(`diện tích tam giác vuông là ${S}`)
}

function bai6() {
    let a = +prompt("nhập giá trị a");
    let b = +prompt("nhập giá tri b");
    let x = -(b / a);
    alert(`kết quả cần tìm là ${x}`)
}

function bai7() {
    let a = +prompt("nhập giá trị a");
    let b = +prompt("nhập giá trị b");
    let c = +prompt("nhập giá trị c");
    let x1 = 0;
    let x2 = 0;
    let delta = (b * b) - 4 * a * c;
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`x1 sẽ bằng ${x1}` +
            `   x2 sẽ bằng ${x2}`)
    } else if (delta === 0) {
        x1 = x2 = -b / (2 * a);
        alert(`x1 và x2 sẽ bằng ${x1}`)
    } else {
        alert("phương trình vô ngiệm");
    }
}

function bai8() {
    let tuoi = +prompt("nhập vào số tuổi của một người");
    if (tuoi < 120 && tuoi > 0 && tuoi % 1 === 0) {
        alert("đúng là tuổi của 1 người");
    } else {
        alert("không phải là số tuổi");
    }
}

function bai9() {
    let a = +prompt("nhập vào cạnh a");
    let b = +prompt("nhập vào canh b");
    let c = +prompt("nhập vào canh c");
    if (a, b, c > 0 && a + b > c && b + c > a && a + c > b) {
        alert("abc là một tam giác");
    } else {
        alert("không phải là tam giác");
    }
}

function bai10() {
    let sodien = +prompt("nhập vào số điện");
    let sotien = 0;
    if (sodien <= 300) {
        sotien = sodien * 3000;
    } else if (sodien <= 800 && sodien > 300) {
        sotien = sodien * 4000;
    } else if (sodien < 1000 && sodien > 800) {
        sotien = sodien * 5000;
    } else {
        sotien = sodien * 10000;
    }
    alert("số tiền điện 1 tháng là  " + sotien + "VND")
}

function bai11() {
    let thuNhap = parseFloat(prompt("Nhập tổng thu nhập trong tháng (VNĐ):"));
    let phuThuoc = parseInt(prompt("Nhập số người phụ thuộc:"));
    if (isNaN(thuNhap) || isNaN(phuThuoc) || thuNhap < 0 || phuThuoc < 0)
        alert("Vui lòng nhập số liệu hợp lệ!");
    const tinhThueTNCN = (thuNhap, phuThuoc) => {
        const t = thuNhap - 11000000 - phuThuoc * 4.400000;
        return t <= 0 ? 0
            : t <= 5000000  ? t * 0.05
                : t <= 10000000 ? t * 0.10 - 2.500000
                    : t <= 18000000 ? t * 0.15 - 7.500000
                        : t <= 32000000 ? t * 0.20 - 1.65000000
                                    : t * 0.35 - 9.85000000;
    };
    let thue = tinhThueTNCN(thuNhap, phuThuoc);
    alert(`Thuế TNCN phải nộp là: ${thue.toLocaleString('vi-VN')} VNĐ`);
}
function bai12() {
        let tienGoc = parseFloat(prompt("Nhập số tiền ban đầu (VNĐ):"));
        let soThang = parseInt(prompt("Nhập số tháng cho vay:"));
        let laiSuat = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
        if (isNaN(tienGoc) || isNaN(soThang) || isNaN(laiSuat) || tienGoc <= 0 || soThang <= 0 || laiSuat <= 0) {
            alert("Vui lòng nhập số liệu lớn hơn 0 và hợp lệ!");
            return;
        }
        let tongTien = tienGoc * Math.pow((1 + laiSuat), soThang);
        let tienLai = tongTien - tienGoc;
        alert(
            `Sau ${soThang} tháng:\n` +
            `- Tổng tiền thu về: ${tongTien.toLocaleString('vi-VN', {maximumFractionDigits: 0})} VNĐ\n` +
            `- Tiền lãi sinh ra: ${tienLai.toLocaleString('vi-VN', {maximumFractionDigits: 0})} VNĐ`
        );

}