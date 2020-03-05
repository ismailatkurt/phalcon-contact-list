<?php

namespace ReachPhalcon\Application\Bootstrap\Modules;

use Phalcon\Di\DiInterface;
use Phalcon\Http\ResponseInterface;
use Phalcon\Loader;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Mvc\ModuleDefinitionInterface;
use ReachPhalcon\Application\Bootstrap\DiKeys;
use ReachPhalcon\Listeners\Cors;

class Frontend implements ModuleDefinitionInterface
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
            $dispatcher->setDefaultNamespace('ReachPhalcon\\Controllers\\Frontend');

            return $dispatcher;
        });
    }
}
