
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
//get a reference to the calculate button
var billStringElement = document.querySelector(".billString");
//get a reference to the billTotal element
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billString
var billTotalElement = document.querySelector(".billTotal");

// add event listener

calculateBtnElement.addEventListener('click', function calculateBtnClicked() {
    function totalPhoneBill(){
        var billString = billStringField.value;
        var isPhoneBill = billString.split(', ');
          
          var isTotalBill=0;
          for(var i=0;i<isPhoneBill.length;i++){
          var isBill= isPhoneBill[i].trim();
            //console.log(isBill);
           if(isBill == 'call'){
           isTotalBill += 2.75;
           } else if(isBill == 'sms'){
           isTotalBill += 0.65
           }
        }
          //console.log("R" + isTotalBill.toFixed(2));
           return "R" + isTotalBill.toFixed(2);// rounds off to the 2nd decimal place
       
        }
       
        var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
    });
