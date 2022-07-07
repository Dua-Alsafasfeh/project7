<?php
include_once "./connect.php";

$Title = $_REQUEST['Title'];
$Type = $_REQUEST['Type'];
$City = $_REQUEST['City'];
$Phone = $_REQUEST['Phone'];
$Des = $_REQUEST['Des'];
$img = $_REQUEST['img'];
$Date_Res = $_REQUEST['Date_Res'];




$sql = "INSERT INTO news_ads(Title, Type, City, Phone , Des , img , Date_Res) VALUES('$Title', '$Type', '$City', '$Phone', '$Des', '$img', '$Date_Res')";

mysqli_query($conn,$sql);

$conn->close();
