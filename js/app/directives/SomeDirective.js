function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($elem, $attrs) {
			$elem.html('<div>Hello</div>');
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
