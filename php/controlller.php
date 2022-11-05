<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];

    if (!$name || !$email || !$telephone) {
        die("Algo deu errado. Um ou mais campos estão vazios.")
    }
?>
 
