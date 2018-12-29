<?php
    $d = dir(__DIR__);
    $list = array();
    $i = 0;
    while (false !== ($entry = $d->read())) {
        if (is_dir($entry) && $entry != '.' && $entry != '..' && $entry != 'css' && $entry != 'dev' && $entry != 'fonts' && $entry != 'icons' && $entry != 'js' && $entry != 'res') {
            $list[$i] = $entry;
            $i = $i + 1;
        }
    }
    sort($list);
    echo $list[0];
    for ($j=1; $j<count($list); $j++){
        echo ','.$list[$j];
    }
    
    $d->close();
?>