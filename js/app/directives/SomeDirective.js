function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return {
				pre: function ($scope, $element, $attrs) {
					$element[0].innerText = "Boo";
				},
				post: function ($scope, $element, $attrs) {
					$element[0].addEventListener('mouseover', function() {
						alert('Boo!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
