<?php
    $hostname = "localhost";
    $database = "appa_db";
    $username = "root";
    $password = "password";

    $conn = mysqli_connect($hostname, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    echo "Connected successfully.";

    mysqli_close($conn);
?>