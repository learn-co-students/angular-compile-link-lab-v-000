function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return {
				pre: function (scope, element, attr) {
					element.html('<div>Something Else!</div>');
				},
				post: function (scope, element, attr) {
					element[0].addEventListener('click', function () {
						alert('Something');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
