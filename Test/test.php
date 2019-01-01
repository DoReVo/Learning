<?php

  $con=mysqli_connect("localhost","root","","ms");

// Create dynamic array from $_GET with key that depends on the send object
foreach ($_GET as $key => $value) {
  $data[$key]=mysqli_real_escape_string($con,$value);
}

// Get Column name from Table
$sql="DESC `main`";
$result=mysqli_query($con,$sql);

foreach ($result as $key => $value) {
  switch($value["Field"]){
    case "row":
    case "Work Title":
    case "Request By":
    $columnName[]=$value["Field"];
    default:continue;
  }
}


$whereQ="`row`='".$data[0]."'";

$sql="SELECT `row`,`Work Title`,`Request By` FROM `main`WHERE($whereQ)";

$result = mysqli_query($con,$sql);

// $filtEchoTest = filter_var($echoTest,FILTER_SANITIZE_STRING);
while ($row = mysqli_fetch_assoc($result)){
  $jsonData[] = $row;
  
}
echo json_encode($jsonData);  
// echo $item;


// echo json_encode($_GET);
// echo "HAHA";



// $pass = "pcogd@512";
// $hashedPass1 = hash("sha256",$pass);
// $hashedPass2 = hash("md5",$pass);

// echo "Password before sha256 hashing is " . $pass . "<br>";
// echo "Password after sha256 hashing is ".$hashedPass1."<br>";

// echo "Password before md5 hashing is " . $pass . "<br>";
// echo "Password after md5 hashing is ".$hashedPass2."<br>";

// $unsafe = "!@#$%^&*()";



// $con = mysqli_connect("localhost","root","","test");

// if ($con){
//   Echo "connect success <br>";
// }

// echo $unsafe . "<br>";
// // echo "Prepare called ".mysqli_prepare($con,$unsafe) . "<br>";

// $query = "INSERT into `people` (`Name`) VALUES ('$unsafe')";

// if (mysqli_query($con,$query)){
//   echo "query success";
// }else{
//   echo "query not called";
// }

?>
