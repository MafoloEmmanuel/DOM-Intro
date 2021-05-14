
var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var color = document.querySelector(".total");


function calculateBtnClicked(){
    color.classList.remove('warning');
    color.classList.remove('danger');


    var myCalculate = calculateBillEvent();

    var theBillString= billStringElement.value.trim();
    myCalculate.totalPhoneBill(theBillString);
    billTotalElement.innerHTML = myCalculate.theTotalBill();
    color.classList.add(billTotalElement.className, myCalculate.isColorChange());

}

calculateBtnElement.addEventListener('click',  calculateBtnClicked)