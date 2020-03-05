<?php

use Phalcon\Di\FactoryDefault;
use ReachPhalcon\Application\Bootstrap\DiKeys;
use Phalcon\Url;
use ReachPhalcon\Models\Users;
use Phalcon\Mvc\View\Simple;

$di = new FactoryDefault();

$di[DiKeys::VIEW] = function () {
    $view = new Simple();

    $view->setViewsDir(PROJECT_PATH . '/views');
    $view->registerEngines(
        [
            '.html'   => 'Phalcon\Mvc\View\Engine\Php',
        ]
    );

    return $view;
};

$di->setShared(DiKeys::ROUTER, function () use ($di) {
    $router = new \Phalcon\Mvc\Router();
    $router->removeExtraSlashes(true);

    $router->setDefaultModule('frontend');

    $frontendRoutes = require_once 'routes/frontend.php';
    $apiRoutes = require_once 'routes/api.php';
    $router->mount($frontendRoutes);
    $router->mount($apiRoutes);

    return $router;
});

$di->set(
    'url',
    function () {
        $url = new Url();
        $url->setBaseUri('/');
        return $url;
    }
);

$di->set(
    DiKeys::CURRENT_USER,
    function () use ($di) {

        $token = $di->get(DiKeys::REQUEST)->getHeader('token');
        $username = $di->get(DiKeys::REQUEST)->getHeader('username');

        return Users::findFirst(
            [
                'conditions'  => 'username = :username: AND token = :token:',
                'bind'        => [
                    'username' => $username,
                    'token' => $token
                ],
            ]
        );
    }
);