function billWithSettings(){
    var theCallCost =0;
    var theSmsCost =0;
    var theWarningLevel=0;
    var theCriticalLevel =0;

    var callCostTotal=0;
    var smsCostTotal =0;
    var theTotalCosts = 0;
   function setTheCallCost(callCost){
    theCallCost = callCost;
   } 
   function setTheSmsCost(smsCost){
    theSmsCost = smsCost;
   }
   function getTheCallCost(){
    return 'R'+ theCallCost.toFixed(2);
   }
   function getTheSmsCost(){
    return 'R'+ theSmsCost.toFixed(2);
   }
   function setTheWarningLevel(warningLevel){
    theWarningLevel = warningLevel;
   }
   function setTheCriticalLevel(criticalLevel){
    theCriticalLevel = criticalLevel;
   }
   function getTheWarningLevel(){
    return 'R'+ theWarningLevel.toFixed(2);
   }
   function getTheCriticalLevel(){
       return 'R' + theCriticalLevel.toFixed(2);
   }
   function makeCall(){
     if(!hasReachedCriticalLevel()){
      callCostTotal += theCallCost; 
   }
  }
   function makeSms(){
     if(!hasReachedCriticalLevel()){
     smsCostTotal += theSmsCost;
   }
  }
   function getTheCallsTotal(){
       return 'R' + callCostTotal.toFixed(2);
   }
   function getTheSmsesTotal(){
       return 'R' + smsCostTotal.toFixed(2);
   }
   function getTheTotalCost(){
     theTotalCosts = callCostTotal + smsCostTotal;
     return 'R' + theTotalCosts.toFixed(2);
   } 
   function hasReachedCriticalLevel(){
     return theTotalCosts >= theCriticalLevel;  
   }
   function totalClassName(){
    theTotalCosts = callCostTotal + smsCostTotal;
     if(theTotalCosts>= theCriticalLevel){
      return "danger";
    } else if(theTotalCosts>= theWarningLevel){
      return "warning";
    } 
   
  }
   return{
    setTheCallCost,
    getTheCallCost,
    setTheSmsCost,
    getTheSmsCost,
    setTheWarningLevel,
    setTheCriticalLevel,
    getTheWarningLevel,
    getTheCriticalLevel,
    makeCall,
    makeSms,
    getTheCallsTotal,
    getTheSmsesTotal,
    getTheTotalCost,
    totalClassName
   }
}