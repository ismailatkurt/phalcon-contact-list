<?php

namespace ReachPhalcon\Controllers\Frontend;

use Phalcon\Mvc\Controller;
use ReachPhalcon\Controllers\Api\BaseController;

class HomeController extends BaseController
{
    public function indexAction()
    {
        return $this->view->render('index');
    }
}
