function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function (element) {
			return {
				pre: function (scope, element, attrs) {
					element[0].innerText = 'Changed text';
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('click', function () {
						alert('Hey!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);