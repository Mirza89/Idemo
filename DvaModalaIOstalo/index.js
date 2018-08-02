// $("#Dugme").click(function(){
//     $("#myModal").modal();
// });



var modal = $('#myModal');
var modal1 = $('#myModal1');
  function ModalCongrats() {
       var a = document.forms["Forma"]["name"].value;
       var b = document.forms["Forma"]["email"].value;
       var c = document.forms["Forma"]["jmbg"].value;
       var d =document.forms["Forma"]["poruka"].value;
       if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "")
       {
           $(modal1).modal();
       }else {
         $(modal).modal();
         console.log("hey");
       }
  }

  $(document).ready(function() {
      $("#Jmbg").keydown(function (e) {
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
              (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
              (e.keyCode >= 35 && e.keyCode <= 40)) {
                   return;
          }
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      });
  });


  // var modal = $("#myModal");
  // 	function pokaziModal(){
  // 		var ime = $("#name").val();
  // 		var email = $("#email").val();
  //
  // 		$("#NamE").text(ime);
  // 		$("#EmaiL").text(email);
  //
  // 		modal.css("display","block");
  // 	}
  //
  // 	function closeFja(){
  // 		modal.css("display", "none");
  // 	}
