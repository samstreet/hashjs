(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['hashjs'], factory);
    } else {
        // Browser globals
        root.hash = factory(root.hashjs);
    }
}(this, function (hashjs) {
    var hash = (function() {

    	var hash = function( selector ) {
			return new hash.fn.init(selector);
		};

		// set up
    	hash.fn = hash.prototype = {

    		_version: "0.0.1",
    		_events: ["click"],
    		_selector: "",

	    	init: function(selector){

	    		if(!selector)
	    			return this;

	    		this._selector = selector;

	    		return hash;
	    	},
	    	map:function (callback) {
			    var results = [], i = 0;
			    for ( ; i < this.length; i++) {
			        results.push(callback.call(this, this[i], i));
			    }
			    return results;
			},
			each: function(obj, callback){
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
			},
			isArrayLike: function(item){
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
			},
			on:function(type, callback){
				if(this._events.indexOf(type) === -1){
					return;
				}

				window.addEventListener(type, callback);
			}
	    }; 

    	// methods
	    hash.map = function(callback){
	    	return hash.fn.map(callback);
	    }
	    hash.each = function(obj, callback){
	    	return hash.fn.each(obj, callback);
	    };
	    hash.on = function(type, callback){
	    	return hash.fn.on(type, callback);
	    };

	    return (window.hash = window.$ = hash);
    });

    return hash();
}));