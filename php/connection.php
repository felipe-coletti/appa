<?php
    $hostname = "localhost";
    $database = "appa_db";
    $username = "root";
    $password = "password";

    $conn = mysqli_connect($hostname, $username, $password, $database);

    if (!$conn) {
        die("Erro de conexão: " . mysqli_connect_error());
    }

    echo "Conectado com sucesso.";

    mysqli_close($conn);
?>
