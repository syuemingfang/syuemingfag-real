<?php
/*!

## PHP

****************************************************************************************************/

//! 
//!### Class
class real{
//!#### real
	public $var1; //!+ **var1**
	public function __construct(){}
	public function func1(){
	//!+ **func1**
	}
	public function getURL($url){
		$ch=curl_init();
		$options=array(CURLOPT_URL => $url, CURLOPT_HEADER => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_USERAGENT => "Google Bot", CURLOPT_SSL_VERIFYPEER => false, CURLOPT_FOLLOWLOCATION => false);
		curl_setopt_array($ch, $options);
		$html=curl_exec($ch);
		curl_close($ch);
		if(preg_match('#Location: (.*)#', $html, $r)){
			return trim($r[1]);
		} else{
			return $url;
		}
	}

}

?>