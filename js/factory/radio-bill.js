function myRadioBillTotal() {
    var theOverallTotal=0;
    var theOverallSms =0;
    var theOverallCall =0;
    var isCallCost=0;
    var isSmsCost=0;
    var isCall= 2.75;
    var isSms= 0.75

    function getRadioString(billRadio){
        if(billRadio=== "call"){
         theOverallCall += isCall;
        } else if(billRadio === "sms"){
             theOverallSms += isSms;
         } 
        }
    function myGetCall(){
        isCallCost= isCall;
    }
    function myGetSms(){
        isSmsCost = isSms;
    }
    function myGetCallCost() {
        return isCallCost.toFixed(2);
    }
    function myGetSmsCost() {
        return isSmsCost.toFixed(2);
    }
    function isMakeCall(){
        theOverallCall += isCallCost; 
     }
     function isMakeSms(){
       theOverallSms += isSmsCost;
     }
    function myGetCallTotal() {
        return  theOverallCall.toFixed(2);
    }
    function myGetSmsTotal() {
        return theOverallSms.toFixed(2);
    }
    function myGetOverallTotal(){
        theOverallTotal= theOverallSms + theOverallCall;
        return  theOverallTotal.toFixed(2);
    }
    function theColorChange() {
        theOverallTotal= theOverallSms + theOverallCall;
        if(theOverallTotal >= 50){
            return "danger";
        } else if (theOverallTotal >= 30){
            return "warning";
        }
    }
    return {
        getRadioString,
        myGetCall,
        myGetSms,
        myGetCallCost,
        myGetSmsCost,
        isMakeCall,
        isMakeSms,
        myGetCallTotal,
        myGetSmsTotal,
        myGetOverallTotal,
        theColorChange,
        
    }
    
}
