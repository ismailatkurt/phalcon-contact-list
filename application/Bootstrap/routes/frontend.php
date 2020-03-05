<?php

use Phalcon\Mvc\Router\Group;

$frontendRoutes = new Group(['module' => 'frontend']);

$frontendRoutes->addGet('/app', [
    'module' => 'frontend',
    'controller' => 'home',
    'action' => 'index'
]);

return $frontendRoutes;
