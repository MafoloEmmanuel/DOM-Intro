describe ('The Calculate Bill Function', function(){
    it("Should calculate the total bill of R7.45", function(){
        assert.equal(calculateBillEvent('call,sms,call,sms,sms'), 'R7.45');
    });

    it("Should calculate the total bill of R6.80", function(){
        assert.equal(calculateBillEvent('call,call,sms,sms'), 'R6.80');
    });
    
    it("Should calculate the total bill of R12.30", function(){
        assert.equal(calculateBillEvent('call,call,sms,sms,call,call'), 'R12.30');
    });
   
})