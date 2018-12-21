function setDefaultDate() {
  // Set default request date to today

  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;

  // LEGACY
  // $("#requestdateBox").attr("value", today);

  $("#requestdateBox").val(today);
  console.log($("#requestdateBox").val());
}

// Trim user input of white spaces
function myTrim(subj) {
  return subj.replace(/^\s+|\s+$/gm, "");
}

//Pass clicked element to required function
function passOver(elem) {
  // Check for existing selected element
  var currentSelected = $("#outputTable").find(".select");

  // If there exist already selected element
  if (currentSelected.length == 1) {
    // If there is a called to "edit" event already
    if (
      editArg == 1 &&
      $("#deleteButton").css("display") == "block" &&
      $("#saveButton").css("display") == "block"
    ) {
      // If we click other element during "EDIT"-ing
      if (currentSelected[0].id != elem.id) {
        // Assign elem as the currently existing clicked element
        elem = currentSelected[0];
      }
      // currentSelected[0].removeAttribute("class");
      // elem = $("#" + elem.id)[0];
    } else {
      currentSelected[0].removeAttribute("class");
    }
  }

  // Set the new clicked element class to "select"
  elem.className = "select";

  elemRow = elem;
  editButton.onclick = function() {
    currentSelected = $("#outputTable").find(".select");
    if (currentSelected.length != 0) {
      // Show delete and save button while hiding the edit button
      if ($("#deleteButton").css("display") == "none") {
        $("#deleteButton").show("slow");
      }
      if ($("#saveButton").css("display") == "none") {
        $("#saveButton").show("slow");
      }
      if ($("#editButton").css("display") == "block") {
        $("#editButton").hide("slow");
      }

      $("#resetButton").val("CANCEL");
      populateForm(elem);
    } else {
      alert("Please click a record to edit");
    }
  };
  deleteButton.onclick = function() {
    deleteRecord(elem);
  };
  // console.log(elem);
  // editButton.addEventListener("Click",function(){edit(elem)});
}

function randomizer(id, min, max) {
  var val = "";
  var selectedId = id;
  if (id.attr("id") == $("#type1Box").attr("id")) {
    var alpha = ["PM", "RM"];

    $(id).val(alpha[Math.floor(Math.random() * alpha.length)]);
  } else if (id.attr("id") == $("#type2Box").attr("id")) {
    var alpha = ["VI", "RS", "RP", "HK", "UC", "PT", "SL"];
    $(id).val(alpha[Math.floor(Math.random() * alpha.length)]);
    // var alphaRes = alpha[Math.floor(Math.random() * alpha.length)];
    // alphaRes = encodeURIComponent(alphaRes);
    // $(id).val(alphaRes);
  } else if (id.attr("id") == $("#statusBox").attr("id")) {
    var alpha = ["New", "In Progress"];
    $(id).val(alpha[Math.floor(Math.random() * alpha.length)]);
  } else if (id.attr("id") == $("#sapBox").attr("id")) {
    var alpha = "1234567890";
    var alphaSplit = Array.from(alpha);
    var randomLength = Math.floor(Math.random() * 5);
    for (i = 0; i < randomLength; i++) {
      val += alphaSplit[Math.floor(Math.random() * alphaSplit.length)];
      $(id).val(val);
    }
  } else if (id.attr("id") == $("#requestbyBox").attr("id")) {
    var alpha = ["Aqil", "Amirul", "Zamri", "Kamarulzaman", "Malina"];
    $(id).val(alpha[Math.floor(Math.random() * alpha.length)]);
  } else {
    var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    var alphaSplit = Array.from(alpha);
    var randomLength = Math.floor(Math.random() * (max - min)) + min;
    for (i = 0; i < randomLength; i++) {
      val += alphaSplit[Math.floor(Math.random() * alphaSplit.length)];
      $(id).val(val);
    }
  }
}

function randomFill() {
  var formData = [
    $("#wTitleBox"),
    $("#type1Box"),
    $("#type2Box"),
    $("#descriptionBox"),
    $("#locationBox"),
    $("#statusBox"),
    $("#companyBox"),
    $("#sapBox"),
    $("#requestbyBox")
    // 9: $("#requestdateBox")
  ];

  for (t = 0; t < $("#randomizeAmount").val(); t++) {
    for (j = 0; j < formData.length; j++) {
      switch (j) {
        case 3:
          // Description box
          randomizer(formData[j], 200, 200);
          break;
        case 6:
          // Company Box
          randomizer(formData[j], 5, 10);
          break;

        default:
          randomizer(formData[j], 5, 15);
      }
    }
    Validation();
  }
}
