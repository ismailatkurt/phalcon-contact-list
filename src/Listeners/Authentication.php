<?php

namespace ReachPhalcon\Listeners;

use Phalcon\Events\Event;
use Phalcon\Http\ResponseInterface;
use Phalcon\Mvc\Dispatcher;
use ReachPhalcon\Models\Users;

class Authentication
{
    /**
     * @var ResponseInterface
     */
    private ResponseInterface $response;

    /**
     * @var string
     */
    private string $username;

    /**
     * @var string
     */
    private string $token;

    /**
     * Authentication constructor.
     *
     * @param ResponseInterface $response
     * @param string $username
     * @param string $token
     */
    public function __construct(ResponseInterface $response, string $username, string $token)
    {
        $this->response = $response;
        $this->username = $username;
        $this->token = $token;
    }

    public function beforeExecuteRoute(Event $event, Dispatcher $dispatcher)
    {
        $controller = $dispatcher->getControllerName();
        $action = $dispatcher->getActionName();

        if ($controller . $action == 'authlogin') {
            return true;
        } else {
            $user = Users::findFirst(
                [
                    'conditions' => 'username = :username: AND token = :token:',
                    'bind' => [
                        'username' => $this->username,
                        'token' => $this->token
                    ],
                ]
            );

            if (empty($user)) {
                $this->response->setStatusCode(401);

                $dispatcher->setReturnedValue($this->response);

                return false;
            }

            return true;
        }
    }
}
