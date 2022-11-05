<?php
    include("connection.php");

    $name = $_FILES["controller.php"]["name"];
    $email = $_FILES["controller.php"]["email"];
    $telephone = $_FILES["controller.php"]["telephone"];

    if strlen($telephone) >= 14 #|| valid_email($email) == FALSE
    {
        die("Algo deu errado. Um ou mais valores podem estar incorretos.");
    }
        
    $query = "insert into donors (name, email, telephone) values ('$name', '$email', '$telephone')";
        
    if (mysqli_query($conn, $query)) {
        echo "Valores inseridos com sucesso.";
    } else {
        echo "Não foi possível inserir os valores no banco de dados. " . mysqli_error($conn->erro);
    }

    mysqli_close($conn);
?>
