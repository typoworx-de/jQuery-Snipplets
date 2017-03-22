var _debug = document.location.hostname.toString().indexOf('.local') > -1;

(function() {
    window.console = console ||  { log: function() {} };
    if(_debug) {
        (console.info || console.log)("==============================\nActivating Development-Mode!\n==============================");
        (console.info || console.log)('[*] JS Exceptions active!');
    }

    window.throw = function(exp) { (console.error || console.log)(exp) };
    window.tryModule = function(f,n) {
        try {
            return f();
        } catch (exp) {
            if (_debug) {
                if(n != undefined) (console.error || console.log)('Exception in component \''+n+'\'', exp);
                else (console.error || console.log)(exp);
            }
        }
    };
})();

tryModule(function() {
    throw 'DOW';
}, 'test.unit.dow');

/**
Console throws this only if in debug-mode!

(x) Exception in component 'test.unit.dow' DOW
**/

console.log('This code runs anyway :D');


(function($) {
   // Your jQuery Stuff comes here
})(jQuery);
