describe ('The Calculate Bill Function', function(){
    it("Should calculate the total bill of one call to be R2.75", function(){
        calculateBillEvent('call');
        assert.equal('R2.75',calculateBillEvent('call'));
        
    });
    it("Should calculate the total bill of one sms to be R0.75", function(){
        calculateBillEvent('sms');
        assert.equal('R0.65',calculateBillEvent('sms'));
    });

    it("Should calculate the total bill of two calls to be R5.50", function(){
        calculateBillEvent('call,call');
        assert.equal(calculateBillEvent('call,call'), 'R5.50');
    });
    it("Should calculate the total bill of two smses to be R1.30", function(){
        calculateBillEvent('sms,sms');
        assert.equal(calculateBillEvent('sms,sms'), 'R1.30');
    });
    
    it("Should calculate the total bill of both the calls and smses to be R12.30", function(){
        calculateBillEvent('call,call,sms,sms,call,call');
        assert.equal(calculateBillEvent('call,call,sms,sms,call,call'), 'R12.30');
    });

    it("Should calculate zero for any string other than sms and call", function(){
        calculateBillEvent("hello");
        assert.equal("R0.00", calculateBillEvent('hello'));
    }) 
})