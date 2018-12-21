function setCookies() {
  // If user is not admin or user not logged in
  if (Cookies.get("Admin") == "No" || Cookies.get("Admin") == null) {
    $("#checkBox").prop("disabled", true);
    $("#requestbyBox").val(decodeURIComponent(Cookies.get("Name")));
  } else {
    $("#checkBox").prop("disabled", false);
    $("#requestbyBox").val(decodeURIComponent(Cookies.get("Name")));
  }
}

function setCPanelInfo() {
  $("#userName").text(Cookies.get("Name"));
  $("#userDept").text(Cookies.get("Dept"));
  $("#userEmail").text(Cookies.get("Email"));
}
