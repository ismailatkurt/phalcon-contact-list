<?php

namespace ReachPhalcon\Models;

use Phalcon\Mvc\Model;

class Users extends Model
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $username;

    /**
     * @var string
     */
    public $password;

    /**
     * @var string
     */
    public $token;
}
