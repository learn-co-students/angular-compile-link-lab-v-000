function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem[0].innerText = "Hello";
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);