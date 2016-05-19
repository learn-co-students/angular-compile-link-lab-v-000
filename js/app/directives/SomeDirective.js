function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs) {
			return {
				pre: function (scope, element, attrs) {
					element[0].innerText = 'New Text!';
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('click', function () {
						alert('Hey!');
					});
				}
			}
		},
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);