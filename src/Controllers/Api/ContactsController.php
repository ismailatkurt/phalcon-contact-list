<?php

namespace ReachPhalcon\Controllers\Api;

use Phalcon\Paginator\Adapter\Model;
use ReachPhalcon\Application\Bootstrap\DiKeys;
use ReachPhalcon\Models\Contacts;
use ReachPhalcon\Models\Users;

class ContactsController extends BaseController
{
    public function indexAction()
    {
        /** @var Users $user */
        $user = $this->di->get(DiKeys::CURRENT_USER);

        $params = $this->request->getQuery();
        $page = !empty($params['page']) ? $params['page'] : 1;
        $limit = !empty($params['limit']) ? $params['limit'] : 10;
        $searchTerm = !empty($params['searchTerm']) ? $params['searchTerm'] : '';

        $paginator = new Model(
            [
                "model" => Contacts::class,
                "parameters" => [
                    "conditions" => "(first_name like :searchTerm: OR " .
                        "last_name like :searchTerm: OR " .
                        "email like :searchTerm:) and user_id = :userId:",
                    "bind" => [
                        "searchTerm" => '%' . $searchTerm . '%',
                        "userId" => $user->id,
                    ],
                    'order' => 'created_at desc'
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

    public function saveAction()
    {
        /** @var Users $user */
        $user = $this->di->get(DiKeys::CURRENT_USER);

        $data = (array)$this->request->getJsonRawBody();

        $contact = new Contacts();
        $contact->first_name = $data['first_name'];
        $contact->last_name = $data['last_name'];
        $contact->email = $data['email'];
        $contact->user_id = $user->id;

        try {
            if ($contact->save()) {
                return $this->responseWithStatusCode(201);
            }
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }

    public function editAction($id)
    {
        /** @var Users $user */
        $user = $this->di->get(DiKeys::CURRENT_USER);

        $contact = Contacts::findFirst(
            [
                'conditions' => 'id = :id: and user_id =:userId:',
                'bind' => [
                    'id' => $id,
                    "userId" => $user->id,
                ],
            ]
        );

        try {
            return $this->responseJson($contact->toArray());
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }

    public function updateAction($id)
    {
        /** @var Users $user */
        $user = $this->di->get(DiKeys::CURRENT_USER);

        $data = (array)$this->request->getJsonRawBody();

        $contact = Contacts::findFirst(
            [
                'conditions' => 'id = :id: and user_id =:userId:',
                'bind' => [
                    'id' => $id,
                    "userId" => $user->id,
                ],
            ]
        );

        $contact->first_name = $data['first_name'];
        $contact->last_name = $data['last_name'];
        $contact->email = $data['email'];

        try {
            if ($contact->save()) {
                return $this->responseWithStatusCode(201);
            }
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }
}
