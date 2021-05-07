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
    it("Should be able to get the call and sms total, then after get their overall total", function() {
        let textBill = myTextBillTotal();

        assert.equal("R2.75", textBill.getCallTotal());
        assert.equal("R0.75", textBill.getSmsTotal());
        assert.equal('R3.50', textBill.getOverallTotal());

      });
    it("Should be able to get the call total", function() {
        let textBill = myTextBillTotal();

        textBill.getCallTotal(2.75);
        textBill.getCallTotal(2.75);
        textBill.getCallTotal(2.75);
        assert.equal('R11.00', textBill.getCallTotal());
        
       });
    it("Should be able to get the sms total", function() {
        let textBill = myTextBillTotal();
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        textBill.getSmsTotal(0.75);
        assert.equal("R4.50", textBill.getSmsTotal());

    });

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
    });

    it("Change the color to orange when the overall total is greater than 20", function(){
            let textBill = myTextBillTotal();
            textBill.getOverallTotal(25.00);
            assert.equal("R55.00", colorChange ("warning"));
    });


    describe("warning and critical level", function(){
        it("Should return a class name if warning level is reached", function(){
            let textBill = myTextBillTotal();
            
            textBill.getOverallTotal(32.00)
            assert.equal("warning", textBill.colorChange()); 
        })
    })
});