<?php

namespace ReachPhalcon\Controllers\Api;

use Phalcon\Mvc\Controller;

class BaseController extends Controller
{
    /**
     * @param array $data
     * @param int $statusCode
     *
     * @return mixed
     */
    public function responseJson(array $data = [], int $statusCode = 200)
    {
        $this->response->setContentType('application/json', 'UTF-8');

        $this->response->setStatusCode($statusCode);
        $this->response->setContent(\json_encode($data));

        return $this->response;
    }

    /**
     * @param int $statusCode
     *
     * @return mixed
     */
    public function responseWithStatusCode(int $statusCode = 200)
    {
        $this->response->setContentType('application/json', 'UTF-8');
        $this->response->setStatusCode($statusCode);
        return $this->response;
    }
}
