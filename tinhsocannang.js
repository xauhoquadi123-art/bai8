function Kiemtra () {
    let weight = parseFloat(document.getElementById('cannang').value);
    let height = parseFloat(document.getElementById('chieucao').value);
    let ketqua = "";
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('ketqua').innerHTML = "Vui lòng nhập số hợp lệ lớn hơn 0 vào cả hai ô !";
        return;
    }
    let bmi = weight / (height * height);
    if (bmi < 18.5){
        ketqua = "BMI = " + bmi.toFixed(2) + " - phân loại:Underweight (Thiếu cân)";
    }else if (bmi >= 18.5 && bmi < 25.0){
        ketqua = "BMI = " + bmi.toFixed(2) + " - phân loại: Normal (Bình thường)";
    }else if (bmi >= 25.0 && bmi < 30.0){
        ketqua = "BMI = " + bmi.toFixed(2) + " - phân loại: Overweight (Thừa cân)";
    }else{
        (bmi >= 30)
        ketqua = "BMI =" + bmi.toFixed(2) + " - phân loại Obese (Béo phì)";
    }
    document.getElementById("ketqua").innerHTML = ketqua;
}
