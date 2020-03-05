<?php

namespace ReachPhalcon\Controllers\Api;

use Phalcon\Paginator\Adapter\Model;
use ReachPhalcon\Models\Users;

class UsersController extends BaseController
{
    public function indexAction()
    {
        $params = $this->request->getQuery();
        $page = !empty($params['page']) ? $params['page'] : 1;
        $limit = !empty($params['limit']) ? $params['limit'] : 10;
        $searchTerm = !empty($params['searchTerm']) ? $params['searchTerm'] : '';

        $paginator = new Model(
            [
                "model" => Users::class,
                "parameters" => [
                    "conditions" => "username like :searchTerm:",
                    "bind" => [
                        "searchTerm" => '%' . $searchTerm . '%'
                    ]
                ],
                "limit" => $limit,
                "page" => $page,
            ]
        );

        $paginate = $paginator->paginate();
        $result = [
            'items' => $paginate->getItems(),
            'totalPageCount' => ceil($paginate->getTotalItems() / $limit)
        ];

        return $this->responseJson($result);
    }

    public function editAction($id)
    {
        $user = Users::findFirst(
            [
                'conditions' => 'id = :id:',
                'bind' => [
                    'id' => $id
                ],
            ]
        );

        try {
            return $this->responseJson($user->toArray());
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }

    public function updateAction($id)
    {
        $data = (array)$this->request->getJsonRawBody();

        $user = Users::findFirst(
            [
                'conditions' => 'id = :id:',
                'bind' => [
                    'id' => $id
                ],
            ]
        );

        $user->username = $data['username'];
        $user->password = password_hash($data['password'], PASSWORD_BCRYPT, ['12']);

        try {
            if ($user->save()) {
                return $this->responseWithStatusCode(201);
            }
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }

    public function saveAction()
    {
        $data = (array)$this->request->getJsonRawBody();

        $user = new Users();
        $user->username = $data['username'];
        $user->password = $data['password'];

        try {
            if ($user->save()) {
                return $this->responseWithStatusCode(201);
            }
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }
}
