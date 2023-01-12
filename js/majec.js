//selectores
const inputOne = document.querySelector(".sub");
//functions
function ValidateForm(e) {
  if (inputOne.value.trim() === "") {
    document.querySelector(".err").style.display = "block";
    document.querySelector(".sub").style.borderColor = "red";
  } else {
    document.querySelector(".err").style.display = "none";
    document.querySelector(".sub").style.borderColor = "gray";
  }
}
function validateEmail(emailId) {
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailId.value.match(mailformat)) {
    document.form1.text1;
    return true;
  } else {
    document.querySelector(".err").style.display = "block";
    document.querySelector(".sub").style.borderColor = "red";
    document.form1.text1;
    return false;
  }
}
