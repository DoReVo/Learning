
$("document").ready(function(){

$("#doSomethingBtn").click(function(){
    changeText();
});

});

// General Counter for anything
var counter=0;
// Var to check if first table has been created
var firstInit=false;

var createTableNodesRT=0;

function changeText(){

    $("#text1").text("This value has changed");

    //GET Attribute value
    var oP1 = $("<div></div>").text("Value of mainArea Class is = " + $(".mainArea").attr("class") );

    // Get text value
    var oP2 = $("<div id=\"output\"></div>").text("Value of #text1 has been changed from \""  + $("#text1").text() + "\" to ");

    //Change text Value
    $("#text1").text("Haha");

    //Get text value after changed
    var oP3 = $("#text1").text();

    //Append New Div elements to mainArea class
    $(".twoArea").append(oP1,oP2);

    //Append new text to id=output
    $("#output").append("\""+oP3+"\"");

    //Remove 'click' event of button set by doc.ready
    $("#doSomethingBtn").off("click");

    //Add new 'click' event that call other function
    $("#doSomethingBtn").click(function(){
        createTableNodes();
    });
}

function createDankGif(){

    // Define the image to be append and its attribute
    var node = $("<img>").attr({
        "src":"https://media.giphy.com/media/3o7aCZDlmQZLe4Q4V2/giphy.gif",
        "width":"300px",
        "height":"300px"
    });

// Check if GIF is already appended 5 times
if(counter!=5){
    $(".trdArea").append(node);
    counter+=1;
}else{ // If already 5 times, changed the button function to createTableNodes()
    counter=0;
    $("#doSomethingBtn").off("click");
    $("#doSomethingBtn").click(function(){
        
        createTableNodes();
    });
}   
}

function createTableNodes(){
    // Counter for defining div id and keeping track of the nodes
    counter+=1;

    // Create input for text if function never been called
    if (createTableNodesRT==0){
        var node = $("<input/>",{
            "type" : "text",
            "id" : "targetTable"
            
        });
        
        $(".frthArea").append(node);

        var node = $("<input/>",{
            "type":"button",
            "id":"targetBtn",
            "value":"Traverse",
            "style":"margin-top:10px;margin-bottom:10px;",
            "onclick":"traversal()"
        });
        $(".frthArea").append(node);



    }

    // Defining div to be appended
    var node = $("<div/>",{
        "id":counter,
        "text": "This is table number"+counter
        // "style":"border:1px solid white;"
        
    });



if(firstInit==true){
    // Append node to the previous node, hence the -1
    $("#"+(counter-1)).append(node);
}else{
    $(".frthArea").append(node);
    firstInit=true;
}

createTableNodesRT+=1;
    
}

function traversal(){

    var targetBtn = $("#targetBtn");
    var targetTable = $("#targetTable");

    var parentNode = $("#"+targetTable.val()).parent();
    var parentsNode = $("#"+targetTable.val()).parents();

    // $("#targetTable").before("Direct parent of element "+targetTable.val()+" is element "+parentNode.attr("id")+"<br>");

    console.log(parentsNode);
    
}
