<?php

use Phalcon\Config;

return new Config([
    'database' => [
        'adapter' => "Mysql",
        'host' => "mysql",
        'username' => "root",
        'password' => "example",
        'dbname' => "contact_list",
        'charset' => "utf8",
    ],
    'application' => [
        'baseUri' => "/",
    ],
]);
