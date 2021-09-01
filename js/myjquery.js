let notes = [2000, 500, 100, 20, 10, 5, 1];
let returnNotes = [];

var noOfNotes = $(".no-notes");
var checkBtn = $(".check-btn");

console.log(noOfNotes);

// ========= onclick handler =========

checkBtn.click(function () {
  var cashAmt = $("#cash").val();
  var billAmt = $("#bill").val();
  //   let returnAmount = parseInt(cashAmt) - parseInt(billAmt);
  console.log(cashAmt);
  console.log(billAmt);
  let returnAmount = +cashAmt - +billAmt;
  console.log(returnAmount);

  if (!billAmt || !cashAmt) {
    alert("Please, Enter Amount!");
  } else if (cashAmt === "") {
    alert("Please, Enter Cash Amount!");
  } else if (billAmt > cashAmt) {
    alert("Insufficient cash, please enter adequate cash amount!");
  } else if (cashAmt === billAmt) {
    alert("No Change!");
  } else {
    for (let i = 0; i < notes.length; i++) {
      returnNotes[i] = Math.floor(returnAmount / notes[i]);
      returnAmount = returnAmount - notes[i] * returnNotes[i];
      noOfNotes[i].innerText = returnNotes[i];
      if (returnAmount === 0) {
        break;
      }
    }
    console.log(returnNotes);
  }
});
