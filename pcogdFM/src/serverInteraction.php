<?php

$callArg = $_POST['callArg'];

// TO-DO // SANITIZE EVERY INPUT USING MYSQL ESCAPE STRING

$con=mysqli_connect("localhost","root","","ms");
if(!$con){
    die('Could not connect '.mysqli_error($con));
}

if($callArg=="save"){
    save();

}elseif($callArg=="retrieve"){
    retrieve();
}elseif($callArg=="deleteRecord"){
    deleteRecord();
}elseif($callArg=="Update"){
    Update();
}

function deleteRecord(){
    $dataID=$_POST['dataID'];
    $callArg=$_POST['callArg'];

    $sql="DELETE FROM `main` WHERE row='$dataID'";

    $con=mysqli_connect("localhost","root","","ms");
    if (!$con){
        die ("Connection cannot be established". mysqli_connect_error($con));
    }

    if (mysqli_query($con, $sql)) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . mysqli_error($con);
    }


}

function Update(){
    $con=mysqli_connect("localhost","root","","ms");
    $wTitle =mysqli_real_escape_string($con,$_POST['wTitle']);
    $type1 = mysqli_real_escape_string($con,$_POST['type1']);
    $type2 = mysqli_real_escape_string($con,$_POST['type2']);
    $desc = mysqli_real_escape_string($con,$_POST['desc']);
    $loca = mysqli_real_escape_string($con,$_POST['loca']);
    $comp = mysqli_real_escape_string($con,$_POST['comp']);
    $stats = mysqli_real_escape_string($con,$_POST['stats']);
    $sapB = mysqli_real_escape_string($con,$_POST['sapB']);
    $reqB = mysqli_real_escape_string($con,$_POST['reqB']);
    $reqD = mysqli_real_escape_string($con,$_POST['reqD']);
    $clos = mysqli_real_escape_string($con,$_POST['clos']);
    $compl = mysqli_real_escape_string($con,$_POST['comple']);
    $callArg = mysqli_real_escape_string($con,$_POST['callArg']);
    $dataID = mysqli_real_escape_string($con,$_POST['dataID']);

  
    if (!$con){
        die ("Connection cannot be established". mysqli_connect_error($con));
    }

    // $sql="SELECT `Work Title`,`Type 1`,`Type 2`,`Description`,`Location`,`Status`,`Company`,`SAP#`,`Request By`,`Request Date`,`Closed By`,`Completion Date` FROM `main` WHERE row='$dataID' ";

    $sql="UPDATE `main` SET `Work Title`='$wTitle',`Type 1`='$type1',`Type 2`='$type2',
            `Description`='$desc',`Location`='$loca',`Status`='$stats',`Company`='$comp',
            `SAP#`='$sapB',`Request By`='$reqB',`Request Date`='$reqD',`Closed By`='$clos',
            `Completion Date`='$compl' WHERE row='$dataID'";


    // $result=mysqli_query($con,$sql);    
    
    if (mysqli_query($con, $sql)) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . mysqli_error($con);
    }

    // while($row = mysqli_fetch_array($result)){
    //     $jsonData[]=$row;
    // }
    //  echo json_encode($jsonData);

}

function save(){
    $con=mysqli_connect("localhost","root","","ms");
    $wTitle =mysqli_real_escape_string($con,$_POST['wTitle']);
    $type1 = mysqli_real_escape_string($con,$_POST['type1']);
    $type2 = mysqli_real_escape_string($con,$_POST['type2']);
    $desc = mysqli_real_escape_string($con,$_POST['desc']);
    $loca = mysqli_real_escape_string($con,$_POST['loca']);
    $comp = mysqli_real_escape_string($con,$_POST['comp']);
    $stats = mysqli_real_escape_string($con,$_POST['stats']);
    $sapB = mysqli_real_escape_string($con,$_POST['sapB']);
    $reqB = mysqli_real_escape_string($con,$_POST['reqB']);
    $reqD = mysqli_real_escape_string($con,$_POST['reqD']);
    $clos = mysqli_real_escape_string($con,$_POST['clos']);
    $compl = mysqli_real_escape_string($con,$_POST['comple']);
    $callArg = mysqli_real_escape_string($con,$_POST['callArg']);
    
    if (!$con){
        die ("Connection cannot be established". mysqli_connect_error($con));
    }
    
    $sql ="INSERT INTO `main`(`Work Title`, `Type 1`, `Type 2`, `Description`, `Location`, `Status`,
     `Company`, `SAP#`, `Request By`, `Request Date`, `Closed By`, `Completion Date`)
     VALUES ('$wTitle','$type1','$type2','$desc','$loca','$stats','$comp','$sapB','$reqB',
     '$reqD','$clos','$compl')";

    // $sql = mysqli_prepare($con,$sql);

    if (mysqli_query($con,$sql)){
        echo "New record insert success ";
        
    }else{
        echo " Fail to insert ";
    }
}   

