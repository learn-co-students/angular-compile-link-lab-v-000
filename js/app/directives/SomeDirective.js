function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem.html('THIS TEXT IS REPLACED')
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);