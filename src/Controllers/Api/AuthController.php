<?php

namespace ReachPhalcon\Controllers\Api;

use ReachPhalcon\Models\Users;

class AuthController extends BaseController
{
    public function loginAction()
    {
        $data = (array)\json_decode($this->request->getRawBody());

        try {
            $user = Users::findFirst(
                [
                    'conditions' => 'username = :username:',
                    'bind' => [
                        'username' => $data['username']
                    ],
                ]
            );

            if (empty($user)) {
                return $this->responseWithStatusCode(401);
            } else {

                if (password_verify($data['password'], $user->password)) {
                    $token = bin2hex(random_bytes(16));

                    $user->token = $token;
                    if ($user->save()) {
                        return $this->responseJson(
                            [
                                'token' => $token,
                                'username' => $user->username
                            ]
                        );
                    }
                }

                return $this->responseWithStatusCode(401);
            }
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }

    public function logoutAction()
    {
        $data = (array)\json_decode($this->request->getRawBody());

        try {
            $user = Users::findFirst(
                [
                    'conditions' => 'username = :username: and token = :token:',
                    'bind' => [
                        'username' => $data['username'],
                        'token' => $data['token']
                    ],
                ]
            );

            if (empty($user)) {
                return $this->responseWithStatusCode(401);
            } else {
                $user->token = null;
                if ($user->save()) {
                    return $this->responseWithStatusCode(200);
                }

                return $this->responseWithStatusCode(401);
            }
        } catch (\Exception $exception) {
            $result['error'] = $exception->getMessage();
            return $this->responseJson($result, 400);
        }
    }
}
