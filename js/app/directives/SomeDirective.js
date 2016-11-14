function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		// link: function (scope, elem, attrs) {
		// 	elem[0].innerText = "Anything";
		// },
		compile: function($element, $attrs) {
			return {
				pre: function(scope, elem, attrs) {

				},
				post: function(scope, elem, attrs) {
					elem[0].innerText = "Anything";
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);