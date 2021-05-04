describe("The Text Bill factory function", function() {

    it("Should be able to get a call", function() {
        let textBill = myTextBillTotal();
        textBill.getCall("call");
    })
    it("Should be able to get an sms", function() {
        let textBill = myTextBillTotal();
        textBill.getSms("sms");
    })
    
    it("Should be able to get the call cost", function() {
        let textBill = myTextBillTotal();

        textBill.getCallCost(2.75);
        assert.equal(2.75, textBill.getCallCost());
    })
    it("Should be able to get the sms cost", function() {
        let textBill = myTextBillTotal();

        textBill.getSmsCost(0.75);
        assert.equal(0.75, textBill.getSmsCost());
    })

    it("Should be able to get the call total", function() {
        let textBill = myTextBillTotal();

        textBill.getCallTotal(2.75);
        textBill.getCallTotal(2.75);
        textBill.getCallTotal(2.75);
        assert.equal('R11.00', textBill.getCallTotal());
        
       })
    it("Should be able to get the sms total", function() {
        let textBill = myTextBillTotal();
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        assert.equal("R4.50", textBill.getSmsTotal());

    })

    it("Should be able to calculate the overall total for calls and smses", function(){
        let textBill = myTextBillTotal();
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getCallTotal(2.75);
        textBill.getCallTotal(2.75);
        textBill.getCallTotal(2.75);
        assert.equal('R12.00', textBill.getOverallTotal());
    })

});