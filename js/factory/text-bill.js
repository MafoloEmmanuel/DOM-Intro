function myTextBillTotal() {
    var overallTotal=0;
    var overallSms =10;
    var overallCall = 5;
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
        return "R" + overallCall.toFixed(2);
    }
    function getSmsTotal() {
        // console.log(overallSms)
         return "R"+ overallSms.toFixed(2);
    }
    function getOverallTotal(){
        overallTotal= overallSms + overallCall;
        console.log(overallTotal, overallSms, overallCall  )
        return 'R'+ overallTotal.toFixed(2);
    }
    function colorChange() {
        if(getOverallTotal() >= 50){
            return "danger"
        } else if (getOverallTotal() >= 30){
            return "warning"
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
