<?php
    $data = file_get_contents('./nauka.txt');
    $retrieved = "\n'".$_GET['q']."': '".$_GET['a']."',";
    file_put_contents('./nauka.txt',$data.$retrieved);
?>