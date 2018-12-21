<?php

// global $name;
// global $age;
// global $gender;
// global $callArg;

$name=$_POST['name'];
$age=$_POST['age'];
$gender=$_POST['gender'];
$callArg=$_POST['callArg'];

$con=mysqli_connect("localhost","root","","test");
if (!$con){
    die ("Connection cannot be established". mysqli_connect_error($con));
}


if($callArg=="save"){
    save();
} else{
    retrieve();
}

function save(){

    global $name;
    global $age;
    global $gender;
    global $callArg;

    $con=mysqli_connect("localhost","root","","test");
    if (!$con){
        die ("Connection cannot be established". mysqli_connect_error($con));
    }
    $sql="INSERT INTO people (Name, Age, Gender) VALUES ('$name','$age','$gender')";

    if (mysqli_query($con,$sql)){
        echo "New record insert success";
    }else{
        echo "Fail to insert";
    }
}

function retrieve(){
    $name=$_POST['name'];
    $age=$_POST['age'];
    $gender=$_POST['gender'];
    $callArg=$_POST['callArg'];
    $con=mysqli_connect("localhost","root","","test");
    if (!$con){
        die ("Connection cannot be established". mysqli_connect_error($con));
    }
    $sql="SELECT * FROM people WHERE Name LIKE '%$name%' AND Age Like '%$age%' AND Gender LIKE '%$gender%' ";
    $result=mysqli_query($con,$sql);
    
    // if(!$result=mysqli_query($con,$sql)){
    //     echo "Query failed ";
    // } else
    // {
        
       $jsonData=array();
        while($row = mysqli_fetch_array($result)){
            
            $jsonData[]=$row;
            
            // echo $row['Name']."<br>"; 
            // echo $row['Age']."<br>";
            // echo $row['Gender']."<br> <br>";
        }
        // $JsonEcho = json_encode($jsonData);
        echo json_encode($jsonData);
    // }
    
}


?>