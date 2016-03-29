function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem[0].textContent="Different Text";
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
