
# How to guide

## Running the application

##### Prerequisites

- docker engine with cli support
- keep port 80 free (if any webserver, nginx, apache etc. running please stop them)

```
cd into project directory

docker-compose up --build
```

then visit url below on your browser

There are 2 initial users
username: admin/test
password: admin_test_pass/test_pass

Each user can have separate contacts

http://localhost/app#/

## React
to watch live changes;

```
cd /project/path/react_src
npm run-script start
```

to create production ready build

```
cd /project/path/react_src
npm run-script build
```

This command will create bundle and move those files to views and public folders.

then visit/refresh app url
http://localhost/app#/

## Some details about application environment

Application uses 3 different docker images; mysql, php (7.4), nginx.

Build files of php and nginx can be found under **docker** directory.

### docker-compose up --build
- Command starts to build all images at the same time. Php image needs to wait mysql to be up, running and accepting requests in order to execute migrations and seeders. Thus inside init.sh there is a check for mysql instance and it waits until mysql is up.
- Nginx image will copy site configuration into default conf. It contains path to application index.php and sets some necessary headers.
- Mysql is basic mysql server.
- Php build script executes;
  - composer install
    - optimized with --optimize-autoloader --classmap-authoritative
    - autoload-dev and require-dev applied.
  - migrations
  - seeders
    - seeding admin and test user
    - seeding sample contacts for users **separately**. Meaning every user can have their own contacts attached to their user id.
  - unit tests
