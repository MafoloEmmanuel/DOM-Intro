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
            textBill.getBillString('call');

            assert.equal(2.75, textBill.getCallTotal());
    
          });
        it("Should be able to get the call total for three calls", function() {
            let textBill = myTextBillTotal();
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');

            assert.equal(8.25, textBill.getCallTotal());
           });
        it("Should be able to get the sms total for one sms", function() {
            let textBill = myTextBillTotal();
            textBill.getBillString('sms');

            assert.equal(0.75, textBill.getSmsTotal());
    
          });
        it("Should be able to get the sms total for three smses", function() {
            let textBill = myTextBillTotal();
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');

            assert.equal(2.25, textBill.getSmsTotal());
    
        });
        it("Should be able to calculate the overall total for three calls and three smses", function(){
            let textBill = myTextBillTotal();
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');

            
            assert.equal(10.50, textBill.getOverallTotal());
        });
        it("Should be able to calculate the overall total for five calls and five smses", function(){
            let textBill = myTextBillTotal();
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');

            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');

            

            assert.equal(17.50, textBill.getOverallTotal());
        });  
    })
    describe("The warning and critical level", function(){
        it("Should return warning when the total is more than R30.00", function(){
            let textBill = myTextBillTotal();
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');
            textBill.getBillString('call');

            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');           
            assert.equal(31.25, textBill.getOverallTotal());
            assert.equal("warning", textBill.colorChange()) 
        })
       
    it("Should return Warning for the total that is more than R50.00", function(){
        let textBill = myTextBillTotal();
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');  
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call'); 
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call');
        textBill.getBillString('call'); 
        textBill.getBillString('call');
        textBill.getBillString('call'); 
        
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
            textBill.getBillString('sms');
        assert.equal(56.50, textBill.getOverallTotal());       
        assert.equal("danger", textBill.colorChange());
});
    })
});