
function calculateBillEvent(){

   var calls =0;
   var smses=0;
   var isTotalBill=0;
   function totalPhoneBill(billString){
      var isPhoneBill = billString.split(',');
        for(var i=0;i<isPhoneBill.length;i++){
        var isBill= isPhoneBill[i].trim();
         if(isBill == 'call'){
            calls += 2.75;
         } else if(isBill == 'sms'){
            smses += 0.75;
         } 
      }
   }
   function theTotalBill(){
      isTotalBill=calls + smses;
      return isTotalBill.toFixed(2)
   }

   function isColorChange() {
         if(isTotalBill>= 30){
             return "danger";
         } else if (isTotalBill >= 20){
             return "warning";
         }
      }
   return {
      totalPhoneBill,
      theTotalBill,
      isColorChange
         }
}
