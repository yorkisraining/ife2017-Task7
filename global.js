function Observer(data) {
	this.data = data;
	this.walk(data);
}

let p = Observer.prototype;

p.walk = function(obj) {
	let val;
	for (let key in obj) {
		//判断obj是否有key属性
		if (obj.hasOwnProperty(key)) {
			//如果有赋值给val
			val = obj[key]; 
		}
		//把键和值传给convert
		this.convert(key, val);
	}
};

p.convert = function(key, val) {
	//Object.defineProperty(obj, prop, descriptor)
	Object.defineProperty(this.data, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			console.log('你访问了' +　key);
			return val
		},
		set: function(newval) {
			console.log('你设置了' + key);
			console.log('新的' + key + '=' + newval);
			if (newval === val) return;
			val = newval
		}
	})
};

let app1 = new Observer({
	name: 'yongwind',
	age: 25
});

let app2 = new Observer({
	university: 'bupt',
	major: 'computer'
});

