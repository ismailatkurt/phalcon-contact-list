<?php

use Phalcon\Mvc\Router\Group;

$apiRoutes = new Group(['module' => 'api']);

$apiRoutes->addGet('/users', [
    'module' => 'api',
    'controller' => 'users',
    'action' => 'index'
]);

$apiRoutes->addGet('/users/{id}/edit', [
    'module' => 'api',
    'controller' => 'users',
    'action' => 'edit'
]);

$apiRoutes->addPut('/users/{id}', [
    'module' => 'api',
    'controller' => 'users',
    'action' => 'update'
]);

$apiRoutes->addPost('/users', [
    'module' => 'api',
    'controller' => 'users',
    'action' => 'save'
]);

$apiRoutes->addGet('/contacts', [
    'module' => 'api',
    'controller' => 'contacts',
    'action' => 'index'
]);

$apiRoutes->addGet('/contacts/{id}/edit', [
    'module' => 'api',
    'controller' => 'contacts',
    'action' => 'edit'
]);

$apiRoutes->addPut('/contacts/{id}', [
    'module' => 'api',
    'controller' => 'contacts',
    'action' => 'update'
]);

$apiRoutes->addPost('/contacts', [
    'module' => 'api',
    'controller' => 'contacts',
    'action' => 'save'
]);

$apiRoutes->addPost('/auth/login', [
    'module' => 'api',
    'controller' => 'auth',
    'action' => 'login'
]);

$apiRoutes->addPost('/auth/logout', [
    'module' => 'api',
    'controller' => 'auth',
    'action' => 'logout'
]);

$apiRoutes->addOptions('/{catch:(.*)}', function() use ($application) {
    $application->response->setStatusCode(200, "OK")->send();
});

return $apiRoutes;