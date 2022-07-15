<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "news";

$conn = mysqli_connect($dbsn,$dbun,$password,$dbname);
if($conn)
{}
else
{
    echo "connection failed";
}

$rate = $_REQUEST['rating'];

$sql = "INSERT INTO rating (rating) VALUES ('$rate')";
$result  = $conn->prepare($sql);

$result->execute([$rate]);

?>