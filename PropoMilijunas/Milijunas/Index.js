function FunkcijaNEka() {
    alert("Dobro došli i bolje Vas našli #Bujrum");
    document.getElementById("Btn").style.visibility = "hidden";
    document.getElementById('mojDiv').style.visibility = "visible";
}

$(".fifty").click(function() {
      document.getElementById('btnNo').style.visibility = "hidden";
      document.getElementById('btnNo1').style.visibility = "hidden";
})
$(".fifty2").click(function() {
      document.getElementById('btnNoP1').style.visibility = "hidden";
      document.getElementById('btnNoP2').style.visibility = "hidden";
})
$(".test1").click(function() {
  document.getElementById('tacanOdgovor2').style.visibility = "visible";
  pitanjeBtn2.style.visibility = "hidden";
  pogresanOdgovorP1.style.visibility = "hidden";
  pogresanOdgovorP2.style.visibility = "hidden";
  pogresanOdgovorP3.style.visibility = "hidden";
  pitanje2.style.visibility = "hidden";
})



var pitanje = document.getElementById('pitanje');
var pitanje2 = document.getElementById('pitanje2');
var pitanje1 = document.getElementById('mojDiv2');
var yees = document.getElementById('Yees');
var pitanjeBtn2 = document.getElementById('btnYess');
var pogresanOdgovorP1 = document.getElementById('btnNoP');
var pogresanOdgovorP2 = document.getElementById('btnNoP1');
var pogresanOdgovorP3 = document.getElementById('btnNoP2');

$(".test").click(function(oEvent) {
  var btnValue = oEvent.target.value;
   if (btnValue == "Yes") {
     document.getElementById('btnYes').style.visibility = "hidden";
     document.getElementById('btnNo').style.visibility = "hidden";
     document.getElementById('btnNo1').style.visibility = "hidden";
     document.getElementById('btnNo2').style.visibility = "hidden";
     document.getElementById('fiftyfifty').style.visibility = "hidden";
     document.getElementById('tacanOdgovor').style.visibility = "visible";
     document.getElementById('tacanOdgovor').style.visibility = "hidden";
     pitanje.style.visibility = "hidden";
     pitanje1.style.visibility = "visible";
     yees.style.color = "red"
     document.getElementById('fiftyfifty2').style.visibility = "hidden"

   }else {
     document.getElementById('neTacanOdgovor').style.visibility = "visible";
     document.getElementById('btnYes').style.visibility = "hidden";
     document.getElementById('btnNo').style.visibility = "hidden";
     document.getElementById('btnNo1').style.visibility = "hidden";
     document.getElementById('btnNo2').style.visibility = "hidden";
     pitanjeBtn2.style.visibility = "hidden";
     pogresanOdgovorP1.style.visibility = "hidden";
     pogresanOdgovorP2.style.visibility = "hidden";
     pogresanOdgovorP3.style.visibility = "hidden";
     document.getElementById('fiftyfifty').style.visibility = "hidden"
     document.getElementById('fiftyfifty2').style.visibility = "hidden"
     pitanje.style.visibility = "hidden";
     pitanje2.style.visibility = "hidden";

   }
})
