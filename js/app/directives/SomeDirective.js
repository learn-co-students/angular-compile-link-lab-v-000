function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem.text('you have been replaced');
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);