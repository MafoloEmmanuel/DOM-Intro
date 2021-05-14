var settingsAddBtnElem = document.querySelector('.settingsAddBtn');
var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');
var callCostSettingElem = document.querySelector('.callCostSetting');
var smsCostSettingElem = document.querySelector('.smsCostSetting');
var warningLevelSettingElem = document.querySelector('.warningLevelSetting'); 
var criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');
var updateSettingsBtn = document.querySelector('.updateSettings');
var settingsColor = document.querySelector(".green");

var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings")

var mySettings = billWithSettings();


function settingsUpdateBillTwo(){
    settingsColor.classList.remove('warning');
    settingsColor.classList.remove('danger');


    mySettings.setTheCallCost(Number(callCostSettingElem.value));
    mySettings.setTheSmsCost(Number(smsCostSettingElem.value));
    mySettings.setTheWarningLevel(Number(warningLevelSettingElem.value));
    mySettings.setTheCriticalLevel(Number(criticalLevelSettingElem.value))
    
    settingsColor.classList.add(mySettings.totalClassName());
}
updateSettingsBtn.addEventListener('click', settingsUpdateBillTwo);

function settingsAddBillTwo(){

    settingsColor.classList.remove('warning');
    settingsColor.classList.remove('danger');
    
    var billItemTypeWithSettingsElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if(billItemTypeWithSettingsElem){
    var billSettingsType = billItemTypeWithSettingsElem.value.trim();

    mySettings.settingsBill(billSettingsType);

    callTotalSettingsElem.innerHTML = mySettings.getTheCallsTotal();
    smsTotalSettingsElem.innerHTML = mySettings.getTheSmsesTotal();
    totalSettingsElem.innerHTML = mySettings.getTheTotalCost();
    settingsColor.classList.add(mySettings.totalClassName());
    }
}

settingsAddBtnElem.addEventListener('click', settingsAddBillTwo)

