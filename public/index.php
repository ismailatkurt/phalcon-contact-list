<?php

header('Access-Control-Allow-Origin: *');

use Phalcon\Mvc\Application;

define('PROJECT_PATH', dirname(dirname(__FILE__)));

require_once PROJECT_PATH . '/application/Bootstrap/constants.php';
require_once VENDOR_PATH . 'autoload.php';
require_once APPLICATION_PATH . "Bootstrap/dependencies.php";

/**
 * Register Service Providers
 */
$providers = PROJECT_PATH . '/application/Bootstrap/config/providers.php';
if (!file_exists($providers) || !is_readable($providers)) {
    throw new Exception('File providers.php does not exist or is not readable.');
}

/** @var array $providers */
$providers = include_once $providers;
foreach ($providers as $provider) {
    $di->register(new $provider());
}

$application = new Application($di);
$application->useImplicitView(false);

$application->registerModules([
    'api' => [
        'path' => APPLICATION_PATH . 'Bootstrap/Modules/Api.php',
        'className' => \ReachPhalcon\Application\Bootstrap\Modules\Api::class
    ],
    'frontend' => [
        'path' => APPLICATION_PATH . 'Bootstrap/Modules/Frontend.php',
        'className' => \ReachPhalcon\Application\Bootstrap\Modules\Frontend::class
    ],
]);

try {
    $response = $application->handle(
        $_SERVER["REQUEST_URI"]
    );
    $response->send();
} catch (Exception $exception) {
    var_dump($exception);
    die;
}