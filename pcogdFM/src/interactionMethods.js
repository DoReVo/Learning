// Toggle Button Action
function changeAction() {
  // Checkbox variable
  var checkBox = $("#checkBox");

  // openDevArea();

  // Check if checkbox(New or Update Toggle) is ticked , and will show only required buttons for each state.

  // If checkbox is UPDATE
  if (checkBox.prop("checked") == true) {
    // Global var
    editArg = 1;

    // Show edit and search button
    if ($("#editButton").css("display") == "none") {
      $("#editButton").show("slow");
    }
    if ($("#searchButton").css("display") == "none") {
      $("#searchButton").show("slow");
    }
    // Hide save button
    if ($("#saveButton").css("display") == "block") {
      $("#saveButton").hide("slow");
    }
    // Show SAP Choices box
    if ($("#sapChoice").css("display") == "none") {
      $("#sapBox").animate({ width: "94px" }, function() {
        $("#sapChoice").show("slow");
        $("#sapBox").css({ gridColumn: "5/5" });
      });
    }

    // Set status and request date textbox string to empty
    $("#statusBox").val("");
    $("#requestdateBox").val("");

    // Show Line 7 (Closed by Line)
    $(".closedByLine")
      .css({ visibility: "visible" })
      .animate({ opacity: 1.0 }, "slow");

    // Call reset function to empty the form
    Reset();

    // Set SAP# textbox string to display "-"
    $("#sapChoice").prop("selectedIndex", 0);

    // Remove statusBox attached event for "NEW" mode
    $("#statusBox").off();
  }
  // If checkbox is NEW
  else {
    // Global var
    editArg = 0;

    // Hide edit, search and delete button
    if ($("#editButton").css("display") == "block") {
      $("#editButton").hide("slow");
    }
    if ($("#searchButton").css("display") == "block") {
      $("#searchButton").hide("slow");
    }
    if ($("#deleteButton").css("display") == "block") {
      $("#deleteButton").hide("slow");
    }

    // Show save button
    if ($("#saveButton").css("display") == "none") {
      $("#saveButton").show("slow");
    }
    // Hide SAP choices box
    if ($("#sapChoice").css("display") == "block") {
      $("#sapChoice").hide("slow", function() {
        $("#sapBox").css({ gridColumn: "4/5" });
        $("#sapBox").animate({
          width: "194px"
        });
        $("#sapBox").attr("disabled", false);
      });
    }

    // Hide Line 7
    $(".closedByLine").animate({ opacity: 0 }, "slow", function() {
      $(".closedByLine").css({ visibility: "hidden" });
    });

    // Empty Line 7 input form
    $("#closedbyBox").val("");
    $("#completiondateBox").val("");

    // Set status to "new"
    Reset();
    $("#statusBox").val("New");
    setDefaultDate();
    $("#sapBox").val("-");

    // Enabled request by box
    $("#requestbyBox").prop("disabled", false);
    // $("#requestbyBox").css({"backgroundColor":"rgb(100, 98, 98)"});

    // Enabled request date box
    $("#requestdateBox").prop("readonly", false);
    // $("#requestdateBox").css({"backgroundColor":"rgb(100, 98, 98)"});

    $("#statusBox").change(function() {
      statusBoxChange();
    });
  }
}

function devAreaToggle() {
  if ($("#devArea").css("opacity") == 0) {
    $("#devArea")
      .css({ visibility: "visible" })
      .animate(
        {
          opacity: 1,
          height: "40%",
          width: "25%"
        },
        "slow"
      );
  } else {
    $("#devArea").animate(
      {
        opacity: 0,
        height: "25%",
        width: "5%"
      },
      "slow",
      function() {
        $("#devArea").css({ visibility: "hidden" });
      }
    );
  }
}

function helpAreaToggle() {
  $("#infoArea").toggle("slow");
}

