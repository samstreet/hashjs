(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['hash'], factory);
    } else {
        // Browser globals
        root.hash = factory(root.hash);
    }
}(this, function (hash) {
    var hash =  function(){};

    hash.prototype.map = function (callback) {
	    var results = [], i = 0;
	    for ( ; i < this.length; i++) {
	        results.push(callback.call(this, this[i], i));
	    }
	    return results;
	};

	hash.prototype.matchType = function(item){
		switch(typeof item){
			case "object":
				return "object";
				break;
			case "array":
				return "array";
				break;
		} 
	};

	hash.prototype.each = function(obj, callback){
		var value, i = 0,
        length = obj.length,
        isArray = this.isArrayLike(obj);

        if (isArray) {
            for (; i < length; i++) {
                value = callback.call(obj[i], i, obj[i]);

                if (value === false) {
                    break;
                }
            }
        } else {
            for (i in obj) {
                value = callback.call(obj[i], i, obj[i]);

                if (value === false) {
                    break;
                }
            }
        }
	};

	hash.prototype.isArrayLike = function(item){
		return (
	        Array.isArray(item) || 
	        (!!item &&
	          typeof item === "object" &&
	          typeof (item.length) === "number" && 
	          (item.length === 0 ||
	             (item.length > 0 && 
	             (item.length - 1) in item)
	          )
	        )
	    );
	};

	return new hash();
}));