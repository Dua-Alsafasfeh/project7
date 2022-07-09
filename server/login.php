<?php
require "connection.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS,DELETE,PUT');
header("Access-Control-Allow-Headers: Content-Type, Authorization");



$regData = file_get_contents("php://input");
if(isset($regData) && !empty($regData)){
    $request = json_decode($regData);
// $email=$_REQUEST['email'];
// echo $email;
// $pass=$_REQUEST['password'];
// echo $password;

$email= $request->email;
$pass= $request->password;


$query = "SELECT * FROM `register` WHERE `email`='$email' AND `pass`='$pass';";
$resault = mysqli_query($conn, $query);
$json_array=  array();

while($row=mysqli_fetch_assoc($resault)){
    // echo $row;
    $json_array[]=$row;
    }
    echo json_encode($json_array);
    
    
    
    // $resault=mysqli_query($db,$sql);




if(mysqli_num_rows($resault) === "200"){
    
    header('location: dashboard.php ');

// $result  = $conn->prepare($sql);

}

// $result->execute([$email,$pass]);

}