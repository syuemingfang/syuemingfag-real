<?php session_start();
/*!

# Real URL
  
  [GitHub project](https://github.com/syuemingfang/syuemingfag-real) [Documentation](http://comment.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfag-real/master/comment.json)

****************************************************************************************************/

require('libs/Smarty.class.php');
$smarty=new Smarty;

require('class/real.php');
$main=new real();
$smarty->assign('name', 'Real URL');
$smarty->assign('repo', 'syuemingfang-real');

if(empty($_REQUEST['u'])){
	$smarty->assign('main', 'template/index.tpl');
} else{
	$u=$main->getURL($_REQUEST['u']);
	$smarty->assign('url', $u);
	$smarty->assign('url2', $_REQUEST['u']);
	$smarty->assign('main', 'template/geturl.tpl');
}
	$smarty->display('template/master.tpl');
?>