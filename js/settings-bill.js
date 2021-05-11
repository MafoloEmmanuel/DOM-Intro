// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
//var billItemTypeWithSettingsElem = document.querySelector('.billItemTypeWithSettings');
//get a reference to the add button
var settingsAddBtnElem = document.querySelector('.settingsAddBtn');
var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');
var callCostSettingElem = document.querySelector('.callCostSetting');
var smsCostSettingElem = document.querySelector('.smsCostSetting');
var warningLevelSettingElem = document.querySelector('.warningLevelSetting'); 
var criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');
// update setting button
var updateSettingsBtn = document.querySelector('.updateSettings');

var callsTotal=0;
var smsesTotal=0;
var totalCosts=0;
var smsCost =0;
var callCost = 0;
var warning = 0;
var critical = 0;

function settingsUpdateBill(){
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");


    callCost = Number(callCostSettingElem.value);
    smsCost = Number(smsCostSettingElem.value);
     warning = warningLevelSettingElem.value;
     critical = criticalLevelSettingElem.value;
     
     if(totalCosts >=critical){
        totalSettingsElem.classList.add("danger");
    } else if(totalCosts >= warning){
        totalSettingsElem.classList.add("warning");
    } 
  
}
updateSettingsBtn.addEventListener('click', settingsUpdateBill);

function settingsAddBill(){
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    var billItemTypeWithSettingsElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    
    if(billItemTypeWithSettingsElem){
    var billSettingsType = billItemTypeWithSettingsElem.value;
        console.log(billSettingsType);

        if(totalCosts < critical){
        
    if(billSettingsType ==="call"){
        callsTotal += callCost;
        console.log(callsTotal);
    } else if(billSettingsType === "sms"){
        smsesTotal += smsCost;
    }
    }
}

totalCosts = callsTotal + smsesTotal;

callTotalSettingsElem.innerHTML = callsTotal.toFixed(2);
smsTotalSettingsElem.innerHTML = smsesTotal.toFixed(2);
totalSettingsElem.innerHTML = totalCosts.toFixed(2);

if(totalCosts >=critical){
    totalSettingsElem.classList.add("danger");
} else if(totalCosts >= warning){
    totalSettingsElem.classList.add("warning");
} 
} 
updateSettingsBtn.addEventListener('click', settingsUpdateBill);
settingsAddBtnElem.addEventListener('click', settingsAddBill);

 

 