describe("The Bill with Settings factory function", function(){
    describe("Set Values", function(){
    it("should be able to set the call cost", function(){
        let settingsBill= billWithSettings();

        settingsBill.setTheCallCost(1.85);
        assert.equal(1.85, settingsBill.getTheCallCost());
        let settingsBill2= billWithSettings();

        settingsBill2.setTheCallCost(2.85);
        assert.equal(2.85, settingsBill2.getTheCallCost());
    });
    it("should be able to set the sms cost", function(){
        let settingsBill= billWithSettings();

        settingsBill.setTheSmsCost(0.85);
        assert.equal(0.85, settingsBill.getTheSmsCost());
        let settingsBill2= billWithSettings();
 
        settingsBill2.setTheSmsCost(0.95);
        assert.equal(0.95, settingsBill2.getTheSmsCost());
    });
    it("should be able to set the call and sms cost", function(){
        let settingsBill= billWithSettings();

        settingsBill.setTheSmsCost(0.95);
        settingsBill.setTheCallCost(2.95);

        assert.equal(0.95, settingsBill.getTheSmsCost());
        assert.equal(2.95, settingsBill.getTheCallCost());
    });
    it("should be able to set the Warning level", function(){
        let settingsBill= billWithSettings();

        settingsBill.setTheWarningLevel(10.00);
        assert.equal(10.00, settingsBill.getTheWarningLevel());
    });
    it("should be able to set the Critical level", function(){
        let settingsBill= billWithSettings();

        settingsBill.setTheCriticalLevel(15.00);
        assert.equal(15.00, settingsBill.getTheCriticalLevel());
    });
    it("should be able to set the Warning and Critical levels", function(){
        let settingsBill= billWithSettings();

        settingsBill.setTheWarningLevel(15.00);
        settingsBill.setTheCriticalLevel(25.00);

        assert.equal(15.00, settingsBill.getTheWarningLevel());
        assert.equal(25.00, settingsBill.getTheCriticalLevel());

    });

    });
    describe("Use the Values", function(){
        it("Should be able to use the call cost that's been set", function(){
            let settingsBill= billWithSettings();

            settingsBill.setTheSmsCost(0.95);
            settingsBill.setTheCallCost(2.95);  
            settingsBill.setTheWarningLevel(10.00)
            settingsBill.setTheCriticalLevel(15.00)
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(8.85, settingsBill.getTheCallsTotal());
            assert.equal(0.00, settingsBill.getTheSmsesTotal());
            assert.equal(8.85, settingsBill.getTheTotalCost());

         })
         it("Should be able to make one call and return the total", function(){
             let settingsBill = billWithSettings();

             settingsBill.setTheCallCost(2.50);
             settingsBill.setTheWarningLevel(10.00)
             settingsBill.setTheCriticalLevel(15.00)
             settingsBill.makeCall();
             
             assert.equal(2.50, settingsBill.getTheCallsTotal());
             assert.equal(2.50, settingsBill.getTheTotalCost());

         })
         it("Should be able to make one sms and return the total", function(){
            let settingsBill = billWithSettings();

            settingsBill.setTheSmsCost(0.50);
            settingsBill.setTheWarningLevel(10.00)
            settingsBill.setTheCriticalLevel(15.00)
            settingsBill.makeSms();
            
            assert.equal(0.50, settingsBill.getTheSmsesTotal());
            assert.equal(0.50, settingsBill.getTheTotalCost());

        })
        it("Should be able to use the call and sms cost that's been set to find the total", function(){
            let settingsBill= billWithSettings();

            settingsBill.setTheSmsCost(0.95);
            settingsBill.setTheCallCost(2.95); 
            settingsBill.setTheWarningLevel(10.00)
            settingsBill.setTheCriticalLevel(15.00)   
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();


            assert.equal(8.85, settingsBill.getTheCallsTotal());
            assert.equal(3.80, settingsBill.getTheSmsesTotal());
            assert.equal(12.65, settingsBill.getTheTotalCost());

         })
         it("Should be able to use the call and sms cost that's been set to find the total", function(){
            let settingsBill= billWithSettings();

            settingsBill.setTheSmsCost(0.95);
            settingsBill.setTheCallCost(3.95);
            settingsBill.setTheWarningLevel(10.00)
            settingsBill.setTheCriticalLevel(15.00) 
        
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();


            assert.equal(15.80, settingsBill.getTheCallsTotal());
            assert.equal(3.80, settingsBill.getTheSmsesTotal());
            assert.equal(19.60, settingsBill.getTheTotalCost());

         })

    })
    describe("The Warning and Critical levels", function(){
         it("Should return a class name of 'warning' when a warning level is reached", function(){
             let settingsBill = billWithSettings();
             settingsBill.setTheSmsCost(1.95);
             settingsBill.setTheCallCost(3.95);  
             settingsBill.setTheWarningLevel(10.00 );    
             settingsBill.setTheCriticalLevel(15.00);    

  
             
             settingsBill.makeCall();
             settingsBill.makeCall();
             settingsBill.makeSms();
             settingsBill.makeSms();
            

             assert.equal(11.80, settingsBill.getTheTotalCost());
             assert.equal('warning', settingsBill.totalClassName());
         })
         it('Should return a class name of "danger" when a critical level is reached', function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(10.00 );    
            settingsBill.setTheCriticalLevel(15.00);    
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();

            assert.equal(19.65, settingsBill.getTheTotalCost());
            assert.equal("danger", settingsBill.totalClassName());
        })
        it('Should return a class name of "danger" when a critical level is reached', function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(10.00 );    
            settingsBill.setTheCriticalLevel(25.00);    
 
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();

            assert.equal(39.30, settingsBill.getTheTotalCost());
            assert.equal("danger", settingsBill.totalClassName());
        });
        it("Should stop the total call cost from increasing when the critical level is reached", function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(15.00);    
            settingsBill.setTheCriticalLevel(25.00);    
 
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
        
            assert.equal(27.55, settingsBill.getTheTotalCost());
            assert.equal(19.75, settingsBill.getTheCallsTotal());
            assert.equal("danger", settingsBill.totalClassName());

            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal(19.75, settingsBill.getTheCallsTotal());


        })
        it("Should stop the total sms cost from increasing when the critical level is reached", function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(15.00);    
            settingsBill.setTheCriticalLevel(25.00);    
 
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
        
            assert.equal(27.55, settingsBill.getTheTotalCost());
            assert.equal(19.75, settingsBill.getTheCallsTotal())
            assert.equal(7.80, settingsBill.getTheSmsesTotal());
            assert.equal("danger", settingsBill.totalClassName());

            settingsBill.makeSms();
            settingsBill.makeSms();

            assert.equal(7.80, settingsBill.getTheSmsesTotal());
        })
        it("Should stop the total call and sms cost from increasing when the critical level is reached", function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(15.00);    
            settingsBill.setTheCriticalLevel(25.00);    
 
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
        
            assert.equal(27.55, settingsBill.getTheTotalCost());
            assert.equal(19.75, settingsBill.getTheCallsTotal())
            assert.equal(7.80, settingsBill.getTheSmsesTotal());
            assert.equal("danger", settingsBill.totalClassName());

            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal(7.80, settingsBill.getTheSmsesTotal());
            assert.equal(19.75, settingsBill.getTheCallsTotal());

        });
        it("Should stop the overall total cost of the calls and smse from increasing when the critical level is reached", function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(15.00);    
            settingsBill.setTheCriticalLevel(25.00);    
 
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
        
            assert.equal(27.55, settingsBill.getTheTotalCost());
            assert.equal(19.75, settingsBill.getTheCallsTotal())
            assert.equal(7.80, settingsBill.getTheSmsesTotal());
            assert.equal("danger", settingsBill.totalClassName());

            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(7.80, settingsBill.getTheSmsesTotal());
            assert.equal(19.75, settingsBill.getTheCallsTotal());
            assert.equal(27.55, settingsBill.getTheTotalCost())
        });
        it("Should allow the total costs of the calls and smse to increasing when the critical level is changed", function(){
            let settingsBill = billWithSettings();
            settingsBill.setTheSmsCost(1.95);
            settingsBill.setTheCallCost(3.95);  
            settingsBill.setTheWarningLevel(15.00);    
            settingsBill.setTheCriticalLevel(30.00);    
 
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
        
            assert.equal(31.50, settingsBill.getTheTotalCost());
            assert.equal(23.70, settingsBill.getTheCallsTotal())
            assert.equal(7.80, settingsBill.getTheSmsesTotal());
            assert.equal("danger", settingsBill.totalClassName());
            settingsBill.setTheCriticalLevel(38.00);    

            settingsBill.makeSms();
            settingsBill.makeSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();


            assert.equal(13.65, settingsBill.getTheSmsesTotal());
            assert.equal(39.50, settingsBill.getTheCallsTotal());
            assert.equal(53.15, settingsBill.getTheTotalCost())
        });
    });
});