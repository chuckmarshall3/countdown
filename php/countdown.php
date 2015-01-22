<?php

if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}


//I know that I could have done this simpler with built in sleep() and loop
//but wanted to do it a little different and try using clean code method
//and output server time

function checktime($seconds, $starttime, $endtime){

	if($endtime-$seconds==$starttime){
    	echo "\n".$seconds." server time=".date('H:i:s');
    	$seconds--;
    }
    return $seconds;
}

function countdown($seconds)
{

	$starttime=time();
    $endtime=time() + 5;

    while($starttime < $endtime && $seconds >= 0 ){
	
    	$seconds = checktime($seconds, $starttime, $endtime);
		$starttime=time();
    }
}

countdown(5);
echo "\n";	
die('0 server time='.date('H:i:s').' All done...');

?>