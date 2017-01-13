function getInstancesOf(object, scope) {
     "use strict";

     var instances = [];

    for(var v in scope) {
        if(scope.hasOwnProperty(v) && scope[v] instanceof object) {
            instances.push(v);
        }
    }
    return instances;
}

(function() {
    "use strict";

    function GivenClass(name) {
        this.name = name;
    }
    GivenClass.prototype = {
        f: function() {
            console.log("MyClass.prototype.f(): " + this.name);
        }
    };

    window.GivenClass = GivenClass;
})();

var instance1 = new GivenClass("property of instance1");

console.log(getInstancesOf(GivenClass, window)[0]);
