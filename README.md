underscore-unchained
====================

[sigfried.github.io/underscore-unchained/](http://sigfried.github.io/underscore-unchained/)

    _.unchain(obj, magicPowers)

*A mixin that lets you use Underscore methods directly from objects or classes of objects, and there's no need for _.chain()*

    _.unchain(['a','bb','ccc'])
        .pluck('length')
        .last()
        .range()
    => [0, 1, 2]

    _.prometheus(obj, magicPowers)

*Defy the gods and bring the full power of Underscore to __all__ your Arrays, Objects, or whatever.
Also works with constructors of user-defined classes. Use at your own risk.*

    _.prometheus(Array);
    ['a','bb','ccc'].pluck('length').last().range()
    => [0, 1, 2]

