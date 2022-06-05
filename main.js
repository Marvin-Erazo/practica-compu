$(document).ready(function(){
  //Initial functions (when submit form)
  //===============================================================
  let formulario = document.getElementById('register-form');
  
  $(formulario).submit(function (e) { 
    formulario.reset();
  });

  formulario.reset();
  //================================================================

  //Input events
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  $("input").focus(function (e) {
    inputValidate(this,"focus");
  });

  $("input").blur(function (e) {
    inputValidate(this,"blur");
  });

  $("input").keyup(function (e) {
    inputValidate(this,"input");
  });
  //===============================================================

  //Uses when the input value is empty or dosen't carry out the condition
  function invalidState(input,value,alert){
    if(value){
      alert.style.visibility = "visible";
      $(input).addClass("invalid");
    }
    else{
      alert.style.visibility = "hidden";
      $(input).removeClass("invalid");
    }
  }

  //MAIN FUNCTION (control the events and values)
  //==============================================================================================================
  function inputValidate(input,event){
    if(input.type !== "submit"){

      let empty = input.value.length === 0 ? true:false;
      let alert = input.nextElementSibling;
      let emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/i;

      //FOR ALL INPUTS
      if(event === "blur" || event === "input"){
        invalidState(input,empty,alert);
        //invalid password/email
        switch (input.id) {
          case "email":
            emailRegex.test(input.value)? invalidState(input,false,alert):invalidState(input,true,alert);
            break;
        
          case "password":
            input.value.length < 8? invalidState(input,true,alert):invalidState(input,false,alert);
            break;
        }
      }

    }
  }
  //================================================================================================================
});
