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
callTotalOneElement.innerHTML = textConstant.getCallTotal();
smsTotalOneElement.innerHTML = textConstant.getSmsTotal();

totalOneElement.innerHTML = textConstant.getOverallTotal();
colorElem.classList.add(textConstant.colorChange());

}
addToBillBtnElement.addEventListener('click', textBillTotalTwo);
