function myTextBillTotal() {
    var overallTotal=0;
    var overallSms =0;
    var overallCall =0;
    var myCall= 2.75;
    var mySms= 0.75

    function getBillString(getBill){
        if(getBill=== "call"){
         overallCall += myCall;
        } else if(getBill === "sms"){
             overallSms += mySms;
         }
        }
    function getCall() {
        return "call";
    }
    function getSms() {
        return "sms";
    }
    function getCallCost() {
        return myCall;
    }
    function getSmsCost() {
        return mySms;
    }
    function getCallTotal() {
        overallCall += myCall;
        return "R" + overallCall.toFixed(2);
    }
    function getSmsTotal() {
        overallSms += mySms;
        return "R"+ overallSms.toFixed(2);
    }
    function getOverallTotal(){
        overallTotal= overallSms + overallCall;
       console.log(overallTotal, overallSms, overallCall)
        return 'R'+ overallTotal.toFixed(2);
    }
    function colorChange() {
        overallTotal= overallSms + overallCall;
        if(overallTotal >= 50){
            return "danger";
        } else if (overallTotal >= 30){
            return "warning";
        }
    }
    return {
        getCall,
        getSms,
        getCallCost,
        getSmsCost,
        getCallTotal,
        getSmsTotal,
        getOverallTotal,
        colorChange,
        getBillString,
    }
    
}
