//
document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("experience").disabled = true;
   // document.getElementById("experience").disabled = true;
})

let outputInfo = "";
function formSubmitEvent(){
    let lname = document.getElementById("lname").value;   
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;        
    
   // console.log(lname.value);
   // console.log(city.value);
   // console.log(payment.value);  
    
    if (lname.length > 2 ) {
   //&& address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5) {
        document.getElementById("experience").disabled = false;
        //document.getElementById("lastName").value = lname;
        //.getElementById("cityName").value = city;
       // document.getElementById("paymentType").value = payment;

       

        outputInfo = lname.concat(' ', city).concat(" ", payment);
       //document.getElementById("grade1").value = lname;
        //cobine = lname "" + "" + 
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(outputInfo));    
        document.getElementById("firstUl").appendChild(anotherLi);

       // document.getElementById("visitdate").value = new Date();
    }
    else {
        alert("please fill in all fields");
    }

}