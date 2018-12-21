$(document).ready(function() {
  window.addEventListener("storage", function() {
    for (i = 0; i < sessionStorage.length; i++) {
      console.log(sessionStorage[i]);
    }
  });
});
