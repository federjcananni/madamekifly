<?php

    $valid_mails=array(
        "nannifederica28@yahoo.it",
        "",
        ""

    ); 

    $email= "";

    $message="";

    $service="";

    $name="";

if  ($_SERVER["REQUEST_METHOD"]== "POST") {
    if (isset($_POST ["email"]) && !empty (trim($_POST["email"]))) {$email = strtolower(trim($_POST['email']));
    }

} else echo ("1");



?>