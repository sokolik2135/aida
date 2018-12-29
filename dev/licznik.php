<?php
    $data = file_get_contents('./licznik.txt');
    file_put_contents('./licznik.txt',$data+1);
?>