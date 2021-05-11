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

var mySettings = billWithSettings();

function settingsUpdateBillTwo(){
    mySettings.setTheCallCost(Number(callCostSettingElem.value));
    mySettings.setTheSmsCost(Number(smsCostSettingElem.value));
    mySettings.setTheWarningLevel(Number(warningLevelSettingElem.value));
    mySettings.setTheCriticalLevel(Number( criticalLevelSettingElem.value))

}
