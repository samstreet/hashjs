(function () {
    function Hash () {
        return this;
    }

    Hash.prototype.map = function (callback) {
	    var results = [], i = 0;
	    for ( ; i < this.length; i++) {
	        results.push(callback.call(this, this[i], i));
	    }
	    return results;
	};

	Hash.prototype.matchType = function(item){
		console.log(typeof item);
		switch(typeof item){
			case "object":
				return "object";
		} 
	};

	window.hash = new Hash();
}());