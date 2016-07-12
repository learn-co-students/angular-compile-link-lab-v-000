function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($elem, $attrs) {
			$elem[0].innerHTML = "<div>Compile was here!</div>"
			return {
            	pre: function (scope, element, attrs) {
                	console.log('pre-link');
            	},
            	post: function (scope, element, attrs) {
                	element[0].addEventListener('click', function (event) {
     					alert('Hi!');
 					});
            	}
        	}
		},
		link: function (scope, elem, attrs) {
			console.log(elem)
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);