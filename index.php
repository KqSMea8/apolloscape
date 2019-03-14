<?php
// TODO: comment out the following two lines when deployed to production
// defined('YII_DEBUG') || define('YII_DEBUG', true);
// defined('YII_ENV') || define('YII_ENV', 'dev');
define('APP_ROOT', dirname($_SERVER['DOCUMENT_ROOT']));
define('YII_ENV_DEV', false); //代表资源类型，true代表interface，db，redis等资源是线下的，反之，是线上的
define('YII_ENV_TYPE', 3); // 0 online 1 preonline 2 qasandbox 3 非公有云环境（脱离公有云的开发环境）
define('YII_ENV_LOGIN', false);
define('YII_ENV_QA', false);
$GLOBALS['YII_ENV_USER'] = ['user_id' => 'zhuxiaoxing'];
    // ['user_id' => 'c08cd26c4031429da1cc2ff0bc5b4883']; // 如果YII_ENV_TYPE===3时，指定当前用户的信息（因为不通过公有云，拿不到信息，所以要指定）
define('YII_ENABLE_WHITELIST', false); // 是否打开白名单，默认不打开
require(__DIR__ . '/../../Yii/vendor/autoload.php');
require(__DIR__ . '/../../Yii/vendor/yiisoft/yii2/Yii.php');
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
$config = require(__DIR__ . '/../config/web.php');
(new yii\web\Application($config))->run();
