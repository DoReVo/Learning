<?php

$pass = "Damn";
$hashedPass1 = hash("sha256",$pass);
$hashedPass2 = hash("md5",$pass);

// echo "Password before sha256 hashing is " . $pass . "<br>";
// echo "Password after sha256 hashing is ".$hashedPass1."<br>";

// echo "Password before md5 hashing is " . $pass . "<br>";
// echo "Password after md5 hashing is ".$hashedPass2."<br>";

$unsafe = "!@#$%^&*()";



$con = mysqli_connect("localhost","root","","test");

if ($con){
  Echo "connect success <br>";
}

echo $unsafe . "<br>";
// echo "Prepare called ".mysqli_prepare($con,$unsafe) . "<br>";

$query = "INSERT into `people` (`Name`) VALUES ('$unsafe')";

if (mysqli_query($con,$query)){
  echo "query success";
}else{
  echo "query not called";
}
?>