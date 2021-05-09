function myRadioBillTotal() {
    var theOverallTotal=0;
    var theOverallSms =0;
    var theOverallCall =0;
    var isCallCost=0;
    var isSmsCost=0;
    var isCall= 2.75;
    var isSms= 0.75

    function myGetCall(){
        isCallCost= isCall;

    }
    function myGetSms(){
        isSmsCost = isSms;
    }
    function myGetCallCost() {
        return 'R'+ isCallCost.toFixed(2);

    }
    function myGetSmsCost() {
        return 'R'+ isSmsCost.toFixed(2);

    }
    function isMakeCall(){
        theOverallCall += isCallCost; 
     }
     function isMakeSms(){
       theOverallSms += isSmsCost;
     }
    function myGetCallTotal() {
        return 'R'+ theOverallCall.toFixed(2);
       
    }
    function myGetSmsTotal() {
        return "R"+ theOverallSms.toFixed(2);
    }
    function myGetOverallTotal(){
        theOverallTotal= theOverallSms + theOverallCall;
      // console.log(theOverallTotal, theOverallSms, theOverallCall)
        return 'R'+ theOverallTotal.toFixed(2);
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
