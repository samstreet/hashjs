(function () {
    function xXx () {
        return this;
    }

    xXx.prototype.map = function (callback) {
	    var results = [], i = 0;
	    for ( ; i < this.length; i++) {
	        results.push(callback.call(this, this[i], i));
	    }
	    return results;
	};

	xXx.prototype.matchType = function(item){
		switch(typeof item){
			case "object":
				return "object";
				break;
			case "array":
				return "array";
				break;
		} 
	};

	xXx.prototype.each = function(items){
		debugger;
		switch(this.matchType(items)){
			case "array":
				items.forEach(function(value){
					console.log(value);
				});
				break;
			case "object":
				break;
			default:
				return items;
		};
	};

	window.xXx = new xXx();
}());