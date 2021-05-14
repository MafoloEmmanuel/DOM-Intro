describe ('The Calculate Bill Function', function(){
    it("Should calculate the total bill of one call to be R2.75", function(){
        let iscalculate = calculateBillEvent();
        iscalculate.totalPhoneBill('call');
        assert.equal(2.75, iscalculate.theTotalBill())

    });
    it("Should calculate the total bill of one sms to be R0.75", function(){
        let iscalculate = calculateBillEvent();
        iscalculate.totalPhoneBill('sms');
        assert.equal(0.75, iscalculate.theTotalBill())
    });

    it("Should calculate the total bill of two calls to be R5.50", function(){
        let iscalculate = calculateBillEvent();
        iscalculate.totalPhoneBill('call,call');
        assert.equal(5.50, iscalculate.theTotalBill())
    });
    it("Should calculate the total bill of two smses to be R1.30", function(){
        let iscalculate = calculateBillEvent();
        iscalculate.totalPhoneBill('sms,sms');
        assert.equal(1.50, iscalculate.theTotalBill())
    });

    
    it("Should calculate the total bill of two calls and two smses to be R7.00 ", function(){
        let iscalculate = calculateBillEvent();
        iscalculate.totalPhoneBill('call,call,sms,sms');
        assert.equal(7.00, iscalculate.theTotalBill())
    });

    it("Should calculate zero for any string other than sms and call", function(){
        let iscalculate = calculateBillEvent();
        iscalculate.totalPhoneBill('hello');
        assert.equal(0.00, iscalculate.theTotalBill())
    }) 
    describe('The warning and critical level', function(){
        it('Should change the class name to warning when the total is more than R20.00', function(){
            let iscalculate = calculateBillEvent();
            iscalculate.totalPhoneBill('call,call,call,sms,sms,sms,call,call,call,sms,sms,call,call,call');
            assert.equal(28.50, iscalculate.theTotalBill())
            assert.equal('warning', iscalculate.isColorChange())

        })
        it('Should change the class name to danger when the total is more than R20.00', function(){
            let iscalculate = calculateBillEvent();
            iscalculate.totalPhoneBill('call,call,call,sms,sms,sms,call,call,call,sms,sms,call,call,call,sms,sms,call,call');
            assert.equal(35.50, iscalculate.theTotalBill())
            assert.equal('danger', iscalculate.isColorChange())

        })
    })
})