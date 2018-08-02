// $("#Dugme").click(function(){
//     $("#myModal").modal();
// });



  //Provjerava da li su svi parametri uneseni u polja
  function ModalCongrats() {
       var a = $('#name').val();
       var b = $('#email').val();
       var c = $('#Jmbg').val();
       var d = $('#poruka').val();
       console.log(a);
       console.log(b);
       console.log(c);
       console.log(d);
       if (a !== "" &&  b !== "" && c !== "" &&  d !== "")
        {
         console.log("hsadasdsa");
          $('#myModal').modal();
       }else {
           $('#myModal1').modal();

         console.log("hey");
       }
  }

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
