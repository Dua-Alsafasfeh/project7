<?php
include_once "./connect.php";

$comment = $_REQUEST['comment'];

$sql = "INSERT INTO Comment(comment) VALUES('$comment')";

mysqli_query($conn,$sql);

$conn->close();
