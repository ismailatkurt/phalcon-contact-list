<?php

namespace ReachPhalcon\Models;

use Phalcon\Db\RawValue;
use Phalcon\Mvc\Model;

class Contacts extends Model
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $first_name;

    /**
     * @var string
     */
    public $last_name;

    /**
     * @var string
     */
    public $email;

    /**
     * @var int
     */
    public $user_id;

    /**
     * @var \DateTime
     */
    public $created_at;

    public function initialize()
    {
        $this->belongsTo(
            'ixc_usr_id',
            Users::class,
            'user_id',
            [
                'reusable' => true,
                'alias' => 'contact'
            ]
        );
    }

    public function beforeCreate()
    {
        $this->created_at = new RawValue('now()');
    }
}