// Populate input form
function populateForm(elem) {
  // var table=document.getElementById("outputTable");
  // var alertMsg = document.getElementById("alertMsg");
  // var msg ="";

  var dataBoxes = {
    1: $("#wTitleBox"), //0
    2: $("#type1Box"), //1
    3: $("#type2Box"), //2
    4: $("#descriptionBox"), //3
    5: $("#locationBox"), //4
    6: $("#statusBox"), //5
    7: $("#companyBox"), //6
    8: $("#sapBox"), //7
    9: $("#requestbyBox"), //8
    10: $("#requestdateBox"), //9
    11: $("#closedbyBox"), //10
    12: $("#completiondateBox") // 11
  };
  var dropDownBox = {
    2: "#type1Box",
    3: "#type2Box",
    6: "#statusBox",
    9: "#requestbyBox",
    11: "#closedbyBox"
  };

  var postedElemData = [];

  for (i = 0; i < 13; i++) {
    postedElemData[i] = elem.childNodes[i].innerText;
    postedElemData[i] = myTrim(postedElemData[i]);
  }
  // dataBoxes[9].val(postedElemData[y]);
  //Fill input boxes with selected row data
  for (y = 1; y < 13; y++) {
    switch (y) {
      case 2:

      case 3:

      case 6:

      case 9:
        // $(dropDownBox[y]).val(postedElemData[y]);
        $(dropDownBox[y] + ' option[value="' + postedElemData[y] + '"]').prop(
          "selected",
          true
        );
        break;
      case 11:
        if (postedElemData == "") {
          continue;
        }

      default:
        dataBoxes[y].val(postedElemData[y]);
    }
  }

  $("#sapChoice").prop("selectedIndex", 0);

  // Make requestby and date Readonly
  $("#sapChoice").prop("disabled", true);
  $("#requestbyBox").prop("disabled", true);
  $("#requestdateBox").prop("readonly", true);
}

function sapChoiceChange() {
  if ($("#sapChoice").prop("selectedIndex") == 1) {
    $("#sapBox").val("");
    $("#sapBox").attr("disabled", false);
  } else {
    $("#sapBox").val("");
    $("#sapBox").attr("disabled", true);
  }
}

// Show and hide Line 7 based on "Status" in "NEW" Mode
function statusBoxChange() {
  // Show Line 7 if "Closed" is selected
  if ($("#statusBox").prop("selectedIndex") == 4) {
    $(".closedByLine")
      .css({ visibility: "visible" })
      .animate({ opacity: 1.0 }, "slow");
  } else {
    // Hide and empty line 7 input box
    $(".closedByLine").animate({ opacity: 0 }, "slow", function() {
      $(".closedByLine").css({ visibility: "hidden" });
    });
    $("#closedbyBox").val("");
    $("#completiondateBox").val("");
  }
}

function uiControlReset() {
  // 1 algo
  // If system is on update mode, hide delete and save button, while showing update button.
  if (editArg == 1) {
    if ($("#resetButton").val() == "CANCEL") {
      $("#resetButton").val("RESET");
    }

    if ($("#deleteButton").css("display") == "block") {
      $("#deleteButton").hide("slow");
    }

    if ($("#saveButton").css("display") == "block") {
      $("#saveButton").hide("slow");
    }

    if ($("#editButton").css("display") == "none") {
      $("#editButton").show("slow");
    }
  }
  // 2 algo
  // Deselect selected row if it exist
  var currentSelected = $("#outputTable").find(".select");

  if (currentSelected.length == 1) {
    currentSelected[0].removeAttribute("class");
  }

  // 3 algo
  // Make Request by, request date and sapChoice enabled again
  if ($("#requestbyBox").prop("disabled") == true) {
    $("#requestbyBox").prop("disabled", false);
  }

  if ($("#sapChoice").prop("disabled") == true) {
    $("#sapChoice").prop("disabled", false);
  }

  if ($("#requestdateBox").prop("readonly") == true) {
    $("#requestdateBox").prop("readonly", false);
  }
}

function uiControlDelete() {
  if (
    $("#deleteButton").css("display") == "block" &&
    $("#saveButton").css("display") == "block" &&
    $("#editButton").css("display") == "none"
  ) {
    $("#deleteButton").hide("slow");
    $("#saveButton").hide("slow");
    $("#editButton").show("slow");
  }
}

// Depreciated hide/show toggle
function animateToggle() {
  // If it is UPDATE
  if (checkBox.prop("checked") == true) {
    $("#editButton")
      .css({ display: "block" })
      .animate(
        {
          opacity: 1,
          height: 40,
          width: 100
        },
        "slow"
      );

    $("#searchButton")
      .css({ display: "block" })
      .animate(
        {
          opacity: 1,
          height: 40,
          width: 100
        },
        "slow"
      );

    $("#deleteButton")
      .css({ display: "block" })
      .animate(
        {
          opacity: 1,
          height: 40,
          width: 100
        },
        "slow"
      );
  }
  // If it is NEW
  else {
    // Animated Hide
    $("#editButton").animate(
      {
        opacity: 0,
        height: 0,
        width: 0
      },
      "slow",
      function() {
        $("#editButton").css({ display: "none" });
      }
    );

    $("#searchButton").animate(
      {
        opacity: 0,
        height: 0,
        width: 0
      },
      "slow",
      function() {
        $("#searchButton").css({ display: "none" });
      }
    );

    $("#deleteButton").animate(
      {
        opacity: 0,
        height: 0,
        width: 0
      },
      "slow",
      function() {
        $("#deleteButton").css({ display: "none" });
      }
    );
  }
}
