
var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

 
    function calculateBtnClicked(){ 
        var billString= billStringElement.value;
        var roundedBillTotal = totalPhoneBill(billString);
        billTotalElement.innerHTML= roundedBillTotal;
        var istotal= roundedBillTotal;
        if(istotal>= 30.00){
            billTotalElement.classList.replace(billTotalElement.className, "danger");
        } else if(istotal>=20.00){
            billTotalElement.classList.replace(billTotalElement.className, "warning");
        } else {
            billTotalElement.classList.replace(billTotalElement.className, "billTotal");
        }

    }

calculateBtnElement.addEventListener('click',  calculateBtnClicked)