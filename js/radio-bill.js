// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");
//var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");


var totalCall = 0;
var totalSms = 0;
var theTotalCost=0;

function radioBillTotal(){ 
    
    var billItemTypeRadioElem = document.querySelector("input[name='billItemType']:checked");

    if (billItemTypeRadioElem){
        // billItemType will be 'call' or 'sms'
    

    var billItemType = billItemTypeRadioElem.value;
    console.log(billItemType);
    if (billItemType === "call"){
        totalCall += 2.75;
    }
    else if (billItemType === "sms"){
        totalSms += 0.75;
    }
}
    // billItemType will be 'call' or 'sms'

    console.log(totalSms, totalCall );

    callTotalTwoElem.innerHTML = totalCall.toFixed(2);
    smsTotalTwoElem.innerHTML = totalSms.toFixed(2);
    theTotalCost = totalCall + totalSms;
    totalTwoElem.innerHTML = theTotalCost.toFixed(2);

    if (theTotalCost >= 50){
        // adding the danger class will make the text red
        totalTwoElem.classList.add("danger");
    }
    else if (theTotalCost >= 30){
        totalTwoElem.classList.add("warning");
    }

    }
    radioBillAddBtnElem.addEventListener('click', radioBillTotal )

 
