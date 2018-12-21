function auth() {
  var username = $("#username").val();
  var password = $("#password").val();

  var submission = {
    ApplicationId: "F4F40DD9-862A-4F3A-8CFC-A3B571B19F68",
    client: {
      Hostname: "Test-1",
      IP: "127.0.0.1",
      UserAgent: "Test-1"
    },
    Domain: "Petronas",
    Password: password,
    UserId: username
  };

  var data = JSON.stringify(submission);

  $.ajax({
    dataType: "json",
    contentType: "application/json",
    url: "https://sso.petronas.com/api/Web/Auth/Login",
    type: "POST",
    data: data,
    success: function(result) {
      alert(result.accessToken);
    },
    error: function(result) {
      console.log(result.responseJSON);
      alert(
        result.responseJSON.errorCode + "\n" + result.responseJSON.errorMessage
      );
    }
  });
}

function authClientSide() {
  var username = $("#username").val();
  var password = $("#password").val();

  sessionStorage.setItem("userId", username);
  sessionStorage.setItem("pw", password);

  // windows.location.href = "authPage.html";

  location.href = "authPage.html";

  // console.log(sessionStorage.getItem("userId"));
  // console.log(sessionStorage.getItem("pw"));
}
