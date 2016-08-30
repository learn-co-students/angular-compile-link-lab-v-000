function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function($element, $attrs) {

			return {
				pre: function(scope, element, attrs) {
					element.html("change the text!")
				},
				post: function(scope, element, attrs) {
					element.on('click', function() {
						alert("hello!")
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
