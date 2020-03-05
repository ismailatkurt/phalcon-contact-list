<?php

namespace ReachPhalcon\Application\Bootstrap\Modules;

use Phalcon\Di\DiInterface;
use Phalcon\Events\Manager as EventsManager;
use Phalcon\Http\ResponseInterface;
use Phalcon\Loader;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\ModuleDefinitionInterface;
use ReachPhalcon\Application\Bootstrap\DiKeys;
use ReachPhalcon\Listeners\Authentication;
use ReachPhalcon\Listeners\Cors;

class Api implements ModuleDefinitionInterface
{
    /**
     * @param DiInterface $dependencyInjector
     */
    public function registerAutoloaders(DiInterface $dependencyInjector = null)
    {
    }

    /**
     * Registers services related to the module
     *
     * @param DiInterface $di
     */
    public function registerServices(DiInterface $di)
    {
        $di->setShared(DiKeys::DISPATCHER, function () use ($di) {
            $dispatcher = new Dispatcher();
            $dispatcher->setDefaultNamespace('ReachPhalcon\\Controllers\\Api');

            /** @var EventsManager $eventsManager */
            $eventsManager = $di->get(DiKeys::EVENTS_MANAGER);
            $dispatcher->setEventsManager($eventsManager);

            $token = $di->get(DiKeys::REQUEST)->getHeader('token');
            $username = $di->get(DiKeys::REQUEST)->getHeader('username');

            /** @var ResponseInterface $response */
            $response = $di->get(DiKeys::RESPONSE);

            $eventsManager->attach(
                'dispatch:beforeExecuteRoute',
                new Authentication(
                    $response,
                    $username,
                    $token
                ),
                1
            );

            return $dispatcher;
        });
    }
}
