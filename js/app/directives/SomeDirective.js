function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
	        console.log('compile');
	        console.log($element);
	 
	        return {
	            pre: function (scope, element, attrs) {
	                console.log('pre-link');
	                console.log(element);
	                element.html("bla");

	            },
	            post: function (scope, element, attrs) {
	                console.log('post-link');
	                console.log(element);
	                //$(element).html('hello world');
	            }
	        }
	    }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);