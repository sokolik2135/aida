<?php
    $data = file_get_contents('./nauka.txt');
    $retrieved = "\n'".$_GET['q']."': '".$_GET['a']."',";
    file_put_contents('./nauka.txt',$data.$retrieved);
    $msg = "Niezrozumiała informacja: ".$_GET['q']."\nSugerowana odpowiedź: ".$_GET['a'];
    mail('sokolowski776@gmail.com','Aida - sugestia odpowiedzi',$msg);
?>