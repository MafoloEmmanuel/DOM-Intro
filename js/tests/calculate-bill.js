
function calculateBillEvent(mybillString){
    var myPhoneBill = mybillString.split(',');
      var myTotalBill=0;
      for(var i=0;i<myPhoneBill.length;i++){
      var myBill= myPhoneBill[i].trim();
       if(myBill == 'call'){
       myTotalBill += 2.75;
       } else if(myBill == 'sms'){
       myTotalBill += 0.65;
       }
    }
       return 'R' + myTotalBill.toFixed(2);
    }
     
calculateBillBtn.addEventListener('click', calculateBillEvent );

