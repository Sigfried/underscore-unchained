underscore-unchained
====================


    _.unchain(obj, magicPowers)

*Use Underscore methods directly from objects or classes of objects, and there's no need for _.chain()*

    @param {Object} obj The Object to be enhanced, usually an array.
    @param {Object} [magicPowers]
    @param {String[]} [magicPowers.include] Defaults to all the Underscore functions.
        Use an empty array if you don't want any Underscore functions.
    @param {String[]} [magicPowers.exclude] any Underscore functions you don't want.
    @param {Object} [magicPowers.more] map of any other methodNames and functions you'd like thrown in.
    @param {Object} [magicPowers.plainPrimitives=false] if true, don't turn primitive data types into Objects for enhancement.
    @return {Object} enhanced with methods which all return similarly enhanced results

    _.unchain(['a','bb','ccc'])
        .pluck('length')
        .last()
        .range()
    => [0, 1, 2]

    _.unchain(['a','bb','ccc'],{plainPrimitives:true})
        .pluck('length')
        .last()
        .range()
    => TypeError: Object 3 has no method 'range'

    _.prometheus(obj, magicPowers)

*Defy the gods and bring the full power of Underscore to *ALL* your Arrays, Objects, or whatever.
Also works with constructors of user-defined classes. Use at your own risk.*

    _.prometheus(Array);
    ['a','bb','ccc'].pluck('length').last().range()
    => [0, 1, 2]

