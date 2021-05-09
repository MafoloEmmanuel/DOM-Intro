describe("The Radio Bill factory function", function(){
    describe("Get the values", function(){
        it("Should be able to get the value for one the call", function(){
            let radioBill = myRadioBillTotal();
            radioBill.myGetCall();
            assert.equal("R2.75", radioBill.myGetCallCost());
        })
       
        it("Should be able to get the value for the sms", function(){
            let radioBill = myRadioBillTotal();
            radioBill.myGetSms();
            assert.equal("R0.75", radioBill.myGetSmsCost());
        })

    })
    describe("Get the Totals", function(){
        it("Should be able to get the total for one call", function(){
            let radioBill = myRadioBillTotal();
            radioBill.myGetCall();
            radioBill.isMakeCall();
            assert.equal("R2.75", radioBill.myGetCallCost());
            assert.equal("R2.75", radioBill.myGetOverallTotal());

        })
        it("Should be able to get the total for one sms", function(){
            let radioBill = myRadioBillTotal();
            radioBill.myGetSms();
            radioBill.isMakeSms();
            assert.equal("R0.75", radioBill.myGetSmsCost());
            assert.equal("R0.75", radioBill.myGetOverallTotal());

        })
        it("Should be able to get the total for one call and one sms", function(){
            let radioBill = myRadioBillTotal();
            radioBill.myGetSms();
            radioBill.myGetCall();

            radioBill.isMakeSms();
            radioBill.isMakeCall();

            assert.equal("R2.75", radioBill.myGetCallCost());
            assert.equal("R0.75", radioBill.myGetSmsCost());
            assert.equal("R3.50", radioBill.myGetOverallTotal());

        })
        it("Should be able to get the total for three calls and three smses", function(){
            let radioBill = myRadioBillTotal();
            radioBill.myGetSms();
            radioBill.myGetCall();

            radioBill.isMakeSms();
            radioBill.isMakeSms();
            radioBill.isMakeSms();

            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();


            assert.equal("R2.75", radioBill.myGetCallCost());
            assert.equal("R0.75", radioBill.myGetSmsCost());
            assert.equal("R10.50", radioBill.myGetOverallTotal());

        })

    })
    describe("The Warning and Critical Levels", function(){
        it("Should return Warning when the overall total is more than R30.00", function(){
            let radioBill= myRadioBillTotal();

            radioBill.myGetSms();
            radioBill.myGetCall();

            radioBill.isMakeSms();
            radioBill.isMakeSms();
            radioBill.isMakeSms();
            radioBill.isMakeSms();
            radioBill.isMakeSms();
            radioBill.isMakeSms();

            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();
            radioBill.isMakeCall();

            assert.equal("R37.50", radioBill.myGetOverallTotal());
            assert.equal("warning", radioBill.theColorChange());

            })
            it("Should return Danger when the overall total is more than R50.00", function(){
                let radioBill= myRadioBillTotal();
    
                radioBill.myGetSms();
                radioBill.myGetCall();
    
                radioBill.isMakeSms();
                radioBill.isMakeSms();
                radioBill.isMakeSms();
                radioBill.isMakeSms();
                radioBill.isMakeSms();
                radioBill.isMakeSms();
    
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeSms();
                radioBill.isMakeSms();
                radioBill.isMakeSms();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
                radioBill.isMakeCall();
    
                assert.equal("R64.50", radioBill.myGetOverallTotal());
                assert.equal("danger", radioBill.theColorChange());

            });
        });
    });