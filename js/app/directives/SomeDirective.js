function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			$element.text('This is replacing the prior text.');
			return {
				post: function ($scope, $elem, $attrs) {
					$element.on('click', function() {
						alert("Hello!");
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
