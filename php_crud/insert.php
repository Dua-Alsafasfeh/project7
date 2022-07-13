<?php
include_once "connect.php";

$Title = $_REQUEST['Title'];
$Type = $_REQUEST['Type'];
$City = $_REQUEST['City'];
$Phone = $_REQUEST['Phone'];
$Des = $_REQUEST['Des'];
$img = $_REQUEST['img'];
$Date_Res = $_REQUEST['Date_Res'];
$CardNum = $_REQUEST['CardNum'];
$Expiry = $_REQUEST['Expiry'];
$CVV = $_REQUEST['CVV'];


$sql = "INSERT INTO news_ads(Title, Type, City, Phone , Des , img , Date_Res ,CardNum ,Expiry ,CVV) VALUES('$Title', '$Type', '$City', '$Phone', '$Des', '$img', '$Date_Res', '$CardNum' , '$Expiry' , '$CVV')";

mysqli_query($conn,$sql);

$conn->close();