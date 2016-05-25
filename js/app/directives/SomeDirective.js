function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return {
				pre: function (scope, element, attrs) {
					//console.log(element[0].innerText);
					element[0].innerText = 'Something else'
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
