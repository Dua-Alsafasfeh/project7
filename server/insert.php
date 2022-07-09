<?php
require "connection.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS,DELETE,PUT');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


// $server="localhost";
// $dbusername="root";
// $password="";
// $database="react-login";

$regData = file_get_contents("php://input");
if(isset($regData) && !empty($regData)){
    $request = json_decode($regData);

// $con=mysqli_connect($server,$dbusername,$password,$database);

if(!$conn){
    die("connection feild: ".mysqli_connect_error());
}

$first_name= $request->first_name;
$last_name= $request->last_name;
$email= $request->email;
$pass= $request->password;

$sql = "insert into register (first_name,last_name,email,pass) values ('$first_name','$last_name','$email', '$pass')";
mysqli_query($conn, $sql);
}
?>