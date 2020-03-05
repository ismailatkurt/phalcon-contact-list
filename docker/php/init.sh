#!/bin/bash

cd /var/www/html

curl -sS https://getcomposer.org/installer | php

### this line should applied for production
#php composer.phar install --no-dev --optimize-autoloader --classmap-authoritative

### for development
php composer.phar install --optimize-autoloader --classmap-authoritative

rm .phalcon/migration-version

### wait until mysql container is up and accepting connections
until nc -z -v -w30 mysql 3306
do
    echo "waiting"
    sleep 1
done

vendor/bin/phalcon-migrations migration run

php vendor/bin/phinx seed:run --environment=development

php vendor/phpunit/phpunit/phpunit tests/unittests/src

exec "$@"
