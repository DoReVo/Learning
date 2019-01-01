<?php

$con=mysqli_connect("localhost","root","","ms");



$sql="DESC `main`";
$result=mysqli_query($con,$sql);

foreach ($result as $key => $value) {
  switch($value["Field"]){
    case "row":
    case "Work Title":
    case "Request By":
    $jsonData[]=$value["Field"];
    default:continue;
  }
  
}


// while($row=mysqli_fetch_assoc($result)){
//   $jsonData[]=$row;
// }

echo json_encode($jsonData);
?>