---
layout: page
title: "index"
title: "Underscore Unchained"
date: 2013-12-25 14:41
comments: true
sharing: true
footer: true
project: true
reponame: treelike

---

underscore-unchained
====================

[sigfried.github.io/underscore-unchained/](http://sigfried.github.io/underscore-unchained/)

    _.unchain(obj, magicPowers) // obj now has all the power of Underscore and any other powers you choose to give it

*A mixin that lets you use Underscore methods directly from objects or classes of objects, and there's no need for _.chain()*


{% codeblock lang:javascript %}
    _.unchain(['a','bb','ccc']) // unchain this humble array of strings
        .pluck('length')        // transform it into an array of numbers: [1,2,3]
        .last()                 // grab the last item (as a Number object)
        .range()                // create an array of that length
    => [0, 1, 2]                // look, Ma, no chains! No value()!
{% endcodeblock %}


*Defy the gods and bring the full power of Underscore to __all__ your Arrays, Objects, or whatever.
Also works with constructors of user-defined classes. Use at your own risk.*

``` javascript blah
_.prometheus(obj, magicPowers)  // Bring the power of Underscore or anything else 
                                // to entire object types!  Modifying built in types 
                                // is a seriously reckless undertaking and I totally 
                                // recommend against it, but, hey, what's the worst 
                                // that could happen?

_.prometheus(Array);
```

    ['a','bb','ccc'].pluck('length').last().range()  // OMG, my arrays can do anything!
    => [0, 1, 2]

