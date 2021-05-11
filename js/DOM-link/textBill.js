var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");
var colorElem = document.querySelector(".red");

var textConstant = myTextBillTotal();

function textBillTotalTwo(){
    var mybillTypeEntered = billTypeTextElement.value.trim();

textConstant.getBillString(mybillTypeEntered);
console.log(mybillTypeEntered);
callTotalOneElement.innerHTML = textConstant.getCallCost();
smsTotalOneElement.innerHTML = textConstant.getSmsCost();
colorElem.classList.add(textConstant.colorChange());

totalOneElement.innerHTML = textConstant.getOverallTotal();
}
addToBillBtnElement.addEventListener('click', textBillTotalTwo);
