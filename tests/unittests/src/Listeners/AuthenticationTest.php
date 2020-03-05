<?php

namespace ReachPhalcon\Tests\Listeners;

use PHPUnit\Framework\TestCase;
use PHPUnit_Framework_MockObject_MockObject;
use ReachPhalcon\Listeners\Authentication;
use Phalcon\Events\Event;
use Phalcon\Http\ResponseInterface;
use Phalcon\Mvc\Dispatcher;

class AuthenticationTest extends TestCase
{
    /**
     * @test
     */
    public function construct_test()
    {
        // prepare
        /** @var ResponseInterface|PHPUnit_Framework_MockObject_MockObject $responseMock */
        $responseMock = $this->createMock(ResponseInterface::class);

        $username = 'some.username';
        $password = 'somepass';

        // test
        $classUnderTest = new Authentication(
            $responseMock,
            $username,
            $password
        );

        // verify
        $this->assertInstanceOf(Authentication::class, $classUnderTest);
    }
}
