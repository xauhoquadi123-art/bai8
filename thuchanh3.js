let hazz = prompt("nhapchuoi")
if (hazz==="Admin"){
   let pass = prompt("matkhau")
   if ( pass === "TheMaster"){
       alert("Welcome");
   }else{

   } if (pass === null){
       alert("canceled");
   }else {
       alert("Wrong password");
   }
}else if( hazz===null){
    alert("canceled");
}else {
    alert("I don't know you");
}