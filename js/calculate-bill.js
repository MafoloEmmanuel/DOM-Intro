
var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

function totalPhoneBill(billString){
    var isPhoneBill = billString.split(', ');
      var isTotalBill=0;
      for(var i=0;i<isPhoneBill.length;i++){
      var isBill= isPhoneBill[i].trim();
       if(isBill == 'call'){
       isTotalBill += 2.75;
       } else if(isBill == 'sms'){
       isTotalBill += 0.65
       }
    }
       return isTotalBill.toFixed(2);
    }
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