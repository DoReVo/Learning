function app(){
    var jsonOutput=document.getElementById("outputWrapper");
    var node = document.createElement("div");
    var textnode=document.createTextNode("LMAO");
    node.className="outputGuide";
    // node.setAttribute=("class","outputGuide");
    node.appendChild(textnode);
    jsonOutput.appendChild(node);
}

function testing(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender=document.getElementById("gender").value;
    var callArg = "retrieve";
    var submission = "name="+name+"&age="+age+"&gender="+gender+"&callArg="+callArg;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // var node=document.createElement("div");
            var jsonResponse = JSON.parse(xmlhttp.responseText);
            var mother= document.getElementById("outputWrapper");
            // var jsonOutput = "";
            // var jsonOutput=document.getElementById("outputWrapper");
            var node = [];
            var textnode=[];
            // node.className="outputGuide";
            // node.appendChild(textnode);
            // jsonOutput.appendChild(node);
            // node.createAttribute("outputGuide");
            for(x=0;x<jsonResponse.length;x++){

                for(y=0;y<3;y++){
                // textnode[y]=document.createTextNode("FUCK THIS");
                textnode[y] = document.createTextNode(jsonResponse[x][y]);
                node[y] = document.createElement("div");
                node[y].appendChild(textnode[y]);
                node[y].className="outputGuide";
                // node[y].setAttribute=("class","outputGuide");
                // jsonOutput+=jsonResponse[x][y] + " <br>";}
                // jsonOutput+="<br>";
                // jsonOutput+=jsonResponse[x][x] + " <br>";
                // jsonOutput+=jsonResponse[x][x] + " <br> <br>";
                mother.appendChild(node[y]);
                
            }
            // document.getElementById("message").innerHTML = jsonOutput;
        }    
    }
      
}   
xmlhttp.open("POST", "testServer.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(submission); 
}

function save(objData){

    var callArg = "save";
    var submission = "name="+objData.name+"&age="+objData.age+"&gender="+objData.gender+"&callArg="+callArg;
        var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("message").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("POST", "testServer.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(submission);
}

function retrieve(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender=document.getElementById("gender").value;
    var callArg = "retrieve";
    var submission = "name="+name+"&age="+age+"&gender="+gender+"&callArg="+callArg;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonResponse = JSON.parse(xmlhttp.responseText);
            var jsonOutput = "";
            // var jsonOutput=document.getElementById("outputWrapper");
            // var node = new Array (document.createElement("div"));
            // node.createAttribute("outputGuide");
            for(x=0;x<jsonResponse.length;x++){
                jsonOutput+=jsonResponse[x].Name + " <br>";
                jsonOutput+=jsonResponse[x].Age + " <br>";
                jsonOutput+=jsonResponse[x].Gender + " <br> <br>";
            }
            document.getElementById("message").innerHTML = jsonOutput;
    
        }    
    }
    xmlhttp.open("POST", "testServer.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(submission);
    
}   

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function validation(){

    var formData = {name:document.getElementById("name").value,
    age:document.getElementById("age").value,
    gender:document.getElementById("gender").value};

    var data=
    [document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("gender").value
    ];
    var alertCode=
    [
        document.getElementById("name").id,
        document.getElementById("age").id,
        document.getElementById("gender").id
    ];  

    var alertMsg="";

    formData.name=myTrim(formData.name);
    formData.age=myTrim(formData.age);
    formData.gender=myTrim(formData.gender);

    if (formData.name==""){
        alertMsg += "Name field is empty <br> ";
    }
    if (formData.age==""){
        alertMsg += "Age field is empty <br> ";
    }
    if (formData.gender==""){
        alertMsg += "Gender field is empty <br> ";
    }
        

    if (alertMsg!=""){
        document.getElementById("message").innerHTML=alertMsg;
    } else{
        save(formData);
    }
}

function hideToggle(){

    $(".age").animate({opacity:"0"},"slow");
    $("#age").animate({opacity:"0"},"slow");

    $(selector).fadeIn();
    // $(".age").toggle();
    // $("#age").toggle();

    // $(".age").hide();
    // $("#age").hide();
}