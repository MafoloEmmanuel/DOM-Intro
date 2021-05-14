var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");
var theColorElem = document.querySelector(".orange");

var myRadio = myRadioBillTotal();

function radioBillTotalTwo(){
    var billItemTypeRadioElem = document.querySelector("input[name='billItemType']:checked");

  var mybillItemType = billItemTypeRadioElem.value;
    myRadio.getRadioString(mybillItemType);
    callTotalTwoElem.innerHTML = myRadio.myGetCallTotal();
    smsTotalTwoElem.innerHTML = myRadio.myGetSmsTotal();

    totalTwoElem.innerHTML = myRadio.myGetOverallTotal();
    theColorElem.classList.add(myRadio.theColorChange());

}
radioBillAddBtnElem.addEventListener('click', radioBillTotalTwo)
