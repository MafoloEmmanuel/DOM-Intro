var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");
var theColorElem = document.querySelector(".green");

var myRadio = myRadioBillTotal();

function radioBillTotalTwo(){
    var billItemTypeRadioElem = document.querySelector("input[name='billItemType']:checked");

  var mybillItemType = billItemTypeRadioElem.value;
    myRadio.getRadio(mybillItemType);
    callTotalTwoElem.innerHTML = myRadio.myGetCallTotal();
    smsTotalTwoElem.innerHTML = myRadio.myGetSmsTotal();
    theColorElem.classList.add(myRadio.theColorChange());

    totalTwoElem.innerHTML = myRadio.myGetOverallTotal();
}
radioBillAddBtnElem.addEventListener('click', radioBillTotalTwo)
