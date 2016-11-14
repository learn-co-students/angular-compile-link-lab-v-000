function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem[0].innerText = "Anything";
		},
		// compile: function($element, $attrs) {
		// 	return {
		// 		pre: function() {

		// 		},
		// 		post: function() {

		// 		}
		// 	}
		// }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);