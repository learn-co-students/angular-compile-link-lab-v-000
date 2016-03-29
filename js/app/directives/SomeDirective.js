function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem.text('This is the new text')
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
