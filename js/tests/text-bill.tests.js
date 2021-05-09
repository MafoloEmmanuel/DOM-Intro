describe("The Text Bill factory function", function() {
    describe("Get the values", function(){
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
    
            textBill.getCallCost();
            assert.equal(2.75, textBill.getCallCost());
        })
        it("Should be able to get the sms cost", function() {
            let textBill = myTextBillTotal();
    
            textBill.getSmsCost();
            assert.equal(0.75, textBill.getSmsCost());
        })
    })
    describe("Calculate the Totals", function(){
        it("Should be able to get the call total for one call", function() {
            let textBill = myTextBillTotal();
            assert.equal("R2.75", textBill.getCallTotal());
    
          });
        it("Should be able to get the call total", function() {
            let textBill = myTextBillTotal();
    
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            assert.equal('R11.00', textBill.getCallTotal());
           });
        it("Should be able to get the sms total for one sms", function() {
            let textBill = myTextBillTotal();
            assert.equal("R0.75", textBill.getSmsTotal());
    
          });
        it("Should be able to get the sms total", function() {
            let textBill = myTextBillTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            assert.equal("R4.50", textBill.getSmsTotal());
    
        });
        it("Should be able to calculate the overall total for calls and smses", function(){
            let textBill = myTextBillTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            
            assert.equal('R12.00', textBill.getOverallTotal());
        });
        it("Should be able to calculate the overall total for calls and smses", function(){
            let textBill = myTextBillTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            

            assert.equal('R20.25', textBill.getOverallTotal());
        });  
    })
    describe("The warning and critical level", function(){
        it("Should return warning when the total is more than R30.00", function(){
            let textBill = myTextBillTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();            
            assert.equal("R30.25", textBill.getOverallTotal());
            assert.equal("warning", textBill.colorChange()) 
        })
        it("Should return warning for the total of R40.50 as its more than R30.00", function(){
            let textBill = myTextBillTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getSmsTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();
            textBill.getCallTotal();  
            assert.equal("R40.50", textBill.getOverallTotal());       
            assert.equal("warning", textBill.colorChange());
    });
    it("Should return Warning for the total that is more than R50.00", function(){
        let textBill = myTextBillTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getSmsTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();
        textBill.getCallTotal();  
        assert.equal("R51.50", textBill.getOverallTotal());       
        assert.equal("danger", textBill.colorChange());
});
    })
});