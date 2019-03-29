(function(window){
	var kQuery = function(selector){
		return new kQuery.fn.init(selector);
	};
	
	kQuery.fn = kQuery.prototype={
		constructor:kQuery,
		init:function(selector){
			//1.布尔值是false
			if(!selector){
				return this;
			}
			//2.函数
			else if(kQuery.isFunction(selector)){
				window.addEventListener('DOMContentLoaded',selector);
				this[0] = document;
				this.length = 1;
				return this;
			}
			//3.字符串
			else if(kQuery.isString(selector)){
				//3.1字符串为HTML代码片段
				if(kQuery.isHtml(selector)){
					var tempDOM = document.createElement('div');
					tempDOM.innerHTML = selector;
					for(var i = 0;i<tempDOM.children.length;i++){
						this[i] = tempDOM.children[i];
					};
					this.length = tempDOM.children.length;
					// return this;
				}
				//3.2字符串为选择器
				else{
					var doms = document.querySelectorAll(selector);
					for(var i = 0;i<doms.length;i++){
						this[i] = doms[i];
					};
					this.length = doms.length;
					return this;
				}
			}
			//4.数组
			else if(kQuery.isArray(selector)){
				for(var i = 0;i<selector.length;i++){
					this[i] = selector[i];
				}
				this.length = selector.length;
			}
			//5.对象
			else{
				this[0] = selector;
				this.length = 1;
			}	
		},
		get:function(num){
			if(num || num==0){
				if(kQuery.isNum(num)){
					if(num>=0){
						return this[num];
					}else{
						return this[this.length+num];
					}
				}
			}else{
				var arr = [];
				for(var i = 0;i<this.length;i++){
					arr.push(this[i]);
				}
				return arr;
			}
		}
	}
	kQuery.fn.extend = kQuery.extend = function(options){
		for(key in options){
			this[key] = options[key];
		}
	}
	kQuery.extend({
		isFunction:function(str){
		return typeof str == 'function';
		},
		isString:function(str){
			return typeof str == 'string';
		},
		isHtml:function(str){
			return /<[^<>]+>/.test(str);
		},
		isArray:function(str){
			return typeof str == 'object' && length in str;
		},
		isNum:function(str){
			return typeof str == 'number';
		}
	})
	
	kQuery.fn.init.prototype=kQuery.fn;
	window.kQuery = window.$ = kQuery;
})(window);