function retrieve(){
    $con=mysqli_connect("localhost","root","","ms");
    $wTitle =mysqli_real_escape_string($con,$_POST['wTitle']);
    $type1 = mysqli_real_escape_string($con,$_POST['type1']);
    $type2 = mysqli_real_escape_string($con,$_POST['type2']);
    $desc = mysqli_real_escape_string($con,$_POST['desc']);
    $loca = mysqli_real_escape_string($con,$_POST['loca']);
    $comp = mysqli_real_escape_string($con,$_POST['comp']);
    $stats = mysqli_real_escape_string($con,$_POST['stats']);
    $sapB = mysqli_real_escape_string($con,$_POST['sapB']);

    $sapC = mysqli_real_escape_string($con,$_POST['sapC']);
    
    $reqB = mysqli_real_escape_string($con,$_POST['reqB']);
    $reqD = mysqli_real_escape_string($con,$_POST['reqD']);
    $clos = mysqli_real_escape_string($con,$_POST['clos']);
    $compl = mysqli_real_escape_string($con,$_POST['comple']);
    $callArg = mysqli_real_escape_string($con,$_POST['callArg']);
    
    if (!$con){
        die ("Connection cannot be established". mysqli_connect_error($con));
    }

    

    // #warning
    // #spaghettiCodesAhead

    // TO decide whether SAP is - or not
    if($sapC == "No"){
        $sql= "SELECT * FROM `main` WHERE (`Work Title` LIKE '%$wTitle%' AND `Type 1` LIKE '%$type1%' AND `Type 2` LIKE '%$type2' AND `Description` LIKE '%$desc%'
        AND `Location` LIKE '%$loca%' AND `Status` LIKE '%$stats%' AND `Company` LIKE '%$comp%' AND `SAP#` = '-' AND `Request By` LIKE '%$reqB%'
        AND `Request Date` LIKE '%$reqD%' AND `Closed By` LIKE '%$clos%' AND `Completion Date` LIKE '%$compl%' )";
    }else if($sapC == "Yes"){
        if($sapB == ""){
            $sql= "SELECT * FROM `main` WHERE (`Work Title` LIKE '%$wTitle%' AND `Type 1` LIKE '%$type1%' AND `Type 2` LIKE '%$type2' AND `Description` LIKE '%$desc%'
            AND `Location` LIKE '%$loca%' AND `Status` LIKE '%$stats%' AND `Company` LIKE '%$comp%' AND `SAP#` != '-' AND `Request By` LIKE '%$reqB%'
            AND `Request Date` LIKE '%$reqD%' AND `Closed By` LIKE '%$clos%' AND `Completion Date` LIKE '%$compl%' )";
        }else if($sapB != ""){
            $sql= "SELECT * FROM `main` WHERE (`Work Title` LIKE '%$wTitle%' AND `Type 1` LIKE '%$type1%' AND `Type 2` LIKE '%$type2' AND `Description` LIKE '%$desc%'
            AND `Location` LIKE '%$loca%' AND `Status` LIKE '%$stats%' AND `Company` LIKE '%$comp%' AND `SAP#` LIKE '%$sapB%' AND `Request By` LIKE '%$reqB%'
            AND `Request Date` LIKE '%$reqD%' AND `Closed By` LIKE '%$clos%' AND `Completion Date` LIKE '%$compl%' )";
        }
        
    }else if($sapC == ""){
        $sql= "SELECT * FROM `main` WHERE (`Work Title` LIKE '%$wTitle%' AND `Type 1` LIKE '%$type1%' AND `Type 2` LIKE '%$type2' AND `Description` LIKE '%$desc%'
        AND `Location` LIKE '%$loca%' AND `Status` LIKE '%$stats%' AND `Company` LIKE '%$comp%' AND `Request By` LIKE '%$reqB%'
        AND `Request Date` LIKE '%$reqD%' AND `Closed By` LIKE '%$clos%' AND `Completion Date` LIKE '%$compl%' )";
    }
   

    // $sql="SELECT * FROM `main` WHERE (`Work Title` Like '%$wTitle%' AND `Type 1` Like '%$type1%' AND `Type 2` Like '%$type2%' AND 
    // `Description` Like '%$desc%' AND `Location` Like '%$loca%' AND `Company` Like '%$comp%' And `%SAP#%` Like '%$sapB%') ";



    // CHANGE SQL TO REFLECT WHAT USER INPUT RATHER THAN RETRIEVE ALL

    $result=mysqli_query($con,$sql);    
        
       $jsonData=array();
        while($row = mysqli_fetch_array($result)){
            $jsonData[]=$row;
        }
    
        echo json_encode($jsonData);
        
}


?>