function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem.text("Something else!")
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);