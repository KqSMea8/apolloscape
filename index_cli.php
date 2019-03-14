<?php
/**
 * Yii console bootstrap file.
 */
define('APP_ROOT', dirname(dirname(__FILE__)));
define('YII_ENV_DEV', false);
ini_set('display_errors', 1);
// fcgi doesn't have STDIN and STDOUT defined by default
defined('STDIN') or define('STDIN', fopen('php://stdin', 'r'));
defined('STDOUT') or define('STDOUT', fopen('php://stdout', 'w'));

require(__DIR__ . '/../../Yii/vendor/autoload.php');
require(__DIR__ . '/../../Yii/vendor/yiisoft/yii2/Yii.php');

$config = require(__DIR__ . '/../config/console.php');

$application = new yii\console\Application($config);
$exitCode = $application->run();
exit($exitCode);