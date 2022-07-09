<?php

// header("Access-Control-Allow-Origin: * ");
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS,DELETE,PUT');
// header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$database= "react-login";
 
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);



if($conn)
{

echo "connection succesed";

}else
{
    echo "connection failed";
}


// header("Access-Control-Allow-Origin: *");
// $server="localhost";
// $dbusername="root";
// $password="";
// $database="react-login";

// $con=mysqli_connect($server,$dbusername,$password,$database);

// if(!$con){
//     die("connection failed: ".mysqli_connect_error());
// }


// ?>