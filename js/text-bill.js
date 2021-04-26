// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

// these variables are global and defined outside of the Add button event listener.

var myCallsTotal = 0;
var mySmsTotal = 0;

function textBillTotal(){ 
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        myCallsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        mySmsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = myCallsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = mySmsTotal.toFixed(2);
    var totalCost = myCallsTotal + mySmsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }
    }
    addToBillBtnElement.addEventListener('click', textBillTotal);


